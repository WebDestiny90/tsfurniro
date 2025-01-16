import { useState } from "react";
import styles from "./style.module.css"
import Image from "next/image";
import { Sofa } from "@/src/Types";

interface SofaContentProps {
  sofa: Sofa;
}

const CategoryDescription: React.FC<SofaContentProps> = ({ sofa }) => {
  const [activeTab, setActiveTab] = useState<"description" | "additional" | "reviews">("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div>
            {sofa.description?.text && (
              <p className={styles.descriptionFirstText}>
                {sofa.description.text}
              </p>
            )}
            {sofa.description?.images && (
              <div className={styles.descriptionImages}>
                {sofa.description.images.map((image: string, index: number) => (
                  <Image key={index} className={styles.descriptionImageItem} src={image} width={605} height={348} alt="description image" />
                ))}
              </div>
            )}
          </div>
        );
      case "additional":
        return (
          <ul className={styles.additionlaList}>
            <li className={styles.descriptionSecondText}>{sofa.additional?.text || "No additional information available."}</li>
            <li className={styles.descriptionSecondText}>{sofa.additional?.text2 || "No additional information available."}</li>
            <li className={styles.descriptionSecondText}>{sofa.additional?.text3 || "No additional information available."}</li>
            <li className={styles.descriptionSecondText}>{sofa.additional?.text4 || "No additional information available."}</li>
            <li className={styles.descriptionSecondText}>{sofa.additional?.text5 || "No additional information available."}</li>
          </ul>
        );
      case "reviews":
        return (
          <p className={styles.descriptionThirdText}>
            {sofa.reviews?.text || "No reviews available."}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.descriptionContainer}>
      <div className='container'>
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
