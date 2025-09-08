"use client";
import Input from "@/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
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
  const imageRef = useRef(null);
  const router = useRouter();
  const [images, setImages] = useState([]);

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
    mutationFn: ({ data, imageUrls }: { data: any; imageUrls: any }) =>
      createNewListing(data, imageUrls),
    mutationKey: ["listing"],
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).map((error) => {
        toast.error(errors[error].message);
      });
    }
  }, []);

  const uploadImages = async (image: string, idx: number) => {
    // need to get image from input
    // group of images not one image
    // save this images in imagekit as gallery
    // save all data and images in db
    // 1-image with url
    if (images.length === 0) return;
    const upload = [];
    // for (let i = 0; i < images.length; i++) {
    const formData = new FormData();
    formData.append("file", image);
    const res = await fetch("/api/listing", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    upload.push(data.url);
    toast.success(`image ${idx + 1} upload successfully`);
    // }
    return upload;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages((prev) => {
      return [...prev, e.target.files[0]];
    });
  };

  const onSubmit = async (data: any) => {
    // try {
    //   const imageUrls = await uploadImages();
    //   const payload = {
    //     ...data,
    //     images: imageUrls,
    //   };

    //   await fetch("/api/listing", {
    //     method: "POST",
    //     body: JSON.stringify(payload),
    //   });
    //   toast.success("listing created");
    // } catch (error) {
    //   toast.error(error);
    // }

    if (!images?.length) return toast.error("Tou must publish an image!");

    const imageUrls = await Promise.all(
      images.map((image, idx) => {
        const imageUrl = uploadImages(image, idx);
        return imageUrl;
      })
    );
    const newListing = await mutateAsync({ data, imageUrls });
    toast.success("Redirecting to listing ....");
    router.push(`/details/${newListing?.id}`);
    console.log(data);
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
          action=""
          onSubmit={handleSubmit(onSubmit)}
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
            step={0.01}
          />
          <Input
            placeholder="$249.02"
            type="number"
            register={register("priceNight")}
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
              htmlFor=""
              className="text-slate-400 border p-2 rounded w-2/3"
            >
              upload images
            </label>
            <input
              type="file"
              style={{ display: "none" }}
              ref={imageRef}
              onChange={handleChange}
              accept="images/"
            />

            <button
              className="bg-red-600 text-white rounded px-2 py-1"
              onClick={() => {
                imageRef.current.click();
              }}
            >
              select images
            </button>
          </div>{" "}
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
