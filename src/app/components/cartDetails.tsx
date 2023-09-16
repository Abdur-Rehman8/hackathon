"use client";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';


export default function CartDetails() {
  const [state, setState] = useState(false)
  const [product, setProducts] = useState<any>(null);
  const { isSignedIn, userId } = useAuth();
  // const [quantity, setquantity] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);



  useEffect(() => {
    fetch(
      "http://localhost:3000/api/cart?user_id=user_2UW5HXPuIQ1hsSkGZXXv5xZkECA"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn, state]);

  async function deleteProdcut(product_title: any) {
    const res = await fetch("/api/cart", {
      method: "Delete",
      body: JSON.stringify({
        user_id: userId,
        product_title: product_title
      })

    })
    console.log(product)
    setState(!state)
    // alert(`${product_title}is Deleted`)
  }

  async function handleIncrement(

    user_id: any,
    product_quantity: any,
    product_title: any,

  ) {
    try {
      await fetch("/api/cart", {
        method: "PUT",
        body: JSON.stringify({
          user_id: user_id,
          product_quantity: product_quantity,
          product_title: product_title,

        }),
      });
      setState(!state);
    } catch (error) {
      console.log("error", error);
    }
    console.log("testing");
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);

  }
  async function handleDecrement(
    user_id: any,
    product_quantity: any,
    product_title: any,

  ) {
    try {
      await fetch("/api/cart", {
        method: "PUT",
        body: JSON.stringify({
          user_id: user_id,
          product_quantity: product_quantity,
          product_title: product_title,
        }),
      });
      setState(!state);
    } catch (error) {
      console.log("error", error);
    }
    console.log("testing");
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }

  return (
    <div className=" wrapper ">
      <div className=" py-12">
        <div >
          <h1 className=" mb-12  text-3xl font-bold">Shopping Cart</h1>
        </div>

        {isSignedIn ? (
          <div className=" flex  justify-between w-full">
            <div className="flex flex-col  gap-12 w-4/6">
            {product?.map((item: any, index: number) => (
              <div key={index} className=" flex gap-8 mt-8 ">
                <div>
                  <Image height={208} width={288} src={item.image_url} alt="" className=" rounded-lg  h-52  w-72" />
                </div>

                <div className=" flex flex-col gap-8  w-3/5">
                  <div className=" flex justify-between">
                    <h1 className=" text-xl">{item.product_title}</h1>
                    <button onClick={() => deleteProdcut(item.product_title)}><RiDeleteBin6Line className=" text-[28px]"/></button>

                  </div>
                  <div className=" gap-4 flex flex-col">
                    
                    <h1 className=" text-xl ">Delivery Estimation</h1>
                    <h2 className=" font-semibold">5 Working Days</h2>
                  </div>
                  {/* <h1 className=" text-lg font-bold">{`Price $${item.product_price}`}</h1> */}
                  <div className=" flex justify-between">
                    
                    <h1 className=" text-lg font-bold">{`Total Price $${item.product_price * item.product_quantity}`}</h1>
                    {/* <Quantity/> */}
                    <div className=" flex gap-8 items-center">
                      {/* <h3 className=" font-semibold">Quantity:</h3> */}
                      <div className=" flex gap-4">
                        <button
                          className=" text-xl font-medium h-7 w-7 rounded-full  border flex  justify-center items-center"
                          onClick={() => handleDecrement(
                            item.user_id,
                            item.product_quantity - 1,
                            item.product_title,
                          )}
                          disabled={isDisabled}
                        >
                          -
                        </button>
                        <span>{item.product_quantity}</span>
                        <button
                          className=" text-xl font-medium   h-7 w-7 rounded-full  border flex  justify-center items-center"
                          onClick={() => handleIncrement(
                            item.user_id,
                            item.product_quantity + 1,
                            item.product_title,
                          )}
                          disabled={isDisabled}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>

                    <div >

                    </div>
                  </div>

                </div>
              </div>

            ))}
          </div>
          {/* checkout */}
          <div className="    w-2/6 flex flex-col  gap-8 p-8 bg-[#fbfcff]">
            <h3 className=" text-[22px] font-semibold">
              Order Summary
            </h3>
            <div className="  flex  justify-between w-full"> 

              <h6 className=" text-lg">Quantity:</h6>
              <span className=" text-lg">3 Product</span>
            </div>
            <div className="  flex  justify-between w-full"> 
              <h6 className=" text-lg">Sub Total</h6>
              <span className=" text-lg">$200</span>
            </div>
            <div  className=" flex justify-center  py-[6px] px-2  text-white bg-black  font-semibold  text-base ">
              <button>Process to checkout</button>
            </div>
          </div>
          </div>
        ) : (
          <div>login first</div>
        )}
      </div>
    </div>
  );
}

// onClick={()=> updateCart(item.product_price, item.product_title ,item.product_quantity)}