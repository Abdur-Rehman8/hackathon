import Image from "next/image";
import React from "react";
import descriptionImage from "/public/discription.png"
import Link from "next/link";

export default function Description() {
  return (
    <div className=" wrapper">
      <div className=" py-16">
        <div className=" flex justify-end">
          <h1 className=" w-[44%] text-[44px] mb-8 font-bold">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
        <div className=" flex">
          <div className=" absolute font-extrabold text-8xl w-[34%]  leading-[110px] opacity-[0.07]">
            Different from others
          </div>
          <div className=" flex-1  grid grid-cols-2 gap-x-4 gap-y-8">
            <div className=" w-[70%]">
              <h1 className=" font-semibold mb-4  tracking-[0.03em] text-lg">
                Using Good Quality Materials
              </h1>
              <p className=" font-light  tracking-[0.03em] text-base opacity-70 ">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className=" w-[70%]">
              <h1 className=" font-semibold mb-4  tracking-[0.03em] text-lg">
                100% Handmade Products{" "}
              </h1>
              <p className=" font-light  tracking-[0.03em] text-base opacity-70  ">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className=" w-[70%]">
              <h1 className=" font-semibold mb-4  tracking-[0.03em] text-lg">
                Modern Fashion Design{" "}
              </h1>
              <p className=" font-light  tracking-[0.03em] text-base opacity-70  ">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className=" w-[70%]">
              <h1 className=" font-semibold mb-4  tracking-[0.03em] text-lg">
                Discount for Bulk Orders{" "}
              </h1>
              <p className=" font-light  tracking-[0.03em] text-base opacity-70  ">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" flex-1 flex items-center gap-8">
            
                <Image src={descriptionImage} alt="" className=" h-[350px]" /> 
          <div>
            <p className=" font-light text-base text-justify pb-8">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>

            <Link href={"/allproducts"} className="  font-semibold bg-[#212121]   text-white text-sm flex w-[55%] justify-center py-[10px] ">See All Product</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
