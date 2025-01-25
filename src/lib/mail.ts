import nodemailer from "nodemailer";
import logger from "./logger";



const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.example.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER || "user@example.com",
    pass: process.env.EMAIL_PASS || "password",
  },
});

export default async function sendEmail(
  email: string,
  token: string
): Promise<void> {
  const verificationUrl = `http://localhost:3000/confirm-email/${token}`; // Update to your actual URL

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "no-reply@example.com",
      to: email,
      subject: "verified email",
      text: "Please confirm your email",
      html: `Please click on the following link to verify your emaildsDFASDF: <a href="${verificationUrl}">${verificationUrl}</a>`, // Optional HTML content
    });

    logger.info(`Email sent to ${email} with subject: CONFIRM_EMAIL`);
  } catch (error) {
    logger.error(`Failed to send email to ${email}:`, error);
    throw new Error("Email sending failed");
  }
}
