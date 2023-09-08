import Image from 'next/image'
import Banner from './components/banner'
import Promotions from './components/promotions'
import Products from './components/products'
import Description from './components/description'
import NewsLetter from './components/newsLetter'

export default function Home() {
  return (
  <div>
    <Banner/>
    <Promotions/>
    <Products/>
    <Description/>
    <NewsLetter/>
  </div>
  )
}
