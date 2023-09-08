import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BiLogoFacebook , BiLogoLinkedin } from "react-icons/bi";
import Image from "next/image";
import Logo from "/public/Logo.png"

export default function Footer() {
  return (
    <div className=" wrapper">
      <div className="  pb-12 pt-16   ">
        <div className="flex">
          <div className="  basis-2/5">
            <div className=" gap-9 flex  flex-col w-3/4">
              <Image src={Logo} alt="" className=" h-[30px] w-[180px]" />
              <p className="  text-[#666] text-base font-normal ">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
              <div className=" flex gap-4 ">
                <div className=" bg-[#f1f1f1]  py-[10px] px-3 rounded-[10px]">
                  
                  <BsTwitter  className=" text-xl"/>
                </div>
                <div className=" bg-[#f1f1f1]  py-[10px] px-3 rounded-[10px]">
                    <BiLogoFacebook  className=" text-xl" />
                  
                </div>
                <div className=" bg-[#f1f1f1]  py-[10px] px-3 rounded-[10px]">
                 
                  <BiLogoLinkedin  className=" text-xl"/>
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-1/5">
            <h3 className=" mb-6 text-[#666] tracking-[0.02em]  font-bold  text-xl">
              Company
            </h3>
            <ul className=" text-[#666]  text-base gap-3 flex flex-col">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=" basis-1/5">
            <h3 className=" mb-6 text-[#666] tracking-[0.02em]  font-bold  text-xl">
              Support
            </h3>
            <ul className=" text-[#666]  text-base gap-3 flex flex-col">
              <li>Support Carrer</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>
          <div className=" basis-1/5">
            <h3 className=" mb-6 text-[#666] tracking-[0.02em]  font-bold  text-xl">
              Contact
            </h3>
            <ul className=" text-[#666]  text-base gap-3 flex flex-col">
              <li>Whatsapp</li>
              <li>Support 24h</li>
            </ul>
          </div>
        </div>
        <div className=" mt-8">
            <hr className=" border-2 border-black rounded-full" />
        </div>
        <div className=" text-center mt-6">
          <h1 className=" text-lg font-semibold text-[#666]">Copyright © 2023. All Rights Reserved!F</h1>
        </div>
      </div>
    </div>
  );
}
