"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Quantity from "./components/quantity";

export default function CartDetails() {
  const [state , setState] = useState(false)
  const [product, setProducts] = useState<any>(null);
  const { isSignedIn,userId } = useAuth();

  useEffect(() => {
    fetch(
      "http://localhost:3000/api/cart?user_id=user_2UW5HXPuIQ1hsSkGZXXv5xZkECA"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn,state]);

  async function deleteProdcut(product_title:any){
const res = await fetch("/api/cart",{
  method:"Delete",
  body:JSON.stringify({
    user_id:userId,
    product_title:product_title 
  })
 
})
console.log(product)
setState(!state)
// alert(`${product_title}is Deleted`)
  }
  async function updateCart(product_title:any,product_price:any,product_quantity:any){
    const res = await fetch("/api/cart",{
      method:"Put",
      body:JSON.stringify({
        user_id:userId,
        product_title: product_title,
        product_price: product_price*product_quantity,
        product_quantity:product_quantity
      })
    })
  }

  return (
    <div className=" wrapper ">
      <div className=" py-12">
        <div >
          <h1 className=" mb-12  text-3xl font-bold">Shopping Cart</h1>
        </div>

        {isSignedIn ? (
          <div className="flex flex-col  gap-12">
            {product?.map((item: any, index: number) => (
              <div key={index} className=" flex gap-8 ">
                <div>
                  <img  src={item.image_url} alt=""  className=" rounded-lg  h-60  w-72"/>
                </div>
                <div className=" flex flex-col gap-4 ">
                  <h1 className=" text-xl">{item.product_title}</h1>
                  <div  className=" gap-4 flex flex-col">
                    <h1 className=" text-xl ">Delivery Estimation</h1>
                    <h2 className=" font-semibold">5 Working Days</h2>
                  </div>
                  <h1 className=" text-lg font-bold">{`$${item.product_price}`}</h1>  
                  <div>
                    <button onClick={() => deleteProdcut(item.product_title)}>Delete</button>
                    <div onClick={()=> updateCart(item.product_price, item.product_title ,item.product_quantity)}>
                    <Quantity/>
                    </div>
                    
                  </div>
                 
                </div>
              </div>
              
            ))}
          </div>
        ) : (
          <div>login first</div>
        )}
      </div>
    </div>
  );
}
