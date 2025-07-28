"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMode = () => setShowModal((prev) => !prev);
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <div
      className={`fixed bg-white h-16 top-0 left-0 w-full z-40 ${
        isScrolled ? "shadow-md backdrop-blur bg-white" : "shadow"
      }`}
    >
      <div className="h-full w-full lg:px-12 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center  transition-all">
          <h1
            className={`${
              isScrolled
                ? "text-teal-600 font-bold text-2xl"
                : "text-[#cec7c7] text-3xl font-bold"
            } transition-all duration-300`}
          >
            FlyUS
          </h1>
          <AiOutlineHome
            size={25}
            color={`${isScrolled ? "#015252" : "#cec7c7"}`}
          />
        </Link>
        <div>
          <div className="cursor-pointer" onClick={toggleMode}>
            <AiOutlineUser
              size={`${isScrolled ? 25 : 30}`}
              color={`${isScrolled ? "#015252" : "#cec7c7"}`}
              className="transition-all duration-300"
            />
          </div>
          {showModal && (
            <div
              onClick={toggleMode}
              className="absolute top-[70px]  lg:right-12 right-4 shadow-md flex flex-col items-start gap-4 p-4 bg-white rounded"
            >
              <Link href="/reservations">Reservations</Link>
              <button
                onClick={() => signOut()}
                className="text-[#015252] font-semibold"
              >
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
