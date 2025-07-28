import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  numberOfPlaces?: number;
  city: string;
  image: StaticImageData;
};
const Card = ({ city, image, numberOfPlaces }: CardProps) => {
  return (
    <Link
      href="/catelog"
      className="rounded grid gap-4 shadow cursor-pointer hover:shadow-xl transition-all duration-700"
    >
      <div className="relative">
        <Image src={image} alt="" className="rounded-t h-72 object-cover" />
        <div className="bg-red-600 font-semibold rounded text-white px-4 py-2 rounded-b-none absolute right-0 bottom-0">
          {city}
        </div>
      </div>
      <div className="p-4 pt-0 grid gap-2">
        <h2 className="text-xl capitalize text-slate-800">
          <span className="border-b">{numberOfPlaces}</span> places to stay
        </h2>
        <h1 className="text-[16px] text-slate-700">
          Discover the best hotel or apartment for your adventure journey
        </h1>
      </div>
    </Link>
  );
};

export default Card;
