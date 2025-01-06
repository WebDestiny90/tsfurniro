import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"
import Products from "@/components/products/Products";
import Features from "@/components/features/Features";

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
        <Products showMore={false} our={false} />
      </div>
      <Features />
    </main>
  );
};

export default Shop;