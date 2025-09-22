import db from "@/lib/db";
import { calcAndSortListing } from "@/lib/sortListings";
import { NextResponse } from "next/server";

export async function GET(req: any, ctx: any) {
  try {
    const { id } = ctx.params.id;
    const listing = await db.listing.findUnique({
      where: { id },
      include: {
        reviews: true,
        reservations: true,
      },
    });
    const listingWithRating = calcAndSortListing(listing);

    return NextResponse.json(listingWithRating);
  } catch (error) {
    return NextResponse.json(error);
  }
}
