import React from "react";
import FetchData from "../../../sanity/fetchData";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

export default async function page() {
  const data = await FetchData();

  return (
    <>
      <div className=" wrapper">
        <div className="  gap-24 pt-12 duration-300 grid grid-cols-4">
          {data.map((item: any) => (
            <Link href={`/product/${item.slug.current}`} key={1}>
              <div>
                <Image
                  src={urlForImage(item.image).url()}
                  alt={""}
                  height={266}
                  width={250}
                  className=" h-[266px]"
                />
                <p className=" text-lg  tarcking-[0.03em]  font-semibold  text-[#212121] mt-2">
                  {" "}
                  {item.title}
                </p>

                <p className=" capitalize text-[#888] text-base font-semibold my-1">
                  {item.description}
                </p>
                <p className=" text-xl font-semibold text-[#212121]">
                  {`$${item.price}`}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
