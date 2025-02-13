"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const items = [
  {
    image: "/images/shipping.png",
    text: "Free Shipping over $99",
  },
  {
    image: "/images/return_white.png",
    text: "100-Day Returns",
  },
  {
    image: "/images/australia_white.png",
    text: "Australian Family Business",
  },
];

export default function TextSliderMobile() {
  return (
    <div className="bg-gray-800 py-2 md:hidden">
      <Swiper spaceBetween={10} slidesPerView={1} loop autoplay={{ delay: 2000 }} className="w-full">
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center space-x-2">
              {/* <Image src={item.image} alt={item.text} layout="fill" objectFit="contain"/> */}
                <div className="relative w-7 h-7">
                    <Image src={item.image} alt="Logo" layout="fill" objectFit="contain" />
                </div>
              <span className="text-white text-sm">{item.text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
