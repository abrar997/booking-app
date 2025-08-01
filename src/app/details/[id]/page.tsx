"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import hotel_image1 from "../../../../public/assets/hr_1.jpg";
import hotel_image2 from "../../../../public/assets/hr_2.jpg";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { CiLocationOn } from "react-icons/ci";
import { FaBed, FaWifi } from "react-icons/fa";
import Review from "./Review";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BookModal from "@/components/book-modal/BookModal";

// type ItemProps = {
//   itemId: number;
//   name: string;
//   image: StaticImageData;
//   category: string;
//   reviews: number;
//   location: string;
//   price: number;
// };
const page = () =>
  //   {
  //   itemId,
  //   name,
  //   image,
  //   category,
  //   reviews,
  //   location,
  //   price,
  // }: ItemProps
  {
    const currencyFormatter = require("currency-formatter");
    const [selectedStar, setSelectedStar] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const swiperElRef = useRef(null);
    const handleHideModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
      <div
        className={`min-h-screen w-full lg:p-12 lg:mt-24 lg:px-40 p-4 py-12 ${
          showModal && "overflow-hidden"
        }`}
      >
        {showModal && <BookModal handleHideModal={handleHideModal} />}

        <div>
          <Swiper
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
                className="rounded-t lg:h-[750px] h-[300px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={hotel_image2}
                alt=""
                className="rounded-t lg:h-[750px] h-[300px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="grid lg:px-6 px-2">
          <div className="flex justify-between lg:mt-12 mt-4 items-center">
            <h1 className="font-bold text-3x capitalize">Start here</h1>
            <span className="bg-red-600 p-2 px-4 text-g text-white flex items-center gap-2 rounded-xl">
              <AiFillStar color="white" />
              <span>4.7</span>
            </span>
          </div>
          <div className="mt-8 flex items-end gap-8">
            <span className="flex items-center gap-2">
              <CiLocationOn />
              Iraq , Erbil
            </span>

            <span>
              {currencyFormatter.format(325.5, { locale: "en-US" })}/night
            </span>
            <span className="flex items-center gap-2">
              2 <FaBed />
            </span>
            <span className="flex items-center gap-2">
              Free <FaWifi />
            </span>
          </div>

          <div className="lg:flex items-start justify-between gap-6 mt-4">
            <p className="flex text-slate-700 w-11/12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ullam
              maiores ad dolorum ea quisquam! Voluptas dolore ex, asperiores
              incidunt hic exercitationem, repudiandae iusto doloremque sunt,
              eos cupiditate excepturi nulla.
            </p>
            <button
              onClick={handleShowModal}
              className="w-4/12 mt-8 lg:mt-0 ml-auto bg-green-600 rounded-lg text-white font-semibold p-4"
            >
              Book
            </button>
          </div>
          <div className="mt-12 grid gap-6">
            <h1 className="font-bold text-3xl ">Reviews</h1>
            <div className="flex gap-3">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedStar(i + 1)}
                  className={`${
                    selectedStar === i + 1 ? "scale-125" : ""
                  } cursor-pointer flex items-center transition-all duration-300 text-slate-600`}
                >
                  {i + 1}
                  <AiFillStar size={18} color="#eb0844" />
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center mt-8 gap-28 rounded-lg border py-4 px-6 w-max">
            <input
              className="outline-none"
              type="text"
              placeholder="Leave your opinion ..."
            />
            <button className="cursor-pointer rounded-lg py-2 px-6 text-white bg-red-600 text-whit">
              Post
            </button>
          </div>
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    );
  };

export default page;
