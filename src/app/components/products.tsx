import React from "react";
// import { client } from "@/app/lib/sanityClient";
// import urlBuilder from "@sanity/image-url";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import FetchData from "../../../sanity/fetchData";
import Link from "next/link";


export default async function Products() {
  const data = await FetchData();
  const filteredData = data.slice(0,3)

  return (
    <>
      <div className=" wrapper">
        <div className=" py-16">
          <div className=" text-center ">
            <span className=" text-xs text-[#0062f5] font-bold uppercase tracking-widest">
              PRODUCTS
            </span>
            <h2 className="  text-[32px] mt-4 mb-8 text-[#212121] tracking-[0.03em] capitalize font-bold">
              Check What We Have
            </h2>
          </div>
          <div className=" flex pt-8">
            <div className=" flex gap-16 duration-300">


              {filteredData.map((item:any) => (
                <Link href={`/product/${item.slug.current}`} key={1}>
                  <div className="hover:scale-110 duration-500">
                    <Image alt="" src={urlForImage(item.image).url()}className=" h-96 w-100   " height={396} width={400} />
                    <p className=" text-xl  tarcking-[0.03em]  font-semibold  text-[#212121] mt-2 mb-2">
                      {item.title}
                    </p>
                    <p className=" text-xl font-semibold text-[#212121]">
                      {`$${item.price}`}
                    </p>
                  </div>
                </Link>
              ))}


            </div>
          </div>
          <div className=" justify-center flex mt-16">
            <Link
              href="/allproducts"
              className="  font-semibold bg-[#212121]   text-white text-sm flex w-1/6 rounded-sm justify-center py-[10px] "
            >
              See All Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
