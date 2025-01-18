import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image"
import { blogItems, CategoryLinks } from "@/src/Links"
import { BlogItem } from "@/src/Types"

const Blog = () => {
  return (
    <main className={styles.blogPage}>
      <div className={styles.blogItems}>
        <div className="container">
          <Image className={styles.logoImage} src="/assets/img/icons/siteLogo.svg" width={55} height={55} alt="Site Logo" />
          <h1 className={styles.blogTitle}>Blog</h1>
          <div className={styles.blogTextsBox}>
            <Link className={styles.homeText} href="/">Home</Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <p className={styles.blogText}>blog</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.blogMainItems}>
          <div className={styles.blogSubItemsBox}>
            {
              blogItems.map(({ id, imgSrc, alt, admin, date, tag, title, text, loading }) => {
                return (
                  <div key={id} className={styles.blogSubItems}>
                    <Image className={styles.blogImage} src={imgSrc} width={817} height={500} alt={alt} loading={loading} />
                    <div className={styles.blogInfoBox}>
                      <Image className={styles.blogIcon} src="/assets/img/icons/admin.svg" width={20} height={20} alt="Blog Icon" />
                      <p className={styles.blogInfo}>{admin}</p>
                      <Image className={styles.blogIcon} src="/assets/img/icons/calendar.svg" width={20} height={20} alt="Blog Icon" />
                      <p className={styles.blogInfo}>{date}</p>
                      <Image className={styles.blogIcon} src="/assets/img/icons/ci_tag.svg" width={24} height={24} alt="Blog Icon" />
                      <p className={styles.blogInfo}>{tag}</p>
                    </div>
                    <h2 className={styles.blogSubTitle}>{title}</h2>
                    <p className={styles.blogSubText}>{text}</p>
                  </div>
                )
              })
            }
          </div>
          <div className={styles.blogRightItems}>
            <h3 className={styles.blogRightTitle}>Categories</h3>
            {
              CategoryLinks.map(({ id, to, title }) => {
                return (
                  <div key={id} className={styles.blogRightCategory}>
                    <Link className={styles.blogCategoryLinks} href={to}>{title}</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blog
