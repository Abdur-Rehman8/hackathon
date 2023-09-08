
import Image from "next/image";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import bazzar from "/public/bazzar.png"
import bustle from "/public/bustle.png"
import versace from "/public/versace.png"
import instyle from "/public/instyle.png"
import banner from "/public/banner.png"
import Link from "next/link";


export default function Banner() {
  return (
    <>
      <div className=" wrapper">
        <div className=" flex gap-8 my-16">
        <div className=" flex-1 pt-12 pb-4">
          <div className=" gap-10 flex flex-col">
            <span className=" h-10  flex items-center justify-center w-32 text-blue-700 font-semibold bg-[#e1edff]  rounded-md">
              Sale 70%
            </span>
            <h1 className=" text-6xl  font-bold tracking-[0.03em]">
              An Industrial Take on Streetwear
            </h1>
            <p className=" text-[#666]  w-3/5  text-base">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <a
              href=""
              className=" flex bg-[#212121] gap-2 w-1/3 text-white p-4 justify-center font-semibold text-base"
            >
             
              <BsCart2 className=" text-2xl"/>
              <Link href={"/allproducts"}>Start Shopping</Link>
            </a>
            <div className=" flex gap-12 mt-20">
              <Image src={bazzar} alt="Banner-logo-1"   />
              <Image src={bustle} alt="Banner-logo-2" />
              <Image src={versace}  alt="Banner-logo-3" />
              <Image src={instyle}  alt="Banner-logo-4" />
            </div>
          </div>
        </div>
        <div className=" flex-1">
          <div className=" h-[600px] w-[600px] bg-[#ffece3] rounded-full relative">
            <Image src={banner} alt=""  className=" absolute anim -top-[30px] h-[650px] w-[650px]" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
