import db from "@/lib/db";
import { calcAndSortListing } from "@/lib/sortListings";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    const listings = await db.listing.findMany({
      include: {
        reviews: true,
      },
    });
    const sortedListings = calcAndSortListing(listings).slice(0, 4);
  } catch (error) {
    NextResponse.json(error);
  }
}
