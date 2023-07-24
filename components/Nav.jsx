'use client'
import { useState } from 'react';
import TopBar from './TopBar';
import ToSearceBar from './ToSearceBar';
import style from '../styles/Nav.module.css';
import Link from 'next/link';
const Nav = () => {
    const [category, setCategory] = useState(false);

    const handleCatagroy = () =>{
      setCategory(!category)
    }

  return (
    <nav>
    <TopBar />
    <ToSearceBar />
    <section className={style.main_menu}>
      <div className="container">
        <div className={style.nav_wrapper}>
          <div onClick={handleCatagroy} className={style.categories}>
            <label className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 0V2H0V0H9ZM13 16V18H0V16H13ZM19 8V10H0V8H19Z" fill="white" />
              </svg>
            </label>
            <ul className={`${style.catagroy_dropdown} menu bg-base-200 w-56 rounded-box ${category === true ? "block " : "hidden"}`}>
              <li className={style.menu_item}><Link href="/">Item 1</Link></li>
              <li className={style.menu_item}><Link href="/">Item 2</Link></li>
              <li className={style.menu_item}><Link href="/">Item 3</Link></li>
            </ul>
            <p className={style.catagory_title}>Categories</p>
            <span className="bottom_arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M0.21967 0.24024C0.485936 -0.05096 0.9026 -0.0774327 1.19621 0.160822L1.28033 0.24024L7.75 7.31536L14.2197 0.24024C14.4859 -0.05096 14.9026 -0.0774327 15.1962 0.160822L15.2803 0.24024C15.5466 0.53144 15.5708 0.98712 15.3529 1.30823L15.2803 1.40022L8.28033 9.05571C8.01406 9.34691 7.5974 9.37338 7.30379 9.13513L7.21967 9.05571L0.21967 1.40022C-0.0732233 1.0799 -0.0732233 0.56056 0.21967 0.24024Z" fill="white" />
            </svg></span>

          </div>
          <ul aria-label="Primary" role="list" className={style.nav_list}>
            <li><Link href="#">Home</Link> </li>
            <li><Link href="#">All Brands</Link> </li>
            <li><Link href="#">Discount Products</Link> </li>
            <li><Link href="#">All Sellers</Link> </li>
            <li><Link href="#">Seller Zone</Link> </li>
          </ul>
        </div>

      </div>
    </section>
  </nav>
  )
}

export default Nav