"use client"
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';

import Link from "next/link"
import styles from "./style.module.css"
import Image from 'next/image'
import { firstSlider, secondSlider } from '@/src/Links';

const Inspiration = () => {

  return (
    <article className={styles.article}>
      <div className="container">
        <div className={styles.articleItems}>
          <div className={styles.articleTexts}>
            <h2 className={styles.articleTitle}>50+ Beautiful rooms inspiration</h2>
            <p className={styles.articleText}>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <Link className={styles.articleLink} href="/">Explore More</Link>
          </div>
          <div className={styles.swiperContainer}>
            <div className={styles.firstSwiperContainer}>
              <Swiper
                effect={'fade'}
                loop={true}
                speed={1500}
                // autoplay={{
                //   delay: 3000,
                //   disableOnInteraction: false,
                // }}
                modules={[Autoplay, EffectFade]}
                className={styles.firstSlider}
              >
                {
                  firstSlider.map(({ id, imgSrc, text, title, to }) => {
                    return (
                      <SwiperSlide key={id}>
                        <Image className={styles.sliderImg} src={imgSrc} alt="swiper image" width={404} height={582} />
                        <div className={styles.swiperItemsContainer}>
                          <div className={styles.swiperItems}>
                            <p className={styles.swiperText}>{text}</p>
                            <h2 className={styles.swiperTitle}>{title}</h2>
                          </div>
                          <div className={styles.swiperLink}>
                            <Link className={styles.swiperLinkItem} href={to}>&#x27F6;</Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
            <div className={styles.secondSwiperContainer}>
              <Swiper
                loop={true}
                speed={1500}
                // autoplay={{
                //   delay: 3000,
                //   disableOnInteraction: false,
                // }}
                modules={[Autoplay]}
                className={styles.secondSwiperItem}
              >
                {
                  secondSlider.map(({ id, imgSrc }) => {
                    return (
                      <SwiperSlide key={id}>
                        <SwiperSlide>
                          <Image className={styles.secondSliderImg} src={imgSrc} alt="swiper image" width={372} height={486} />
                        </SwiperSlide>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Inspiration