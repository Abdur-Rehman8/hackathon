import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import { cartdata, db } from "../../../../Database/Drizzle";
import { and, eq } from "drizzle-orm";


export const POST = async (request: NextRequest) => {
  const req = await request.json();



  try {
    const res = await db
      .insert(cartdata)
      .values({
        user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        image_url: req.image_url,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
      })
      .returning()
      .onConflictDoUpdate({
        target: [cartdata.user_id, cartdata.product_title],
        set: {
          product_price: req.product_price,
          product_quantity: req.product_quantity,
        },
      });
    console.log("Data posted to Database");
    return NextResponse.json({ res });
  } catch (error) {
    console.log("error while posting data to databse");
    console.log("error", error);
  }
};

export const GET = async (request: NextRequest) => {
  const vid = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartdata)
      .where(eq(cartdata.user_id, vid));
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
      .delete(cartdata)
      .where(
        and(
          eq(cartdata.user_id, req.user_id),
          eq(cartdata.product_title, req.product_title)
        )
      ).returning()    
      return NextResponse.json({message:"Prodcut successfully Deleted"})
  } catch (error) {
    console.log("Error deleting product",error)
    return NextResponse.json({message:"Prodcut successfully Deleted"})
  }
};


export const PUT = async(request:NextRequest) => {
  const req = await request.json();
  const id = req.user_id
try {
  if (req) {
    await db.update(cartdata).set({
      product_quantity:req.product_quantity,
      product_price:req.product_price
    }).where(and(eq(cartdata.user_id,id),eq(cartdata.product_title,req.product_title))).returning()
    return NextResponse.json({Message:"Qunatity updated successfully"},{status:200})
  } else {
    throw new Error("Failed to update cart")
  }
} catch (error) {
  console.log(error);
  return NextResponse.json({Message: error},{status:500})
  
}
}