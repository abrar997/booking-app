"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/assets/hr_1.jpg";
import Select from "@/ui/Select";
import { optionLocations, optionTypes } from "../../data/data";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import Card from "@/components/best-hotels/Card";

import hotel1 from "../../../public/assets/hr_1.jpg";
import hotel2 from "../../../public/assets/hr_2.jpg";
import hotel3 from "../../../public/assets/hr_3.jpg";
import hotel4 from "../../../public/assets/hr_4.jpg";
import hotel5 from "../../../public/assets/hr_5.jpg";

const data = [
  {
    name: "Arabian Paradise",
    image: hotel1,
    price: 303.43,
    category: "Luxury",
    reviews: 4.7,
    location: "Erbil- Iraq",
  },
  {
    name: "Arabian Paradise",
    image: hotel2,
    price: 120.43,
    category: "Luxury",
    reviews: 4.7,
    location: "Erbil- Iraq",
  },
  {
    name: "Arabian Paradise",
    image: hotel3,
    price: 90.43,
    category: "Luxury",
    reviews: 4.7,
    location: "Erbil- Iraq",
  },
  {
    name: "Arabian Paradise",
    image: hotel4,
    price: 100.43,
    category: "Luxury",
    reviews: 4.7,
    location: "Erbil- Iraq",
  },
  {
    name: "Arabian Paradise",
    image: hotel5,
    price: 100.43,
    category: "Luxury",
    reviews: 4.7,
    location: "Erbil- Iraq",
  },
];

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="relative h-2/5 w-full">
        <Image
          alt=""
          src={image}
          className="brightness-50 h-screen w-full object-cover"
        />
        <h3 className="absolute text-6xl capitalize font-semibold flex items-center justify-center inset-0 text-white">
          Erbil
        </h3>
      </div>

      <div className="relative z-20 -mt-12 h-full w-full flex items-center justify-center">
        <form
          action=""
          className="flex lg:flex-nowrap flex-wrap z-40 lg:gap-12 gap-8 md:p-4 p-2 items-start absolute -top-12 lg:w-2/3 lg:h-28 lg:p-4 rounded-lg bg-red-600 text-white mx-2 lg:mx-0"
        >
          <div className="flex flex-col lg:items-center gap-2">
            <h1 className="ml-1 text-xl font-semibold">City</h1>

            <Select
              data={optionLocations}
              className="p-2 rounded-lg outline-none bg-slate-50 text-red-600 capitalize "
            />
          </div>

          <div className="flex flex-col lg:items-center gap-2">
            <h3 className="ml-1 text-xl font-semibold">Price</h3>
            <div className="flex items-center gap-3">
              <Input
                type="number"
                placeholder="Min. price"
                className="text-slate-700 bg-slate-50 outline-none rounded-lg p-2"
              />
              <Input
                type="number"
                placeholder="Max. price"
                className="text-slate-700 bg-slate-50 outline-none rounded-lg p-2"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="ml-1 text-xl font-semibold">Type of Hotel</h3>
            <Select
              data={optionTypes}
              className="p-2 rounded-lg outline-none w-full bg-slate-50 text-red-600 capitalize"
            />
          </div>
          <Button
            text="Search"
            disabled={false}
            className="lg:mt-8 mt-2 px-6 py-2 w-full text-[16px] bg-red-100 text-red-600 rounded-lg"
          />
        </form>
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full mt-86 md:mt-42 p-4 pb-12 lg:mt-24 lg:p-12 justify-center items-center lg:gap-14 gap-4">
          {data?.map((place, idx) => (
            <Card
              key={idx}
              name={place.name}
              location={place.location}
              category={place.category}
              price={place.price}
              image={place.image}
              reviews={place.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
