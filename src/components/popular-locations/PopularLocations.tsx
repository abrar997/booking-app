import React from "react";
import erbil from "../../../public/assets/erbil.jpg";
import amman from "../../../public/assets/amman.jpeg";
import ankara from "../../../public/assets/ankara.jpeg";
import istanbul from "../../../public/assets/istanbul.jpeg";
import basra from "../../../public/assets/basra.jpg";
import mumbai from "../../../public/assets/Mumbai.jpg";
import paris from "../../../public/assets/paris.jpg";
import baghdad from "../../../public/assets/baghdad.jpg";
import Card from "./Card";
import ComponentTitle from "../reusable/ComponentTitle";

const popularLocationsData = [
  { city: "Erbil", image: erbil, numberOfPlaces: 90 },
  { city: "Amman", image: amman, numberOfPlaces: 72 },
  { city: "Ankara", image: ankara, numberOfPlaces: 50 },
  { city: "Basra", image: basra, numberOfPlaces: 20 },
  { city: "Baghdad", image: baghdad, numberOfPlaces: 70 },
  { city: "Paris", image: paris, numberOfPlaces: 120 },
  { city: "Mumbai", image: mumbai, numberOfPlaces: 40 },
  { city: "Istanbul", image: istanbul, numberOfPlaces: 140 },
];
const PopularLocations = () => {
  return (
    <div className="lg:p-12 px-4 py-8 grid gap-6">
      <ComponentTitle subTitle="Explore Top" title="Popular locations" />

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {popularLocationsData.map((city, index) => (
          <Card
            key={index}
            image={city.image}
            city={city.city}
            numberOfPlaces={city.numberOfPlaces}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularLocations;
