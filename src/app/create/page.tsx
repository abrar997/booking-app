"use client";
import Input from "@/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import Select from "@/ui/Select";
import { optionLocations, optionTypes } from "@/data/data";
import Button from "@/ui/Button";
import toast from "react-hot-toast";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      desc: "",
      beds: 5,
      hasFreeWifi: false,
      type: "luxury",
      location: "erbil",
      pricePerNight: 400,
    },
  });

  const uploadImage = async (image: string, idx: number) => {
    if (!image) return;
    const toastId = toast.loading(`Image ${idx + 1} is being uploaded`);
    const formData = new FormData();
    formData.append("file", image);
  };

  return (
    <div className="py-12 mt-20 w-full flex justify-center items-center">
      <div className="h-2/5 w-1/2 border border-slate-300">
        <div className="p-3 border-b border-slate-300">
          <h3 className="text-2xl font-semibold text-center">
            Create a listing
          </h3>
        </div>
        <form action="" className="px-4 py-6 flex flex-col items-center gap-8">
          <Input
            placeholder="Paradise"
            type="text"
            register={register("name")}
            isShadow={false}
          />
          <Input
            placeholder="This hotel is amazing ..."
            type="text"
            register={register("desc")}
            isShadow={false}
          />
          <Select data={optionLocations} register={register("location")} />
          <Select data={optionTypes} register={register("type")} />
          <Input
            placeholder="$249.02"
            type="number"
            register={(register("pricePerNight"), { valueAsNumber: true })}
            isShadow={false}
            step={0.01}
          />
          <Input
            placeholder="$249.02"
            type="number"
            register={(register("pricePerNight"), { valueAsNumber: true })}
            isShadow={false}
            step={0.1}
          />
          <div className="text-slate-400 ml-4 w-2/3 flex gap-1">
            <label htmlFor="">Free Wifi</label>
            <Input
              register={register("hasFreeWifi")}
              type="checkbox"
              id="freeWifi"
            />
          </div>
          <div className="text-slate-400 ml-4 w-2/3 flex gap-1">
            <label htmlFor="" className="text-slate-400 w-2/3 ml-4">
              upload images
            </label>
            <input
              type="file"
              className=""
              style={{ display: "none" }}
              id="images"
              onChange={() => {}}
            />
          </div>{" "}
          <Button
            text="Create"
            className="bg-red-600 rounded w-full py-3 hover:bg-red-700 text-white text-lg m-auto"
            disabled={false}
          />
        </form>
      </div>
    </div>
  );
};

export default page;
