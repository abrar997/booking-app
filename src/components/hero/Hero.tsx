import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type HeroProps = {
  image: StaticImageData;
  mainHeader: string;
  secondaryHeader: string;
  buttonLinkText: string;
  buttonLinkHref: string;
};

const Hero = ({
  image,
  mainHeader,
  secondaryHeader,
  buttonLinkText,
  buttonLinkHref,
}: HeroProps) => {
  return (
    <div className="relative h-screen w-full">
      <Image alt="" src={image} className="object-cover brightness-50 " fill />

      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center gap-3">
        <h2 className="font-bold capitalize lg:text-6xl text-4xl text-white">
          {mainHeader}
        </h2>
        <h1 className="text-white lg:text-4xl text-2xl">{secondaryHeader}</h1>
        <Link
          href={buttonLinkHref}
          className="bg-red-700 mt-6 rounded px-12 py-2 text-xl text-white font-semibold capitalize hover:opacity-80"
        >
          {buttonLinkText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
