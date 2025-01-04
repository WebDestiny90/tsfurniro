import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"
import { categoryItems } from "@/src/Types"

const CategoryItems = ({ title, text }: categoryItems) => {
  return (
    <main className={styles.categoryHeader}>
      <div className={styles.categoryItems}>
        <div className="container">
          <h1 className={styles.categoryTitle}>{title}</h1>
          <div className={styles.categoryTextsBox}>
            <Link className={styles.homeText} href="/">Home</Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <Link className={styles.homeText} href="/shop"><p className={styles.homeText}>Shop</p></Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <p className={styles.categoryText}>{text}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CategoryItems