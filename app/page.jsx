'use client'
import Banner from "@components/Banner"
import FlashDeals from "@components/flashdeals/FlashDeals";
import Products from "@app/products/page";
import Footer from "@components/Footer";
// import 'swiper/css';

const page = () => {

  return (
    <section className="w-full flex-center flex-col">
      <Banner />
      <FlashDeals />
      <Products />
      <Footer />
    </section>
  )
}

export default page