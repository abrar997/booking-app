import db from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    const isExisting = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (isExisting) {
      return NextResponse.json(
        { message: "You have already registered" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: { email, username, password: hashedPassword },
    });

    return NextResponse.json({ message: "User has registered successfully" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
