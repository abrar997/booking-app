import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiLeaf } from "react-icons/bi";
import person from "../../../../public/assets/bianco_2.png";
import Image from "next/image";

const Review = () => {
  return (
    <div>
      <div className="mt-16 flex flex-col gap-24 w-1/3">
        <div className="flex gap-4 w-full">
          <div className="w-14 h-14 ">
            <Image
              className="w-fill h-full object-cover rounded-full"
              src={person}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Ahmed Sami</h2>
            <span className="text-slate-700">2 minutes ago</span>
            <div className="mt-4 text-slate-500 flex items-center gap-2">
              <BiLeaf /> Best Hotels in Erbil
            </div>
          </div>

          <span className="ml-auto mb-auto mt-1 flex items-center gap-2">
            5 <AiFillStar color=" #eb0844" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
