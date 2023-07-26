import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../styles/products.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Products = () => {
    
    return (
        <section className={style.product}>
            <div className="container">
                <div className={style.card_warpper}>
                    <Link href="/productdetails">
                    <div className={style.primary_card}>
                        <Image src="/assets/products/img.png" alt=""
                            width={500}
                            height={500}
                        />
                        <div className={style.primary_card_body}>
                            <h3 className="card_title">The school of life - emotional baggage tote.
                            </h3>
                            <div className={style.card_rating_price}>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalf} />
                                </div>
                                <div className="card_price">
                                    <h6 className="strikeout">$40</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                            </div>
                            <button className="add_to_cart card_btn">
                                Add to cart
                                <span className="circle">
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </button>
                        </div>
                    </div>
                    </Link>
                    
                    <Link href="/productdetails">
                    <div className={style.primary_card}>
                        <Image src="/assets/products/img.png" alt=""
                            width={500}
                            height={500}
                        />
                        <div className={style.primary_card_body}>
                            <h3 className="card_title">The school of life - emotional baggage tote.
                            </h3>
                            <div className={style.card_rating_price}>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalf} />
                                </div>
                                <div className="card_price">
                                    <h6 className="strikeout">$40</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                            </div>
                            <button className="add_to_cart card_btn">
                                Add to cart
                                <span className="circle">
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </button>
                        </div>
                    </div>
                    </Link>
                    
                    <Link href="/productdetails">
                    <div className={style.primary_card}>
                        <Image src="/assets/products/img-2.png" alt=""
                            width={500}
                            height={500}
                        />
                        <div className={style.primary_card_body}>
                            <h3 className="card_title">The school of life - emotional baggage tote.
                            </h3>
                            <div className={style.card_rating_price}>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalf} />
                                </div>
                                <div className={style.card_price}>
                                    <h6 className="strikeout">$40</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                            </div>
                            <button className="add_to_cart card_btn">
                                Add to cart
                                <span className="circle">
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </button>
                        </div>
                    </div>
                    </Link>
                    <Link href="productdetails">
                    <div className={style.primary_card}>
                        <Image src="/assets/products/img.png" alt=""
                            width={500}
                            height={500}
                        />
                        <div className={style.primary_card_body}>
                            <h3 className="card_title">The school of life - emotional baggage tote.
                            </h3>
                            <div className={style.card_rating_price}>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalf} />
                                </div>
                                <div className="card_price">
                                    <h6 className="strikeout">$40</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                            </div>
                            <button className="add_to_cart card_btn">
                                Add to cart
                                <span className="circle">
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </button>
                        </div>
                    </div>
                    </Link>
                    <Link href="/productdetails">
                    <div className={style.primary_card}>
                        <Image src="/assets/products/img-2.png" alt=""
                            width={500}
                            height={500}
                        />
                        <div className={style.primary_card_body}>
                            <h3 className="card_title">The school of life - emotional baggage tote.
                            </h3>
                            <div className={style.card_rating_price}>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalf} />
                                </div>
                                <div className={style.card_price}>
                                    <h6 className="strikeout">$40</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                            </div>
                            <button className="add_to_cart card_btn">
                                Add to cart
                                <span className="circle">
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </button>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className={style.view_all}>
                    <button className={`${style.view_btn} btn`}>view all</button>
                </div>
            </div>
        </section>
    )
}

export default Products