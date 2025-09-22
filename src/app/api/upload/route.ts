import imagekit from "@/lib/imagekit";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    const buffer = Buffer.from(await file.arrayBuffer());
    const uploaded = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/upload",
    });
    return NextResponse.json({ url: uploaded.url });
  } catch (error) {
    NextResponse.json(error);
  }
}
