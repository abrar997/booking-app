import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    Object.values(body).forEach((v) => {
      if (v === "") return NextResponse.json({ message: "Fill all fields!" });
    });
    const {
      name,
      desc,
      location,
      priceNight,
      type,
      beds,
      hasFreeWifi,
      imageUrls,
    } = body;

    const newListing = await db.listing.create({
      data: {
        name,
        location,
        desc,
        type,
        priceNight,
        beds,
        hasFreeWifi,
        imageUrls,
      },
    });

    return NextResponse.json(newListing);
  } catch (error) {
    return NextResponse.json(error);
  }
}
