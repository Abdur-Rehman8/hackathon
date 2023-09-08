import React from "react";

export default function NewsLetter() {
  return (
    <div className=" wrapper">
      <div className=" py-40 relative justify-center flex">
        <div className=" absolute  text-[7.5rem] font-extrabold text-[#f2f3f7] tracking-[0.03em] top-36 z-[-1]">
        Newsletter
        </div>
        <div className=" text-center">
          <h1 className="   mb-4  font-bold  text-[32px]  tracking-[0.03EM]">
            Subscribe Our Newsletter
          </h1>
          <p className=" text-base  mb-8">
            Get the latest information and promo offers directly
          </p>
          <div>
            <input
              type="text"
              placeholder="Input Email Address"
              className="  border-[1px] py-[7px] pl-[10px] pr-28 placeholder:text-xs border- border-gray-400"
            />
            <a
              href=""
              className=" bg-[#000]  ml-2 font-semibold text-sm text-[#fff] py-[10px] px-5"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
