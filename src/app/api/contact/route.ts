import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message, title } = await req.json();

    if (!name||!phone || !email || !message || !title) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can also use "smtp.mailtrap.io", "outlook", etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App Password or Email Password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Admin's email
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <h1>${title}</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Name:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
