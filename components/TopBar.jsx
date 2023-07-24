import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../styles/TopBar.module.css';

const TopBar = () => {
  return (
    <div className={style.top_bar}>
      <div className="container">
        <div className={`${style.space_between}`}>
          <a href="tel:+565889023795" className={`${style.phone} text-black dark:text-white flex`}>
            <span className="w-8">
              <FontAwesomeIcon icon={faPhone} />
            </span>+565889023795</a>
          <div className={style.lang_dropdown}>
            <ul className={`${style.menu} menu menu-horizontal px-1`}>
              <li>
                <details>
                  <summary className="text-black dark:text-white">
                    English
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li><a>Bangla</a></li>
                    <li><a>Spanice</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar