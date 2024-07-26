const { z } = require("zod");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const { main } = require("../utils/sendEmail");
const { userEmail, to, subject, text, html } = require("../utils/constant");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");

exports.signup = async (req, res) => {
  // Defined structure of inputs
  const userSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    role: z.string().min(1, "Role is required"),
  });

  // Validate inputs based on above structure
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    console.log(req.body);
    return res.status(400).json({
      success: false,
      message: `Invalid Inputs: ${JSON.stringify(result.error.format())}`,
    });
  }

  // Extract validated data
  const { firstName, lastName, email, password, role } = result.data;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with provided email already exists",
      });
    }

    // generate otp and hash it
    let otp = otpGenerator.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    const otpSend = otp;
    otp = await bcrypt.hash(otp, 10);

    // Create new user
    const newUser = await User.create({
      firstName,
      lastName,
      password,
      email,
      role,
      otpCreatedAt: Date.now(),
      otp,
    });

    // Fetch the user details
    req.userId = newUser._id;

    // Generate JWT token
    const payload = { userId: newUser._id };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "30d" });

    // send email with the otp and the email of the user
    main(
      "edubridge121@gmail.com",
      email,
      "EduBridge Email Verification",
      `Dear User thanks for signing up with Edubridge! To Complete your registraction, please verify your email address using the following One-Time Password (OTP): ${otpSend}`
    );

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "Error occurred while creating user",
    });
  }
};
