import db from "@/lib/db";

import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

export async function POST(req: any) {
  try {
    const body = await req.json();
    const { email, username, password } = body;
    // if (!username || !email || !password) {
    //   return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    // }

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

    // const hashedPassword =await bcrypt.hash(password, 10);
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: { email, username, password: hashedPassword },
    });

    return NextResponse.json({
      message: "User has registered successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.error();
  }
}
