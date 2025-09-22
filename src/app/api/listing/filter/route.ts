import db from "@/lib/db";
import { calcAndSortListing } from "@/lib/sortListings";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    //query params
    const { searchParams } = new URL(req.url);
    const location = searchParams.get("location");
    const minPrice = Number(searchParams.get("min-price"));
    const maxPrice = Number(searchParams.get("max-price"));
    const type = searchParams.get("type");
    const listings = await db.listing.findMany({
      where: {
        priceNight: {
          gte: minPrice,
          lte: maxPrice,
        },
        location,
        type,
      },
    });
    const sortedListings = calcAndSortListing(listings);
    return NextResponse.json(sortedListings);
  } catch (error) {
    return NextResponse.json(error);
  }
}
