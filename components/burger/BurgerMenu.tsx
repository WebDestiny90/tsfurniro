"use client"
import { useState } from "react";
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";

const BurgerMenu = () => {

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);

  };

  return (
    <div className={styles.burgerMenu}>
      <div className="container">
        <div className={styles.menuItems}>
          <div className={styles.burger} onClick={() => toggleBurgerMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`${styles.mobileMenu} ${burgerMenuOpen ? styles.add : ''}`}>
          <Image className={styles.burgerLogoItem} src="/assets/img/icons/furnirologo.png" alt="Furniro Site Logo" width={185} height={41} />
          <div className={styles.burgerNavContainer}>
            <nav className={styles.burgerNav}>
              <ul className={styles.burgerLinkList}>
                <li className={styles.burgerListItems}><Link className={styles.burgerLink} href="/" >Home</Link></li>
                <li className={styles.burgerListItems}><Link className={styles.burgerLink} href="/shop" >Shop</Link></li>
                <li className={styles.burgerListItems}><Link className={styles.burgerLink} href="/blog" >Blog</Link></li>
                <li className={styles.burgerListItems}><Link className={styles.burgerLink} href="/contact" >Contact</Link></li>
              </ul>
              <button className={styles.close} onClick={() => setBurgerMenuOpen(false)} >&#10006;</button>
            </nav>
            <nav className={styles.burgerIconsNav}>
              <ul className={styles.burgerIconList}>
                <li className={styles.burgerIconListItems}><Link className={styles.burgerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/login.svg" alt="Login icon" width={24} height={24} /></Link></li>
                <li className={styles.burgerIconListItems}><Link className={styles.burgerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/search.svg" alt="Search icon" width={24} height={24} /></Link></li>
                <li className={styles.burgerIconListItems}><Link className={styles.burgerIconLink} href="/" ><Image className={styles.iconItems} src="/assets/img/icons/like.svg" alt="Like icon" width={24} height={24} /></Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div onClick={() => setBurgerMenuOpen(false)} className={burgerMenuOpen ? styles.overlay : styles.hidden}></div>
      </div>
    </div>
  )
}

export default BurgerMenu