"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";
import { useState } from 'react';
import Image from "next/image"
import styles from "./style.module.css"
import 'swiper/css';
import 'swiper/css/effect-fade';

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
          <Image className={styles.swiperImage} src="/assets/img/heroimg.png" alt="Furniture image" width={1000} height={1000} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src="/assets/img/heroimg2.webp" alt="Furniture image" width={1000} height={1000} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src="/assets/img/heroimg3.jpg" alt="Furniture image" width={1000} height={1000} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src="/assets/img/heroimg4.png" alt="Furniture image" width={1000} height={1000} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image className={styles.swiperImage} src="/assets/img/heroimg5.jpg" alt="Furniture image" width={1000} height={1000} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainSwiper