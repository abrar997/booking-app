import db from "@/lib/db";
import imagekit from "@/lib/imagekit";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const formData = await req.FormData();
    const file = formData.get("file") as File;
    const listingId = formData.get("listingId") as string;

    if (!file || !listingId) return;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: file.name,
    });
    const updateUser = await db.listing.update({
      where: { id: listingId },
      data: { imageUrls: { push: uploadResponse.url } },
    });
    return NextResponse.json({ success: true, user: updateUser });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
