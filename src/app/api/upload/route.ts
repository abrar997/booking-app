import db from "@/lib/db";
import imagekit from "@/lib/imagekit";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const desc = formData.get("desc") as string;
    const beds = Number(formData.get("beds"));
    const hasFreeWifi = formData.get("hasFreeWifi") === "true";
    const type = formData.get("type") as string;
    const location = formData.get("location") as string;
    const priceNight = Number(formData.get("priceNight"));

    const files = formData.getAll("files") as File[];
    const uploadUrls: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const upload = await imagekit.upload({
        file: buffer,
        fileName: file.name,
        folder: "/upload",
      });
      uploadUrls.push(upload.url);
    }
    const listing = await db.listing.create({
      data: {
        name,
        desc,
        beds,
        hasFreeWifi,
        type,
        location,
        priceNight,
        imageUrls: uploadUrls,
      },
    });
    return NextResponse.json({ success: true, listing });
  } catch (error) {}
  return NextResponse.error();
}
