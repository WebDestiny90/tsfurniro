import Link from "next/link"
import styles from "./style.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerItems}>
          <div className={styles.footerItemsTexts}>
            <h2 className={styles.footerTitle}>Furniro.</h2>
            <h3 className={styles.footerAdress}>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h3>
          </div>
          <div className={styles.footerLinks}>
            <p className={styles.footerLinkText} >Links</p>
            <Link className={styles.footerLinksItems} href="/">Home</Link>
            <Link className={styles.footerLinksItems} href="/shop">Shop</Link>
            <Link className={styles.footerLinksItems} href="/cart">About</Link>
            <Link className={styles.footerLinksItems} href="/">Contact</Link>
          </div>
          <div className={styles.footerHelpLinks}>
            <p className={styles.footerHelpText} >Help</p>
            <Link className={styles.footerLinksItems} href="/">Payment Options</Link>
            <Link className={styles.footerLinksItems} href="/">Returns</Link>
            <Link className={styles.footerLinksItems} href="/">Privacy Policies</Link>
          </div>
          <div className={styles.footerNewsLinks}>
            <p className={styles.footerNewsText} >Newsletter</p>
            <form className={styles.subscribeLink}>
              <input className={styles.footerInput} type="email" placeholder="Enter Your Email Address" required />
              <button className={styles.subscribeButton}>SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <span className={styles.footerEnd}>2025 Furniro. Created by Destiny</span>
      </div>
    </footer>
  )
}

export default Footer