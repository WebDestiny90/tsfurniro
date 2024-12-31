import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import axios from "axios"
import { productsInfo } from "@/src/Types"

const url = 'https://json-server-vercel-furniro.vercel.app/OurProducts'

const Products = async () => {
  const { data } = await axios.get(url)
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.productsItems}>
          <h2 className={`${styles.productsTitle} ${styles.colorGray}`}>Our Products</h2>
          <div className={styles.mainGrid}>
            {
              data.map(({ id, title, text, price, priceOld, image, discount, color }: productsInfo) => {
                return (
                  <div key={id} className={styles.gridItems}>
                    <span style={{ backgroundColor: color }} className={`${styles.gridDiscount} ${styles.flex} ${styles.alignCenter} ${styles.justifyCenter} ${styles.colorWhite}`}>{discount}</span>
                    <Image className={styles.gridImage} src={image} alt="Products Images" width={285} height={301} />
                    <div className={styles.gridInfo}>
                      <h3 className={`${styles.gridTitle} ${styles.colorGray}`}>{title}</h3>
                      <p className={styles.gridText}>{text}</p>
                      <div className={`${styles.gridPrices} ${styles.flex} ${styles.alignCenter}`}>
                        <p className={`${styles.gridPrice} ${styles.colorGray}`}>{price}</p>
                        <p className={`${styles.gridOldPrice} ${styles.colorGray}`}>{priceOld}</p>
                      </div>
                      <div className={`${styles.productHover} ${styles.flex} ${styles.alignCenter} ${styles.justifyCenter}`}>
                        <button className={`${styles.addBasket} ${styles.font}`} >Add to cart</button>
                        <div className={`${styles.hoverSubLinks} ${styles.flex} ${styles.alignCenter}`}>
                          <Link className={`${styles.hoverShare} ${styles.flex} ${styles.alignCenter} ${styles.colorWhite} ${styles.font}`} href="/"><Image className={styles.hoverIcons} src="/assets/img/icons/shareIcon.svg" alt="Share icon" width={16} height={16} />Share</Link>
                          <Link className={`${styles.hoverLike} ${styles.flex} ${styles.alignCenter} ${styles.colorWhite} ${styles.font}`} href="/"><Image className={styles.hoverIcons} src="/assets/img/icons/likeIcon.svg" alt="Like icon" width={16} height={16} />Like</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className={`${styles.showMoreLink} ${styles.flex} ${styles.justifyCenter}`}>
            <Link className={`${styles.productShow} ${styles.font}`} href="/">Show More</Link>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Products