"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/ImageSwiper.css'; // Import custom styles

// import required modules
import { Pagination } from 'swiper/modules';

const images = [
  '/slider/slider-1.webp',
  '/slider/slider-2.webp',
  '/slider/slider-3.webp',
];

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <section className="container mx-auto my-2 md:my-4 flex items-center md:px-4">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-0 pb-[28%]">
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
