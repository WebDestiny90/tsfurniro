"use client"
import styles from "./style.module.css"
import { useCart } from '@/src/context/CartContext'

const Checkouttotal = () => {
  const { cartItems } = useCart()

  const total = cartItems.reduce((sum, item) =>
    sum + (Number(item.sofa.price.replace(/[^0-9.-]+/g, '')) * item.quantity), 0
  )

  return (
    <div className={styles.rightSide}>
      <div className="container">
        <div className={styles.productInfoBox}>
          <div className={styles.productTitles}>
            <h2 className={styles.productTitle}>Product</h2>
            <div className={styles.productNamesBox}>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={`${item.sofa.id}-${item.selectedColor}`} className={styles.productNames}>
                    <p className={`${styles.productNameItem} ${styles.font}`}>{item.sofa.name}</p>
                    <p className={styles.productQuantity}>x {item.quantity}</p>
                  </div>
                ))
              ) : (
                <p className={`${styles.productNameItem} ${styles.font}`}>No products in cart</p>
              )}
            </div>
          </div>
          <div className={styles.productPriceBox}>
            <p className={styles.subTotal}>Subtotal</p>
            <p className={styles.productPrice}>${total.toFixed(2)}</p>
            <p className={styles.productTotal}>${total.toFixed(2)}</p>
          </div>
        </div>
        <label className={styles.bankLabel}>
          <input className={styles.cashInput} type="radio" name="bank" />
          Direct Bank Transfer
        </label>
        <label className={styles.bankLabel}>
          <input className={styles.cashInput} type="radio" name="bank" />
          Cash On Delivery
        </label>
        <p className={styles.cashDescription}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        <button className={styles.checkOutButton}>Place Order</button>
      </div>
    </div>
  )
}

export default Checkouttotal
