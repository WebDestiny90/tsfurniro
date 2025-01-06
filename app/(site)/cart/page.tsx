"use client"
import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"
import { useCart } from '@/src/context/CartContext';
import { features } from "@/src/Links";
import Features from "@/components/features/Features";


const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) =>
    sum + (Number(item.sofa.price.replace(/[^0-9.-]+/g, '')) * item.quantity), 0
  );

  return (
    <section className={styles.cartSection}>
      <div className={styles.cartItems}>
        <div className="container">
          <Image className={styles.logoImage} src="/assets/img/icons/siteLogo.svg" width={55} height={55} alt="Site Logo" />
          <h1 className={styles.cartTitle}>Cart</h1>
          <div className={styles.cartTextsBox}>
            <Link className={styles.homeText} href="/">Home</Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <p className={styles.cartText}>Cart</p>
          </div>
        </div>
      </div>
      <div className={styles.cartProducts}>
        <div className="container">
          <div className={styles.cartMain}>
            <div className={styles.cartProductsContainer}>
              <div className={`${styles.productsDescrip} ${styles.fonts}`}>
                <p className={`${styles.productName} ${styles.fonts}`}>Product</p>
                <p className={`${styles.productPrice} ${styles.fonts}`}>Price</p>
                <p className={`${styles.productQuantity} ${styles.fonts}`}>Quantity</p>
                <p className={`${styles.productSubtotal} ${styles.fonts}`}>Subtotal</p>
              </div>
              {cartItems.map((item) => (
                <div key={`${item.sofa.id}-${item.selectedColor}`} className={styles.productInfo}>
                  <Image className={styles.productImage} src={item.sofa.colors[item.selectedColor].main} alt={item.sofa.alt} width={108} height={105} />
                  <p className={styles.productNameInfo}>{item.sofa.name}</p>
                  <p className={styles.producPriceInfo}>{item.sofa.price}</p>
                  <p className={styles.productQuantityInfo}>{item.quantity}</p>
                  <p className={styles.productSubtotalInfo}>
                    ${(Number(item.sofa.price.replace(/[^0-9.-]+/g, '')) * item.quantity).toFixed(2)}
                  </p>
                  <button onClick={() => removeFromCart(item.sofa.id, item.selectedColor)}>
                    <Image
                      src="/assets/img/icons/deleteIcon.svg"
                      alt="Delete"
                      width={28}
                      height={28}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.cartTotal}>
              <h2 className={styles.totalTitle}>Cart Totals</h2>
              <div className={styles.totalsTexts}>
                <p className={styles.totalsInfo}>Subtotal</p>
                <p className={styles.totalsPrice}>${total.toFixed(2)}</p>
              </div>
              <div className={styles.totalsTexts}>
                <p className={styles.subtotalsInfo}>Total</p>
                <p className={styles.subtotalsPrice}>${total.toFixed(2)}</p>
              </div>
              <Link href="/checkout" className={styles.cartButton}>Check out</Link>
            </div>
          </div>
        </div>
        <Features />
      </div>
    </section>
  )
}

export default Cart