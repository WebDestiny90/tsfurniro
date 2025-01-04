import CategoryItems from "@/components/categoryPage/CategoryItems";
import axios from "axios";
import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

const url: string = "https://json-server-vercel-tsfurniro.vercel.app/sofas/"
const page = async () => {
  const { data } = await axios.get(url)
  return (
    <main className={styles.categoryItemsMain}>
      <CategoryItems title="Sofa" text="Sofa" />
      <div className="container">
        <div className={styles.mainGrid}>
          {
            data.map(({ id, name, price, mainImg, alt, nameDesc }: any) => {
              return (
                <div key={id} className={styles.gridItems}>
                  <Link href={`/sofaCategory/${id}`}><Image className={`${styles.gridImage} ${styles.shadow}`} src={mainImg} alt={alt} width={285} height={301} /></Link>
                  <div className={`${styles.gridInfo} ${styles.shadow}`}>
                    <h3 className={`${styles.gridTitle} ${styles.colorGray}`}>{name}</h3>
                    <p className={styles.gridDesc}>{nameDesc}</p>
                    <p className={styles.gridPrice}>{price}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export default page
