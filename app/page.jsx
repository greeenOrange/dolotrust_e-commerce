'use client'
import Banner from "@components/Banner"
import FlashDeals from "@components/flashdeals/FlashDeals";
import Products from "@components/products/Products";
import 'swiper/css';
const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Banner />
      <FlashDeals />
      <Products />
    </section>
  )
}

export default page