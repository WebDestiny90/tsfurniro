import Image from "next/image"
import styles from "./style.module.css"
import { features } from '@/src/Links'

const Features = () => {
  return (
    <div className={styles.featuresbox}>
      <div className="container">
        <div className={styles.featuresContainer}>
          {
            features.map(({ id, imgSrc, alt, title, text }) => (
              <div key={id} className={styles.features}>
                <Image className={styles.featuresImage} src={imgSrc} alt={alt} width={60} height={60} />
                <div className={styles.featuresTexts}>
                  <p className={styles.featuresTitle}>{title}</p>
                  <p className={styles.featuresDescription}>{text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Features
