const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

async function main(userEmail, to, subject, text) {
  const info = await transporter.sendMail({
    from: `"EduBridge" ${userEmail}`,
    to: to,
    subject: subject,
    text: text,
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = { main };
