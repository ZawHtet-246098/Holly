import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SliderOne() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperOne"
      >
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border min-h-[600px] bg-[#C2D3DA] relative">
          <img
            src="/photos/thumb.png"
            className="min-h-[400px] mb-auto"
            alt=""
          />
          <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[150px] bg-white absolute top-[380px] left-[50%] translate-x-[-50%]">
            <p className="text-[24px] font-[700] leading-[35px] text-[#3A7289] h-[68px] flex items-center">
              Silent Auction
            </p>
            <div className="flex justify-between items-center w-full px-[16px]">
              <p className="text-[14px]">Bid Starting from SGD$98 Net</p>
              <p className="text-[red] text-[14px] font-[700]">
                <a href="#">Book Now</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
