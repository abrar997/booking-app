"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import hotel_image1 from "../../../../public/assets/hr_1.jpg";
import hotel_image2 from "../../../../public/assets/hr_2.jpg";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type ItemProps = {
  itemId: number;
  name: string;
  image: StaticImageData;
  category: string;
  reviews: number;
  location: string;
  price: number;
};
const page = ({
  itemId,
  name,
  image,
  category,
  reviews,
  location,
  price,
}: ItemProps) => {
  const currencyFormatter = require("currency-formatter");
  const [selectedStar, setSelectedStar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const swiperElRef = useRef(null);
  return (
    <div className={`p-12 mt-24 ${showModal && "overflow-hidden"}`}>
      {/* <div className="relative"> */}
      {/* <Image src={image} alt="" className="rounded-t h-72 object-cover" />
      <div className="bg-red-600 font-semibold rounded text-white px-4 py-2 rounded-b-none absolute right-0 bottom-0">
        {location}
      </div> */}
      {/* </div> */}
      {/* <div className="p-4 pt-0 grid gap-2"> */}
      {/* <div className="grid gap-2"> */}
      {/* <h2 className="text-xl font-semibold capitalize text-slate-800"> */}
      {/* {name} */}
      {/* </h2> */}
      {/* <span className="rounded font-semibold  text-blue-600 flex items-center gap-1"> */}
      {/* <AiFillStar /> <span>{reviews}</span> */}
      {/* </span> */}
      {/* price and reviews */}
      {/* <span className="font-semibold text-slate-600"> */}
      {/* ${currencyFormatter.format(price, { local: "en-US" })} */}
      {/* <span className="lg:ml-1 text-sm">per night</span> */}
      {/* </span> */}
      {/* </div> */}
      {/* <button className="opacity-0 mt-2 group-hover:opacity-100 transition-all duration-300 hover bg-red-600 text-white font-semibold rounded px-4 py-2"> */}
      {/* Book now */}
      {/* </button> */}
      {/* </div> */}

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image
            src={hotel_image1}
            alt=""
            className="rounded-t h-[750px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={hotel_image2}
            alt=""
            className="rounded-t h-[750px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default page;
