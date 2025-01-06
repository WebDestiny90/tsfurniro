import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import { addressInfo, contactFields } from "@/src/Links"
import Features from "@/components/features/Features"

const Contact = () => {
  return (
    <main className={styles.contactPage}>
      <div className={styles.contactItems}>
        <div className="container">
          <Image className={styles.logoImage} src="/assets/img/icons/siteLogo.svg" width={55} height={55} alt="Site Logo" />
          <h1 className={styles.contactTitle}>contact</h1>
          <div className={styles.contactTextsBox}>
            <Link className={styles.homeText} href="/">Home</Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <p className={styles.contactText}>Contact</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.contactTextBox}>
          <h1 className={`${styles.contactSubTitle} ${styles.textCenter}`}>Get In Touch With Us</h1>
          <p className={`${styles.contactSubText} ${styles.textCenter}`}>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className={styles.contactMainBox}>
          <div className={styles.contactleftSide}>
            {
              addressInfo.map(({ id, imgSrc, title, text }) => {
                return (
                  <div key={id} className={styles.leftSideItems}>
                    <Image className={styles.contactIcon} src={imgSrc} alt="address icon" width={22} height={27.59} />
                    <div className={styles.leftSideTexts}>
                      <h2 className={styles.contactAddressTitle}>{title}</h2>
                      <p className={styles.contactAddressText}>{text}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className={styles.contactRightSide}>
            <div className={styles.contactInputs}>
              <form className={styles.contactForm}>
                {
                  contactFields.map(({ id, label, type, placeHolder }) => {
                    return (
                      <label key={id} className={styles.contactLabel}>
                        {label}
                        <input className={styles.contactInputItem} type={type} placeholder={placeHolder} required />
                      </label>
                    )
                  })
                }
                <label className={`${styles.contactLabel} ${styles.meesageLabel}`}>
                  Message
                  <textarea className={`${styles.contactInputItem} ${styles.messageInput}`} placeholder="Hi! i’d like to ask about" cols={30} rows={10} required ></textarea>
                </label>
                <button className={styles.contactSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </main>
  )
}

export default Contact
