import { faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../../styles/flashDeals.module.css'
import Image from 'next/image'
import Counter from '@components/counter/counter'
const FlashDeals = () => {
  return (
    <section className={style.flash_deals}>
            <div className="container">
                <div className={style.secondary_card_warpper}>                
                <div className={style.seconday_card}>
                    <div className={style.secondary_card_inner}>
                        <span className={style.discount_tag}>20%</span>
                        <Image src="/assets/images/card/sopha-1.png" alt="sopha"
                        width={150}
                        height={150} 
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        />
                        <div className={style.card_dec}>
                            <h3 className="card_title">The school of life - emotional baggage tote...</h3>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalf} />
                                <span className={style.rating_in_text}>1 Reviews</span>
                            </div>
                            <div className={style.secondary_card_footer}>
                                <div className={style.card_left}>
                                    <h6 className="strikeout flex-none">$30</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                                <button className="add_to_cart card_btn">
                                    Add to cart
                                    <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Counter />
                <div className={style.seconday_card}>
                    <div className={style.secondary_card_inner}>
                        <span className={style.discount_tag}>20%</span>
                        <Image src="/assets/images/card/sopha-1.png" alt="sopha"
                        width={150}
                        height={150} 
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        />
                        <div className={style.card_dec}>
                            <h3 className="card_title">The school of life - emotional baggage tote...</h3>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalf} />
                                <span className={style.rating_in_text}>1 Reviews</span>
                            </div>
                            <div className={style.secondary_card_footer}>
                                <div className={style.card_left}>
                                    <h6 className="strikeout flex-none">$30</h6>
                                    <h4 className="price">$20</h4>
                                </div>
                                <button className="add_to_cart card_btn">
                                    Add to cart
                                    <span className="circle"><FontAwesomeIcon icon={faPlus} /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}

export default FlashDeals