import { faHeart, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../styles/ToSearchBar.module.css'
import Link from 'next/link';
const ToSearceBar = () => {
  return (
    <section className={style.top_search_bar}>
    <div className="container">
      <div className={style.second_nav}>
        <div className={style.left_bar}>
          <Link className="logo text-black dark:text-white" href="/"><h2>doloTrust</h2></Link>
          <div className="search_input form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered" />
              <button className={`${style.secondary_btn} btn`}>
                Search
              </button>
            </div>
          </div>
        </div>
        <ul className={style.customer_cart}>
          <li className={style.users_cart}>
            <Link href=""><FontAwesomeIcon icon={faHeart} /></Link>
          </li>
          <li className={`${style.user_dropdown} dropdown`}>
              <label tabIndex={0} className={`${style.user_menu} btn m-1`}><FontAwesomeIcon icon={faUser}/></label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/">Item 1</Link></li>
                <li><Link href="/">Item 2</Link></li>
              </ul>

          </li>
          <li className={style.users_cart}>
            <Link href=""><FontAwesomeIcon icon={faShoppingBasket} /></Link>
            $13.130
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default ToSearceBar