import Image, { StaticImageData } from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

type CardProps = {
  hotel: {
    id: string;
    listingId: number;
    image: StaticImageData;
    location: string;
    name: string;
    pricePerNight: number;
    startDate: Date;
    endDate: Date;
    daysDifference: number;
  };
};
const Card = ({ hotel }: CardProps) => {
  return (
    <div className="flex flex-col shadow">
      <Link href={`/details/${hotel.listingId}`}>
        <Image
          alt=""
          src={hotel.image}
          className="rounded-xl w-full h-[300px] rounded-b-none object-cover shadow-xl"
        />
      </Link>

      <div className="p-2 mt-4 flex flex-col gap-1">
        <span className="font-semibold text-red-700">{hotel.location}</span>
        <span className="font-semibold text-2xl">{hotel.name} </span>
        <div className="flex">
          <span className="text-slate-600">
            {format(hotel.startDate, "MMM do YYY")}
          </span>
          <span className="px-2">-</span>
          <span className="text-slate-600">
            {format(hotel.endDate, "MMM do YYY")}
          </span>
        </div>
        <div>
          <span className="text-slate-700 "> Total Price :</span> $
          {hotel.daysDifference * hotel.pricePerNight}
        </div>

        <button className="bg-red-600 font-semibold hover:bg-red-500 text-white rounded px-4 py-2 my-6">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Card;
