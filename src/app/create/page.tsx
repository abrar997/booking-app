"use client";
import Input from "@/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import Select from "@/ui/Select";
import { optionLocations, optionTypes } from "@/data/data";
import Button from "@/ui/Button";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createNewListing } from "./api";

const page = () => {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);

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
      priceNight: 400,
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: ({ data, imageUrls }: { data: {}; imageUrls: string[] }) =>
      createNewListing(data, imageUrls),
    mutationKey: ["listings"],
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).map((error) => {
        toast.error(errors[error].message);
      });
    }
  }, [errors]);

  const uploadImage = async (image: File, idx: number): Promise<string> => {
    if (!image) return;

    const toastId = toast.loading(`Image${idx + 1} is being uploaded`);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to upload image");
      toast.success(`successfully uploaded Image ${idx + 1}`);
      toast.dismiss(toastId);
      const { url } = await res.json();
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages((prev) => {
      return [...prev, e.target.files[0]];
    });
  };

  const onSubmit = async (data: any) => {
    const imageUrls = await Promise.all(images.map(uploadImage));
    const newListing = await mutateAsync({ data, imageUrls });
    toast.success("Listing created successfully");
    router.push(`/details/${newListing.id}`);
  };

  return (
    <div className="py-12 mt-20 w-full flex justify-center items-center">
      <div className="h-2/5 w-1/2 border border-slate-300">
        <div className="p-3 border-b border-slate-300">
          <h3 className="text-2xl font-semibold text-center">
            Create a listing
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="px-4 py-6 flex flex-col items-center gap-8"
        >
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
            register={register("priceNight")}
            isShadow={false}
            step={0.1}
          />
          <Input
            placeholder="3"
            type="number"
            register={register("beds")}
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
          <div className="text-slate-400 w-2/3 flex gap-1">
            <label
              htmlFor="file"
              className="text-slate-400 border p-2 rounded w-2/3"
            >
              upload images
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleChange}
              // accept="image/"
            />
          </div>
          <Button
            text="Create"
            className="bg-red-600 rounded w-full py-3 hover:bg-red-700 text-white text-lg m-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
