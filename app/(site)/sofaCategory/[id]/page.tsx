import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import SofaDetails from '@/components/sofaDetails/SofaDetails';
import axios from 'axios';

const url: string = "https://json-server-vercel-tsfurniro.vercel.app/sofas/"

const SofaPage = async ({ params }: any) => {
  const _id = +params.id;
  const { data } = await axios.get(url + _id);

  console.log(params);


  return (
    <main className={styles.singleMainPage}>
      <div className={styles.singleItems}>
        <div className="container">
          <div className={styles.singleTextsBox}>
            <Link className={styles.homeText} href="/">Home</Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <Link className={styles.homeText} href="/shop"><p className={styles.homeText}>Shop</p></Link>
            <Image className={styles.arrowImage} src="/assets/img/icons/arrow.svg" width={20} height={20} alt="Arrow Icon" />
            <p className={styles.singleText}>{data.name}</p>
          </div>
        </div>
      </div>
      <SofaDetails sofa={data} />
    </main>
  );
}

export default SofaPage;