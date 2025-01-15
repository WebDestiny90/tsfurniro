"use client"

import { useState } from "react";
import styles from "@/app/(site)/sofaCategory/[id]/style.module.css"
import Image from "next/image";
import { ColorVariant, Sofa } from "@/src/Types";
import { useCart } from '@/src/context/CartContext';
import Categorydescription from "../categoryDescription/Categorydescription";

const SofaDetails = ({ sofa }: { sofa: Sofa }) => {
  const { addToCart } = useCart();
  const [currentColor, setCurrentColor] = useState("beige");
  const [mainImage, setMainImage] = useState<string>(sofa.mainImg);

  const handleColorChange = (color: ColorVariant) => {
    setCurrentColor(color);
    setMainImage(sofa.colors[color].main);
  };

  const handleImageClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  return (
    <>
      <div className="container">
        <div className={styles.singleImageBox}>
          <div className={styles.test}>
            <div className={styles.singleImageBoxItems}>
              {sofa.colors[currentColor].previews.map((preview, index) => (
                <Image
                  loading="lazy"
                  key={preview}
                  className={styles.singleImage}
                  src={preview}
                  width={76}
                  height={80}
                  alt={sofa.alt}
                  onClick={() => handleImageClick(sofa.colors[currentColor].mains[index])}
                />
              ))}
            </div>
            <div className={styles.singleMainImage}>
              <Image
                priority
                className={styles.singleMainImageItem}
                src={mainImage}
                width={423}
                height={500}
                alt={sofa.alt}
              />
            </div>
          </div>
          <div className={styles.singleDescription}>
            <h1 className={styles.descriptionTitle}>{sofa.name}</h1>
            <p className={styles.descriptionPrice}>{sofa.price}</p>
            <div className={styles.raitingBox}>
              <Image className={styles.descriptionImage} src="/assets/img/icons/raiting.svg" width={124} height={20} alt="Star Icon" />
              <p className={styles.raitinText}>5 Customer Review</p>
            </div>
            <p className={styles.descriptionText}>{sofa.descriptionText}</p>
            <div className={styles.descriptionColorBox}>
              <p className={styles.descriptionColorText}>Color</p>
              {Object.entries(sofa.colors).map(([colorName, colorData]) => (
                <button
                  key={colorName}
                  className={styles.colorButton}
                  style={{ backgroundColor: colorData.cssColor }}
                  onClick={() => handleColorChange(colorName as ColorVariant)}
                ></button>
              ))}
              <div className={styles.cartButton}>
                <button className={styles.cartButtonItem} onClick={() => addToCart(sofa, currentColor as ColorVariant)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categorydescription />
    </>
  );
};

export default SofaDetails; 