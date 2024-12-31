import Link from "next/link"
import styles from "./page.module.css"
import MainSwiper from "../../components/swiper/MainSwiper"
import Browse from "@/components/browse/Browse"
import Products from "@/components/products/Products"
import Inspiration from "@/components/inspiration/Inspiration"

const page = () => {
  return (
    <>
      <main className={styles.mainPage}>
        <MainSwiper />
        <div className="container">
          <div className={styles.mainItems}>
            <div className={styles.titleContainer}>
              <p className={styles.mainText}>New Arrival</p>
              <h1 className={styles.mainTitle}>Discover Our New Collection</h1>
              <p className={styles.mainSecondText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <Link className={styles.mainButton} href="/">BUY NOW</Link>
            </div>
          </div>
        </div>
      </main>
      <Browse />
      <Products />
      <Inspiration />
    </>
  )
}

export default page