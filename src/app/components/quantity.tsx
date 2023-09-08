"use client"
import React,{useState} from "react";

export default function Quantity() {
 const [quantity, setquantity] = useState(1);
  return (
    <>
      <div className=" flex gap-8 items-center">
      <h3 className=" font-semibold">Quantity:</h3>
      <div className=" flex gap-4">
        <button className=" text-xl font-medium h-7 w-7 rounded-full  border flex  justify-center items-center"
        onClick={()=> {
          setquantity( quantity - 1)
        }} disabled={quantity ===1}>
            -
        </button>
        <span>{quantity}</span>
        <button className=" text-xl font-medium   h-7 w-7 rounded-full  border flex  justify-center items-center"
         onClick={()=>{
          setquantity( quantity + 1)
        }}
        disabled={quantity ===10}>
            +
        </button>
      </div>
      </div>
    </>
  );
}


