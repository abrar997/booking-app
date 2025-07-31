import React from "react";
import ComponentTitle from "../reusable/ComponentTitle";
import Card from "./Card";
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

const BestHotels = () => {
  return (
    <div className="p-12 py-20 grid gap-8">
      <ComponentTitle title="Explore Top" subTitle="Best Hotels" />
      <div
        className={`${
          data.length === 5
            ? " lg:grid-cols-5 gap-6 grid-cols-2"
            : "lg:grid-cols-4 grid-cols-2 gap-12"
        } grid `}
      >
        {data?.map((hotel, idx) => (
          <Card
            key={idx}
            name={hotel.name}
            price={hotel.price}
            category={hotel.category}
            reviews={hotel.reviews}
            image={hotel.image}
            location={hotel.location}
          />
        ))}
      </div>
    </div>
  );
};

export default BestHotels;
