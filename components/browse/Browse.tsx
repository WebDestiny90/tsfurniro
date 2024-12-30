import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"

const Browse = () => {
  return (
    <section className={styles.browse}>
      <div className="container">
        <div className={styles.browseItems}>
          <div className={styles.browseItemsTexts}>
            <h2 className={`${styles.sectionTitle} ${styles.textCenter} ${styles.colorGrey}`}>Browse The Range</h2>
            <p className={`${styles.sectionText} ${styles.textCenter}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.sectionLinksContainer}>
            <div className={`${styles.browseLinks} ${styles.textCenter}`}>
              <Link className={`${styles.linkItems} ${styles.colorGrey}`} href="/"><Image className={styles.browseImages} src="/assets/img/dining.png" alt="" width={381} height={480} />Dining</Link>
            </div>
            <div className={`${styles.browseLinks} ${styles.textCenter}`}>
              <Link className={`${styles.linkItems} ${styles.colorGrey}`} href="/"><Image className={styles.browseImages} src="/assets/img/living.png" alt="" width={381} height={480} />Living</Link>
            </div>
            <div className={`${styles.browseLinks} ${styles.textCenter}`}>
              <Link className={`${styles.linkItems} ${styles.colorGrey}`} href="/"><Image className={styles.browseImages} src="/assets/img/bedroom.png" alt="" width={381} height={480} />Bedroom</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Browse