const Instructor = require("../models/Instructor");
const Student = require("../models/Student");
const otpGenerator = require("otp-generator");
const { main } = require("../utils/sendEmail");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  // Define the structure of inputs
  const userSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    role: z
      .string()
      .min(1, "Role is required")
      .oneOf(["Student", "Instructor"]),
  });

  // Validate inputs based on the above structure
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: `Invalid Inputs: ${JSON.stringify(result.error.format())}`,
    });
  }

  // Extract validated data
  const { firstName, lastName, email, password, role } = result.data;

  try {
    // Check if user(Student/Instructor) already exists
    const existingUser = await (role === "Student"
      ? Student
      : Instructor
    ).findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: `${role} with provided email already exists`,
      });
    }

    // Generate OTP and hash it
    let otp = otpGenerator.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    const otpSend = otp;
    otp = await bcrypt.hash(otp, 10);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await (role === "Student" ? Student : Instructor).create({
      firstName,
      lastName,
      password: hashedPassword,
      email,
      role,
      otpCreatedAt: Date.now(),
      otp,
    });

    // Generate JWT token
    const payload = { userId: newUser._id };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "30d" });

    // Send email with the OTP and the email of the user
    await main(
      "edubridge121@gmail.com",
      email,
      "EduBridge Email Verification",
      `Dear User, thanks for signing up with Edubridge! To complete your registration, please verify your email address using the following One-Time Password (OTP): ${otpSend}`
    );

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      token,
      role,
      id: newUser._id,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "Error occurred while creating user",
    });
  }
};
