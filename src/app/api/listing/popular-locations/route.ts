import db from "@/lib/db";
import { calcAndSortListing } from "@/lib/sortListings";

import { NextResponse } from "next/server";
import erbil from "../../../../../public/assets/erbil.jpg";
import baghdad from "../../../../../public/assets/baghdad.jpg";
import basra from "../../../../../public/assets/basra.jpg";
import amman from "../../../../../public/assets/amman.jpg";
import istanbul from "../../../../../public/assets/istanbul.jpg";
import ankara from "../../../../../public/assets/ankara.jpg";

export async function GET(req: any) {
  try {
    const erbilListings = await db.listing.count({
      where: {
        location: "erbil",
      },
    });
    const ammanListings = await db.listing.count({
      where: {
        location: "amman",
      },
    });
    const basraListings = await db.listing.count({
      where: {
        location: "basra",
      },
    });
    const baghdadListings = await db.listing.count({
      where: {
        location: "baghdad",
      },
    });
    const ankaraListings = await db.listing.count({
      where: {
        location: "ankara",
      },
    });
    const istanbulListings = await db.listing.count({
      where: {
        location: "istanbul",
      },
    });
    const results = [
      {
        numberOfPlaces: erbilListings,
        image: erbil,
        value: "erbil",
      },
      {
        numberOfPlaces: baghdadListings,
        image: baghdad,
        value: "baghdad",
      },
      {
        numberOfPlaces: basraListings,
        image: basra,
        value: "basra",
      },
      {
        numberOfPlaces: ammanListings,
        image: amman,
        value: "amman",
      },
      {
        numberOfPlaces: ankaraListings,
        image: ankara,
        value: "ankara",
      },
      {
        numberOfPlaces: istanbulListings,
        image: istanbul,
        value: "istanbul",
      },
    ];
    const sortedResult = results
      .sort((a, b) => b.numberOfPlaces - a.numberOfPlaces)
      .slice(0, 4);

    return NextResponse.json(sortedResult);
  } catch (error) {
    return NextResponse.json(error);
  }
}
