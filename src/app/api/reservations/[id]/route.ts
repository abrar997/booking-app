import { getCurrentUser } from "@/lib/currentUser";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any, csx: any) {
  try {
    const currentUser = await getCurrentUser();
    if (currentUser.isAdmin) {
      const allReservations = await db.reservations.findMany({
        include: {
          listing: true,
        },
      });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
