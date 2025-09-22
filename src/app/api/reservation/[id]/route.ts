import { getCurrentUser } from "@/lib/currentUser";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: any, ctx: any) {
  try {
    const { id } = ctx.params.id;
    const currentUser = await getCurrentUser();
    const reservation = await db.reservations.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
    if (reservation.user.id !== currentUser.id && !currentUser.isAdmin) {
      return NextResponse.json({
        message: "USer has no permissions to cancel the reservation",
      });
    }
    await db.reservations.delete({
      where: { id },
    });
    return NextResponse.json(
      { message: `Successfully to deleted reservation with id of ${id}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}
