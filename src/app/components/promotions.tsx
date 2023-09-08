import Image from "next/image";
import React from "react";
import event1 from '/public/event1.png'
import event2 from '/public/event2.png'
import event3 from '/public/event3.png'


export default function Promotions() {
  return (
    <>
      <div className=" wrapper">
       <div className=" py-16">
       <div className=" text-center ">
          <span className=" text-xs text-[#0062f5] font-bold uppercase tracking-widest">
            Promotions
          </span>
          <h2 className="  text-3xl mt-4 mb-8 text-[#212121] tracking-[0.03em] capitalize font-bold">
            Our promotion events
          </h2>
          
        </div>

        <div className=" flex gap-8">
          {/* left side */}
          <div className=" flex-1 flex flex-col  gap-4">
            <div className=" flex items-center   justify-between bg-[#d6d6d8] px-8 gap-8">
              <div>
                <h1 className=" text-3xl font-bold">GET UP TO 60%</h1>
                <p className=" text-lg">For the summer season</p>
              </div>
              <Image
                src={event1}
                alt=""
                className=" h-[200px]  w-64 " 
              />
            </div>
            <div className="justify-center  bg-[#212121]  px-8 py-12">
              <div className=" text-center">
                <h1 className=" text-4xl text-white font-extrabold mb-3">
                  GET 30% Off
                </h1>
                <p className=" text-sm tracking-[0.03em] mb-[10px] text-white">
                  USE PROMO CODE
                </p>
                <a
                  href=""
                  className="  text-lg tracking-[.25em] font-bold  text-white bg-[#474747] py-2 px-10 rounded-lg"
                >
                  DINEWEEKENDSALE
                </a>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className=" flex-1 flex gap-4">
            <div className=" flex-1 bg-[#efe1c7] pt-6">
              <div className=" pl-7">
                <p>Flex Sweatshirt</p>
                <div>
                  <del>$100.00</del>
                  <span className=" pl-2 font-semibold">$75.00</span>
                </div>
              </div>
              <Image   src={event2} alt="" className=" h-[350px] w-[270px]" />
            </div>
            <div className=" flex-1 bg-[#d7d7d9] pt-6">
              <div className=" pl-7">
                <p>Flex Sweatshirt</p>
                <div>
                  <del>$225.00</del>
                  <span className=" pl-2 font-semibold">$190.00</span>
                </div>
              </div>
              <Image src={event3} alt="" className=" h-[350px] w-[270px]" />
            </div>
            
          </div>
        </div>
       </div>
      </div>
    </>
  );
}
