import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import BurgerMenu from "../burger/BurgerMenu"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerItems}>
          <BurgerMenu />
          <div className={styles.headerLogo}>
            <Link className={styles.headerLink} href="/" ><Image className={styles.headerLogoItem} src="/assets/img/icons/furnirologo.png" alt="Furniro Site Logo" width={185} height={41} /></Link>
          </div>
          <div className={styles.headerLinksContainer}>
            <nav className={styles.headerNav}>
              <ul className={styles.headerLinkList}>
                <li className={styles.headerListItems}><Link className={styles.headerLink} href="/" >Home</Link></li>
                <li className={styles.headerListItems}><Link className={styles.headerLink} href="/" >Shop</Link></li>
                <li className={styles.headerListItems}><Link className={styles.headerLink} href="/" >About</Link></li>
                <li className={styles.headerListItems}><Link className={styles.headerLink} href="/" >Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerIconsContainer}>
            <nav className={styles.headerIconsNav}>
              <ul className={styles.headerIconList}>
                <li className={styles.headerIconListItems}><Link className={styles.headerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/login.svg" alt="Login icon" width={28} height={28} /></Link></li>
                <li className={styles.headerIconListItems}><Link className={styles.headerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/search.svg" alt="Search icon" width={28} height={28} /></Link></li>
                <li className={styles.headerIconListItems}><Link className={styles.headerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/like.svg" alt="Like icon" width={28} height={28} /></Link></li>
                <li className={styles.headerCartIconListItems}><Link className={styles.headerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/cart.svg" alt="Cart Icon" width={28} height={28} /></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header