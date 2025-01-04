import { dbConnect } from "@/lib/db";
import logger from "@/lib/logger";
import sendEmail from "@/lib/mail";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
export async function POST(req: NextRequest) {
  const emailToken = uuidv4();

  try {
    await dbConnect(); // Ensure DB connection

    const { email, password, name } = await req.json();

    const salt = await bcrypt.genSalt(10);
    //   this.password = await bcrypt.hash(this.password, salt);
   const hashPass= await bcrypt.hash(password, salt);
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      logger.warn(
        `Registration attempt with already registered email: ${email}`
      );
      return NextResponse.json(
        { message: "Email is already registered." },
        { status: 400 }
      );
    }

    const newUser = new User({
      name,
      email,
      password: hashPass,
      emailToken,
    });

    // Create a new user
    const savedUser = await newUser.save();
    await sendEmail(email, emailToken);

    logger.info(`User registered successfully: ${email}`);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    logger.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
