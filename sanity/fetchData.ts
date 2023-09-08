import React from 'react'
import { client } from './lib/client'

export default async function FetchData() {
    const data = await client.fetch(`*[_type=="products"][0..6]{
      title ,
      image,
      price,
      _type,
      description,
      category,
      _id,
      slug
    }`)
 
  return data
}
