"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { CategoryLinks } from "@/src/Links";

const Products = ({ showMore = true, our = true }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CategoryLinks.length / itemsPerPage);

  const currentItems = CategoryLinks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.productsItems}>
          {our && (<h2 className={`${styles.productsTitle} ${styles.colorGray}`}>Our Products</h2>)}
          <div className={styles.mainGrid}>
            {currentItems.map(({ id, to, imageSrc, alt, title }) => (
              <div key={id} className={styles.gridItems}>
                <Link href={to}>
                  <Image className={`${styles.gridImage} ${styles.shadow}`} src={imageSrc} alt={alt} width={285} height={301} />
                </Link>
                <div className={`${styles.gridInfo} ${styles.shadow}`}>
                  <h3 className={styles.gridTitle}>{title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? styles.activePage : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
          {showMore && (
            <div className={`${styles.showMoreLink} ${styles.flex} ${styles.justifyCenter}`}>
              <Link className={`${styles.productShow} ${styles.font}`} href="/shop">Show More</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;