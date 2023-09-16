
import React from "react";
import FetchData from "../../../../sanity/fetchData";
import { urlForImage } from "../../../../sanity/lib/image";
import { BsCart2 } from "react-icons/bs";
import Quantity from "@/app/components/quantity";
import Image from "next/image";
import num from "../../components/quantity"
import ProductDetails from "@/app/components/productDetails";


export async function generateStaticParams() {
  const data = await FetchData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}

// const sizes = ["xs", "sm", "md", "lg", "xl"];

export default async function page({ params }: { params: any }) {
  const data = await FetchData();

  const filteredData = data.find(
    (item: any) => item.slug.current == params.product
  );

  return (

    <ProductDetails filteredData={filteredData}/>
  );
}
