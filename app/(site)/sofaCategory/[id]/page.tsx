import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import SofaDetails from '@/components/sofaDetails/SofaDetails';
import axios from 'axios';
import { Sofa } from "@/src/Types";

const url: string = "https://json-server-vercel-tsfurniro.vercel.app/sofas/"

interface Params {
  id: number;
}

interface PageProps {
  params: Params;
}

const SofaPage = async ({ params }: PageProps) => {
  const { id } = params;
  const { data }: { data: Sofa } = await axios.get(url + id);

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
