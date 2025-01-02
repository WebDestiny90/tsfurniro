import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"
import { CategoryLinks } from "@/src/Links"


const Shop = () => {
  return (
    <main className={styles.shopHeader}>
      <div className={styles.shopItems}>
        <div className="container">
          <h1 className={styles.shopTitle}>Shop</h1>
          <div className={styles.shopTextsBox}>
            <Link className={styles.homeText} href="/">Home</Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <p className={styles.shopText}>Shop</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.mainGrid}>
          {
            CategoryLinks.map(({ id, to, imageSrc, alt, title }) => {
              return (
                <div key={id} className={styles.gridItems}>
                  <Link href={to}><Image className={`${styles.gridImage} ${styles.shadow}`} src={imageSrc} alt={alt} width={285} height={301} /></Link>
                  <div className={`${styles.gridInfo} ${styles.shadow}`}>
                    <h3 className={`${styles.gridTitle} ${styles.colorGray}`}>{title}</h3>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export default Shop