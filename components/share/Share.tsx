import Image from "next/image"
import styles from "./style.module.css"
import shareImage from "../../public/assets/img/shareImage.png"

const Share = () => {
  return (
    <section className={styles.shareSection}>
      <div className={styles.sectionItems}>
        <div className="container">
          <div className={styles.sectionTexts}>
            <p className={styles.sectionText}>Share your setup with</p>
            <h2 className={styles.sectionTitle}>#FurniroFurniture</h2>
          </div>
        </div>
        <div className={styles.sectionImage}><Image className={styles.sectionImageItem} src={shareImage} alt="Share Images" /></div>
      </div>
    </section>
  )
}

export default Share