import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-12 lg:flex grid justify-between gap-8 lg:gap-0">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">About the App</h2>

        <p className="text-gray-400 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          similique placeat, repudiandae ab cum ducimus voluptates asperiores
          obcaecati quae maiores architecto harum, assumenda eaque voluptatem ex
          porro quidem eos doloremque.
        </p>
      </div>
      <div className="flex w-full">
        <div className="flex flex-1 flex-col gap-4 w-full">
          <h2>Contacts</h2>
          <span>phone : +96478311902444</span>
          <span>email:abrar@gmail.com</span>
          <span>Github:abrar997</span>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <h2>Location</h2>

          <span>Continent:Asia</span>
          <span>country:Iraq</span>
          <span>City : Erbil</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
