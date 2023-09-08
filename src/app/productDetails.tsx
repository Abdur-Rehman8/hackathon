"use client";
import React, { useState } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { BsCart2 } from "react-icons/bs";
// import Quantity from './components/quantity';
import Image from "next/image";
import { useAuth } from '@clerk/nextjs';


const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function ProductDetails({
  filteredData,
}: {
  filteredData: any;
}) {
  const { userId } = useAuth();
  console.log(userId)
  const [quantity, setquantity] = useState(1);
  async function addToCart() {
    try {
      const res = await fetch("../api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id:userId,
          product_id: filteredData._id,
          product_title: filteredData.title,
          image_url: urlForImage(filteredData.image).url(),
          product_price: filteredData.price * quantity,
          product_quantity: quantity
        }),
      });

      // alert("Added To cart");
     
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <div className=" wrapper">
        <div className=" flex gap-16  pt-16">
          <div className=" flex w-2/3 gap-10">
            <div className=" w-1/6 ">
              <Image
                src={urlForImage(filteredData.image).url()}
                alt="Product Image"
                height={150}
                width={150}
              />
            </div>
            <div className=" w-5/6">
              {" "}
              <img
                src={urlForImage(filteredData.image).url()}
                alt=""
                className="  w-[700px] h-[650px]"
              />
            </div>
          </div>
          <div className="  w-1/3 flex  flex-col gap-10  pt-16">
            <div>
              <h3 className="  text-3xl tracking-wider">
                {filteredData.title}
              </h3>
              <p className=" font-semibold  opacity-30  text-xl">
                {" "}
                {filteredData.description}
              </p>
            </div>

            <div>
              <h6 className=" tracking-wider font-bold  text-sm  uppercase">
                Select size
              </h6>
              <div className=" flex gap-6 mt-2">
                {sizes.map((item) => {
                  return (
                    <div key={1} className=" w-10 h-10  rounded-full  flex  justify-center items-center shadow-2xl size-shadow">
                      <span className=" text-[#666] font-bold  uppercase">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <Quantity /> */}
            <div className=" flex gap-8 items-center">
              <h3 className=" font-semibold">Quantity:</h3>
              <div className=" flex gap-4">
                <button
                  className=" text-xl font-medium h-7 w-7 rounded-full  border flex  justify-center items-center"
                 onClick={() => {
                    setquantity(quantity -1) 
                 }}
                 disabled={quantity===1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className=" text-xl font-medium   h-7 w-7 rounded-full  border flex  justify-center items-center"
                  onClick={() => {
                    setquantity(quantity + 1);
                  }}
                  disabled={quantity === 10}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" flex items-center gap-4">
              <div className="w-[55%] bg-[#212121] justify-center flex  items-center  ">
                <BsCart2 className=" text-white w-5 h-5 " />
                <button className="flex  items-center  py-2 text-white font-semibold text-base mt-1" 
                onClick={addToCart}>
                  Add to cart
                </button>
                {/* <HandleAddToCart/> */}
              </div>
              <p className=" font-bold text-[27px]  tracking-widest">{`$${filteredData.price.toFixed(
                2
              )}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
