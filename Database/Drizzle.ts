
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { pgTable , varchar, integer,serial } from "drizzle-orm/pg-core";


export const cartdata = pgTable("cartdata",{
    id: serial("id").primaryKey(),
    user_id: varchar("user_id").notNull(),
    product_id: varchar("product_id").notNull(),
    product_title: varchar("product_title").notNull(),
    image_url: varchar("image_url").notNull(),
    product_quantity: varchar("product_quantity").notNull(),
    product_price: integer("product_price").notNull(),
    
})

export const db = drizzle(sql);