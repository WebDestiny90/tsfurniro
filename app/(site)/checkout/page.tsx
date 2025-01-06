import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import { nameFormFields, country, province } from "@/src/Links"
import Features from "@/components/features/Features"
import Checkouttotal from "@/components/checkouttotal/Checkouttotal"

const CheckOut = () => {
  return (
    <main className={styles.checkOut}>
      <div className={styles.checkOutItems}>
        <div className="container">
          <Image className={styles.logoImage} src="/assets/img/icons/siteLogo.svg" width={55} height={55} alt="Site Logo" />
          <h1 className={styles.checkOutTitle}>Checkout</h1>
          <div className={styles.checkOutTextsBox}>
            <Link className={styles.homeText} href="/cart">Cart</Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <p className={styles.checkOutText}>Checkout</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.leftSide}>
          <div className={styles.billingDetailsBox}>
            <h1 className={styles.billingDetailsTitle}>Billing Details</h1>
            <form className={styles.billingForm}>
              <div>
                <div className={styles.nameLabelBox}>
                  {
                    nameFormFields.map(({ id, label, type }) => {
                      return (
                        <label key={id} className={`${styles.nameLabel} ${styles.flex}`}>
                          {label}
                          <input className={`${styles.nameInput} ${styles.name}`} type={type} required />
                        </label>
                      )
                    })
                  }
                </div>
                <label className={`${styles.companyLabel} ${styles.flex}`}>
                  Company Name (Optional)
                  <input className={styles.companyNameInput} type="text" />
                </label>
                <label htmlFor="country" className={`${styles.countryLabel} ${styles.flex}`}>
                  Country / Region
                  <select className={styles.countrySelect} name="country">
                    {
                      country.map(({ id, options }) => {
                        return (
                          <option key={id} value={options}>{options}</option>
                        )
                      })
                    }
                  </select>
                </label>
                <label className={`${styles.addressLabel} ${styles.flex}`}>
                  Street address
                  <input className={styles.addressInput} type="text" />
                </label>
                <label className={`${styles.cityLabel} ${styles.flex}`}>
                  Town / City
                  <input className={styles.cityInput} type="text" />
                </label>
                <label htmlFor="province" className={`${styles.provinceLabel} ${styles.flex}`}>
                  Country / Region
                  <select className={styles.provinceSelect} name="province">
                    {
                      province.map(({ id, options }) => {
                        return (
                          <option key={id} value={options}>{options}</option>
                        )
                      })
                    }
                  </select>
                </label>
                <label className={`${styles.zipLabel} ${styles.flex}`}>
                  ZIP code
                  <input className={styles.zipInput} type="text" />
                </label>
                <label className={`${styles.phoneLabel} ${styles.flex}`}>
                  Phone
                  <input className={styles.phoneInput} type="tel" required />
                </label>
                <label className={`${styles.emailLabel} ${styles.flex}`}>
                  Email
                  <input className={styles.emailInput} type="email" required />
                </label>
              </div>
              <div className={styles.checkOutSubTotal}>
                <Checkouttotal />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Features />
    </main>
  )
}

export default CheckOut
