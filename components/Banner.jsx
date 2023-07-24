import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
const Banner = () => {
  return (
    <section className="banner">
            <div className="container">
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide><Image
            width={1000}
            height={1000}
            sizes="(max-width: 768px) 100vw"
            src="/assets/images/banner/banner-1.png"
            alt='banner-1.png'
            />
            </SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
        </Swiper>
            </div>
        </section>
  )
}

export default Banner