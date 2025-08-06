"use client";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import React from "react";

const page = () => {
  return (
    <div className="flex bg-[url('https://tse3.mm.bing.net/th/id/OIP.VRclq5ZnFRG3R1CjpuARHQHaE8?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3')] lg:items-center bg-[#e6e7ee] lg:justify-center lg:h-screen">
      <div className="w-full bg-[#e6e7eef1] h-screen lg:flex lg:items-center lg:justify-center">
        <div
          style={{
            boxShadow: "5px 5px 10px #a6a6a6,-5px -5px 10px #e6e7eef1",
          }}
          className="shadow border  bg-[#e6e7ee] lg:w-1/2 my-12 mx-6 lg:m-0 grid gap-12 rounded border-slate-50 p-4"
        >
          <div className="grid gap-3 items-center text-center">
            <h1 className="text-3xl font-bold capitalize">create an account</h1>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              architecto amet.
            </p>
          </div>
          <div>
            <form action="" className="grid gap-6">
              <Input
                type="text"
                isShadow
                className="p-3 focus:outline-0 w-full"
                placeholder="Ahmed Sami Ali"
              />
              <Input
                type="email"
                isShadow
                className="p-3 focus:outline-0 w-full"
                placeholder="ahmed997@gmail.com"
              />
              <Input
                type="password"
                isShadow
                className="p-3 focus:outline-0 w-full"
                placeholder="*******"
              />
              <Button
                text="Create"
                className="bg-red-600 text-white rounded p-3 font-semibold capitalize hover:bg-red-700"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
