import { getCurrentUser } from "@/lib/currentUser";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any, ctx: any) {
  try {
    const { listingId } = ctx.params.id;
    const listing = await db.listing.findUnique({
      where: { id: listingId },
      include: { reviews: true },
    });
    const reviewsId = listing.reviews.map(({ id }) => id);

    const reviews = await db.review.findMany({
      where: {
        id: {
          in: reviewsId,
        },
      },
      include: {
        user: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    NextResponse.json(error);
  }
}
