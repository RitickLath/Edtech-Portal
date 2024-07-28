const { z } = require("zod");
const { main } = require("../utils/sendEmail");

exports.contact = async (req, res) => {
  // schema for validating the contact form data
  const contactFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().length(10, "Phone number must be 10 digits"),
    message: z.string().max(200, "Max length of message reached"),
  });

  // Validated the form data based on above schema
  const result = contactFormSchema.safeParse(req.body);

  if (!result.success) {
    return res
      .status(400)
      .json({ success: false, message: result.error.errors });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  try {
    await main(
      email,
      "EduBridge",
      "Thank you for reaching out to EduBridge! We have received your inquiry and our team will get back to you as soon as possible.",
      "We appreciate your interest in EduBridge and look forward to assisting you. Sooner an executive will contact you from our side"
    );

    return res.status(200).json({
      success: true,
      message: "Message received! We will get back to you soon.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message:
        "An error occurred while processing your request. Please try again later.",
    });
  }
};
