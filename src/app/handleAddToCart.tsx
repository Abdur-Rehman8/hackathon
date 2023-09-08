// "use client";
// import React from "react";
// import FetchData from "../../sanity/fetchData";
// import { urlForImage } from "../../sanity/lib/image";

// export default async function HandleAddToCart({ params }: { params: any }) {
//   const data = await FetchData();
//   const filteredData = data.find(
//     (item: any) => item.slug.current == params.product
//   );
//   async function addToCart() {
//     try {
//       const res = await fetch("../api/cart", {
//         method: "POST",
//         body: JSON.stringify({
//           user_id: "qwerttyu",
//           product_id: filteredData._id,
//           product_title: filteredData.title,
//           image_url: urlForImage(filteredData.image).url(),
//           product_price: filteredData.price,
//           product_quantity: ,
//         }),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//     console.log("function");
//   }

//   return (
//     <>
//       <button
//         onClick={addToCart}
//         className="flex  items-center  py-2 text-white font-semibold text-base mt-1"
//       >
//         Add to cart
//       </button>
//     </>
//   );
// }
