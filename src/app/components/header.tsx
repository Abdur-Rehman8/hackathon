"use client"
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Logo from "/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { useAuth ,UserButton} from '@clerk/nextjs';

export default function Header() {
  const {isSignedIn } = useAuth();
  console.log(isSignedIn)
  return (
    <>
      <div className=" wrapper">
        <ul className="flex justify-between my-10 gap-10 items-center">
          <li>
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </li>
          <li>
            <ul className="flex gap-10 ">
              <li>
                <Link href={"/category/men"}>Men</Link>
              </li>
              <li>
                <Link href={"/category/women"}>Women</Link>
              </li>
              <li>
                <Link href={"/category/kids"}>Kids</Link>
              </li>

              <li>
                <Link href={"/allproducts"}>All Products</Link>
              </li>
            </ul>
            <ul></ul>
          </li>

          <li>
            <div className=" flex items-center  border-[1px] border-[#e4e5eb] px-1 rounded-md w-80">
              <CiSearch/>
              <input
                type="text"
                placeholder="What are you looking for"
                className=" placeholder:text-xs pl-1  placeholder:text-black"
              />
            </div>
          </li>
          <li>
           <a href={"/cart"}> <div className=" h-12 w-12   bg-[#f1f1f1] rounded-full relative">
              <BsCart2 className=" absolute top-[14px] left-[13px] text-xl" />
              <div className=" absolute bg-red-500 h-[18px] text-white w-[18px] top-0 right-[5px] rounded-full text-center  text-xs">0</div>
            </div></a>
          </li>
          <li>
            <div className=" flex gap-4">
              {!isSignedIn && (
                <SignInButton mode="modal" >
                <button>Sign In</button>
              </SignInButton>
              )}
              
              <UserButton afterSignOutUrl="/"/>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
