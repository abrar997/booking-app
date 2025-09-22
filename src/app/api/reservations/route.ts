import { getCurrentUser } from "@/lib/currentUser";
import db from "@/lib/db";
import isAdminUser from "@/lib/isAdminUser";
import { NextResponse } from "next/server";

export async function GET(req: any, csx: any) {
  try {
    await isAdminUser();
    const allReservations = await db.reservations.findMany({
      include: {
        listing: true,
      },
    });

    return NextResponse.json(allReservations);
  } catch (error) {
    return NextResponse.json(error);
  }
}
