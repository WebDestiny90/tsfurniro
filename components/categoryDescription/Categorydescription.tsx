"use client"
import { useState } from "react";
import styles from "./style.module.css"
import Image from "next/image";

const CategoryDescription = () => {
  const [activeTab, setActiveTab] = useState<"description" | "additional" | "reviews">("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div>
            <p className={styles.descriptionFirstText}>
              Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <div className={styles.descriptionImages}>
              <Image className={styles.descriptionImageItem} src="/assets/img/category/sofacategory/sofadescription/Makassar8937.webp" width={605} height={348} alt="description image" />
              <Image className={styles.descriptionImageItem} src="/assets/img/category/sofacategory/sofadescription/Makassar8937_2.webp" width={605} height={348} alt="description image" />
            </div>
          </div>
        );
      case "additional":
        return (
          <p className={styles.descriptionSecondText}>
            When you buy a Wade Logan® Makassar 89.37 Chenille Square Armrest Couch Sofa online from Wayfair, we make it as easy as possible for you to find out when your product will be delivered.
          </p>
        );
      case "reviews":
        return (
          <p className={styles.descriptionThirdText}>
            Reviews content goes here.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.descriptionContainer}>
      <div className="container">
        <div className={styles.descriptionTitleBox}>
          <h2 className={`${styles.descriptionFirstTitle} ${activeTab === "description" ? styles.active : ""}`} onClick={() => setActiveTab("description")}>Description</h2>
          <h2 className={`${styles.descriptionFirstTitle} ${activeTab === "additional" ? styles.active : ""}`} onClick={() => setActiveTab("additional")}>Additional Information</h2>
          <h2 className={`${styles.descriptionFirstTitle} ${activeTab === "reviews" ? styles.active : ""}`} onClick={() => setActiveTab("reviews")}>Reviews [5]</h2>
        </div>
        <div className={styles.descriptionTextBox}>
          {renderContent()}
        </div>

      </div>
    </section>
  )
}

export default CategoryDescription;
