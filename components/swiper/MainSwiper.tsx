"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";
import { useState } from 'react';
import Image from "next/image"
import styles from "./style.module.css"
import 'swiper/css';
import 'swiper/css/effect-fade';
import heroimg1 from "../../public/assets/img/heroimg.png"
import heroimg2 from "../../public/assets/img/heroimg2.webp"
import heroimg3 from "../../public/assets/img/heroimg3.jpg"
import heroimg4 from "../../public/assets/img/heroimg4.png"
import heroimg5 from "../../public/assets/img/heroimg5.jpg"

const MainSwiper = () => {
  const [init, setInit] = useState(false)
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        onInit={() => {
          setInit(!init);
        }}
        effect={'fade'}
        speed={2500}
        loop={true}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src={heroimg1} alt="Furniture image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src={heroimg2} alt="Furniture image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src={heroimg3} alt="Furniture image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src={heroimg4} alt="Furniture image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src={heroimg5} alt="Furniture image" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainSwiper