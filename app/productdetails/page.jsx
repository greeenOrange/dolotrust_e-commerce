'use client'
import style from '../../styles/productsDetails.module.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className={style.product_details}>
      <div className="container">
        <div className={style.product_details_wrapper}>
          <div className={style.product_left}>
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 drop-shadow-md"
            >
              <SwiperSlide>
                <Image width={400} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={400} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={400} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={400} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper mt-4"
            >
              <SwiperSlide>
                <Image width={300} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={300} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={300} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={300} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={300} height={300} alt="" src="/assets/products/shoes-1.png" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={style.product_right}>
            <h2 className={style.details_title}>Hot Selling Sneakers, Sneakers Casual
              Shoes Men Fashion Sneakers Fly knit Li</h2>
            <div className={`${style.details_rating} rating`}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalf} />
              <span className="rating_in_text">3 Reviews</span>
            </div>
            <div className="details_price flex items-center gap-6">
              <h6 className={`${style.details_strike} strikeout`}>$30</h6>
              <h4 className={style.details_price}>$239.99</h4>
            </div>
            <p className={style.details_dec}>Size our sofa slipcovers have 3 sizes. Chair slipcover measures up to 32in-47in wide (80-120cm), Loveseat slipcover measures up to 57in-70in wide (145-180cm), Sofia slipcover measures up to 72in-92in (185-235cm). PLEASE measure your sofa before choosing our sofa slipcovers.</p>
            <h5>Availablity : <span>In stock</span></h5>
            <h5>Product Code : <span>#1234</span></h5>
            <h5>Tags : <span>Shoes, Man, Classic </span></h5>
            <h5>Color: <span></span> <span></span> <span></span></h5>
            <h5>size: <span></span> <span></span> <span></span></h5>
            <h5>Quantity : <span></span></h5>

            <div className="clear_section">
              <h5>Clear Selection</h5>
              <div className="button_group">
                <button className="btn ">Buy Now</button>
                <button className="btn ">Add TO Cart</button>
                <button><FontAwesomeIcon icon={faHeart} /></button>
              </div>
            </div>

          </div>
          <div className="product_overview">
            <div className="tabs">
              <a className="tab tab-bordered">Tab 1</a>
              <a className="tab tab-bordered tab-active">Tab 2</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails