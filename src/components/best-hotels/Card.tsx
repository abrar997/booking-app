import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
type CardProps = {
  name: string;
  image: StaticImageData;
  category: string;
  reviews: number;
  location: string;
  price: number;
};
const Card = ({
  name,
  image,
  reviews,
  price,
  location,
  category,
}: CardProps) => {
  const currencyFormatter = require("currency-formatter");
  return (
    <Link
      href="/details/1"
      className="rounded group grid gap-4 shadow cursor-pointer hover:shadow-xl transition-all duration-700"
    >
      <div className="relative">
        <Image src={image} alt="" className="rounded-t h-72 object-cover" />
        <div className="bg-red-600 font-semibold rounded text-white px-4 py-2 rounded-b-none absolute right-0 bottom-0">
          {location}
        </div>
      </div>
      <div className="p-4 pt-0 grid gap-2">
        <div className="grid gap-2">
          <h2 className="text-xl font-semibold capitalize text-slate-800">
            {name}
          </h2>
          <span className="rounded font-semibold  text-blue-600 flex items-center gap-1">
            <AiFillStar /> <span>{reviews}</span>
          </span>
          {/* price and reviews */}
          <span className="font-semibold text-slate-600">
            ${currencyFormatter.format(price, { local: "en-US" })}
            <span className="lg:ml-1 text-sm">per night</span>
          </span>
        </div>
        <button className="opacity-0 mt-2 group-hover:opacity-100 transition-all duration-300 hover bg-red-600 text-white font-semibold rounded px-4 py-2">
          Book now
        </button>
      </div>
    </Link>
  );
};

export default Card;
