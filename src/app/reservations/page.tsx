import React from "react";
import listing_image1 from "../../../public/assets/hr_1.jpg";
import Card from "./Card";
const data = [
  {
    id: crypto.randomUUID(),
    listingId: 1,
    image: listing_image1,
    location: "Erbil- Iraq",
    name: "Arabian Paradise",
    pricePerNight: 303.43,
    startDate: new Date(),
    endDate: new Date(),
    daysDifference: 5,
  },
  {
    id: crypto.randomUUID(),
    listingId: 2,
    image: listing_image1,
    location: "Erbil- Iraq",
    name: "Arabian Paradise",
    pricePerNight: 303.43,
    startDate: new Date(),
    endDate: new Date(),
    daysDifference: 5,
  },
  {
    id: crypto.randomUUID(),
    listingId: 3,
    image: listing_image1,
    location: "Erbil- Iraq",
    name: "Arabian Paradise",
    pricePerNight: 303.43,
    startDate: new Date(),
    endDate: new Date(),
    daysDifference: 5,
  },
  {
    id: crypto.randomUUID(),
    listingId: 4,
    image: listing_image1,
    location: "Erbil- Iraq",
    name: "Arabian Paradise",
    pricePerNight: 303.43,
    startDate: new Date(),
    endDate: new Date(),
    daysDifference: 5,
  },
  {
    id: crypto.randomUUID(),
    listingId: 5,
    image: listing_image1,
    location: "Erbil- Iraq",
    name: "Arabian Paradise",
    pricePerNight: 303.43,
    startDate: new Date(),
    endDate: new Date(),
    daysDifference: 5,
  },
];
const page = () => {
  return (
    <div className="mt-12 p-12 min-h-screen w-full">
      <div className="h-full w-full grid lg:grid-cols-4 grid-cols-2 gap-12">
        {data?.map((item, idx) => (
          <Card key={idx} hotel={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
