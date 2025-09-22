import { getCurrentUser } from "@/lib/currentUser";
import db from "@/lib/db";
import { getDatesInRange } from "@/lib/getDatesInRange";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    const currentUser = await getCurrentUser();

    if (currentUser.isAdmin) {
      const allReservations = await db.reservations.findMany({
        include: {
          listing: true,
        },
      });
      return NextResponse.json(allReservations);
    } else {
      const userReservations = await db.reservations.findMany({
        where: { userId: currentUser.id },
        include: {
          listing: true,
        },
      });
      return NextResponse.json(userReservations);
    }
  } catch (error) {
    NextResponse.json(error);
  }
}

export async function POST(req: Request) {
  try {
    const currentUSer = await getCurrentUser();
    const body = await req.json();
    const { startDate, endDate, listingId, daysDifference, chargeID } = body;

    const listing = await db.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        reservations: true,
      },
    });
    const allBookedDates = listing.reservations.flatMap((reservation) => {
      const reservedDate = reservation.reservedDates;
      return reservedDate;
    });
    const getDates = getDatesInRange(startDate, endDate);
    const isUnavailable = allBookedDates.some((date) =>
      getDates.includes(date)
    );
    if (isUnavailable) {
      return NextResponse.json({
        message: "You are trying to reserve a booked date!",
      });
    }

    const newReservation = await db.reservations.create({
      data: {
        startDate,
        endDate,
        daysDifference,
        listingId,
        reservedDates: getDates,
        userId: currentUSer.id,
        chargeID,
      },
    });
  } catch (error) {
    NextResponse.json(error);
  }
}
