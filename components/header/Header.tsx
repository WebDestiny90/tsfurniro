"use client"
import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import BurgerMenu from "../burger/BurgerMenu"
import { useState } from "react"
import { useCart } from '@/src/context/CartContext';

const Header = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const total = cartItems.reduce((sum, item) =>
    sum + (Number(item.sofa.price.replace(/[^0-9.-]+/g, '')) * item.quantity), 0
  );

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
                <li className={styles.headerListItems}><Link className={styles.headerLink} href="/shop" >Shop</Link></li>
                <li className={styles.headerListItems}><Link className={styles.headerLink} href="/" >About</Link></li>
                <li className={styles.headerListItems}><Link className={styles.headerLink} href="/contact" >Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerIconsContainer}>
            <nav className={styles.headerIconsNav}>
              <ul className={styles.headerIconList}>
                <li className={styles.headerIconListItems}><Link className={styles.headerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/login.svg" alt="Login icon" width={28} height={28} /></Link></li>
                <li className={styles.headerIconListItems}><Link className={styles.headerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/search.svg" alt="Search icon" width={28} height={28} /></Link></li>
                <li className={styles.headerIconListItems}><Link className={styles.headerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/like.svg" alt="Like icon" width={28} height={28} /></Link></li>
                <li className={styles.headerCartIconListItems}>
                  <div className={styles.cartIconWrapper}>
                    <Image className={styles.iconItems} onClick={() => toggleBurgerMenu()} src="/assets/img/icons/cart.svg" alt="Cart Icon" width={28} height={28} />
                    {itemCount > 0 && (
                      <span className={styles.cartBadge}>{itemCount}</span>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`${styles.cartMenu} ${burgerMenuOpen ? styles.add : ''}`}>
            <h2 className={`${styles.cartTitle} ${styles.colorBlack}`}>Shopping Cart</h2>
            <button className={styles.close} onClick={() => setBurgerMenuOpen(false)}>
              <Image className={styles.listIcons} src="/assets/img/icons/cartClose.svg" alt="" width={16} height={19} />
            </button>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <div key={`${item.sofa.id}-${item.selectedColor}`} className={styles.cartDesc}>
                  <Image className={styles.productImage} src={item.sofa.colors[item.selectedColor].main} width={108} height={105} alt={item.sofa.alt} />
                  <div className={styles.productDescription}>
                    <p className={`${styles.productName} ${styles.colorBlack}`}>{item.sofa.name}</p>
                    <div className={styles.productPrice}>
                      <p className={`${styles.productQuantity} ${styles.colorBlack}`}>{item.quantity}</p>
                      <span className={`${styles.productSpan} ${styles.colorBlack}`}>X</span>
                      <p className={styles.productPriceItem}>{item.sofa.price}</p>
                    </div>
                  </div>
                  <button
                    className={styles.productDelete}
                    onClick={() => removeFromCart(item.sofa.id, item.selectedColor)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.cartMenuTotal}>
              <div className={styles.subTotalItems}>
                <p className={`${styles.cartSubtotal} ${styles.colorBlack}`}>Subtotal</p>
                <p className={styles.cartSubPrice}>${total.toFixed(2)}</p>
              </div>
              <div className={styles.cartLinks}>
                <Link className={`${styles.goCArtPageLink} ${styles.colorBlack} ${styles.linkFonts} ${styles.border}`} onClick={() => setBurgerMenuOpen(false)} href="/cart" >Cart</Link>
                <Link className={`${styles.checkoutLink} ${styles.colorBlack} ${styles.linkFonts} ${styles.border}`} href="/checkout" >Checkout</Link>
                <Link className={`${styles.comparisonLink} ${styles.colorBlack} ${styles.linkFonts} ${styles.border}`} href="" >Comparison</Link>
              </div>
            </div>
          </div>
          <div onClick={() => setBurgerMenuOpen(false)} className={burgerMenuOpen ? styles.overlay : styles.hidden}></div>
        </div>
      </div>
    </header>
  )
}

export default Header