import Link from 'next/link'
import React from 'react'
import style from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faHeadset, faPhoneVolume, faSms } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
    <section className={style.footer_content}>
      <div className="container">
         <div className={style.footer_wrapper}>
         <div className="footer_logo">
         <Link className={`${style.footer_logo_item} logo text-white text-black dark:text-white`} href="/"><h2>doloTrust</h2></Link>
         <h3 className={style.footer_title}>Accounts & Shipping Info</h3>
         <ul>
          <li>
            <Link className={style.footer_item} href="">Profile Info</Link>
          </li>
          <li>
            <Link className={style.footer_item} href="">Wishlisht</Link>
          </li>
          <li>
            <Link className={style.footer_item} href="">Track Order</Link>
          </li>
          <li>
            <Link className={style.footer_item} href="">Address</Link>
          </li>
         </ul>
         </div>

          <nav className="footer_nav">
            <h3 className={style.footer_title}>Special</h3>
            <ul className="flow" aria-label="footer" role="list">
              <li>
                <Link className={style.footer_item} href="">Flash Deal</Link>
                </li>
              <li>
                <Link className={style.footer_item} href="">Featured Products</Link>
                </li>
              <li>
                <Link className={style.footer_item} href="">Latest Products</Link>
                </li>
              <li>
                <Link className={style.footer_item} href="">Best Selling Products</Link>
                </li>
              <li>
                <Link className={style.footer_item} href="">Top Rated Products</Link>
                </li>
            </ul>
          </nav>
          <div className="check_out">
            <h3 className={style.footer_title}>CHECK OUT APP</h3>
            <h4 className={style.footer_search}>NewsLetter</h4>
            <p className="text-base font-light pb-4">Subscribe our new channel to get latest update</p>
            <div className="search_input form-control">
            <div className="input-group">
              <input type="text" placeholder="Your Email number.." className="input input-bordered" />
              <button className={`${style.btn} btn`}>
                subscription
              </button>
            </div> 
            </div>
          </div>
         </div>
         <div className={style.conversation_line}>
          <div>
           <h3 className={style.footer_convers}>Start a conversation</h3>
          </div>
           <div className={style.payment_line}>
           <span><FontAwesomeIcon icon={faPhoneVolume}/>+565889023795</span>
           <span><FontAwesomeIcon icon={faSms}/>Contact@doloTrust.com</span>
           <span><FontAwesomeIcon icon={faHeadset}/>Supprt centerp</span>
           <div className={style.payment}>
            <Image
            width={300}
            height={300}
            src="/assets/icons/payment-1.png"
            alt='payment'
            />
           </div>
           </div>
         </div>
      </div>
    </section>
    <div className={style.footer_copyright}>
          <div className="container">
            <div className={style.copyright_wrapper}>
              <p className={style.copyright}>Copyright @ 2022 doloTrust</p>
              <ul className={style.social_items}>
                <li className={style.social_item}>
                  <Link className={style.social_links} href="">
                  <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  </li>
                <li className={style.social_item}>
                  <Link className={style.social_links} href="">
                  <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  </li>
                <li className={style.social_item}>
                  <Link className={style.social_links} href="">
                  <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  </li>
                <li className={style.social_item}>
                  <Link className={style.social_links} href="">
                  <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  </li>
              </ul>
              <span className={style.terms_conditions}><Link href="">Terms & Condition</Link>
              <Link href="">Privacy Policy</Link></span>
            </div>
          </div>
    </div>
    </>
  )
}

export default Footer