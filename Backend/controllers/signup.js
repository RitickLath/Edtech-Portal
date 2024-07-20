const { z } = require("zod");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

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

    // Create new user
    const newUser = await User.create({
      firstName,
      lastName,
      password,
      email,
      role,
    });

    // Fetch the user details
    req.userId = newUser._id;

    // Generate JWT token
    const payload = { userId: newUser._id };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "30d" });

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
