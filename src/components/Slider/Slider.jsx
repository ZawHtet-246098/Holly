import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "react-feather";

export default function Slider() {
  const swiperRef = useRef();
  return (
    <div className=" relative  ">
      <p className="text-center text-[36px] font-[400px] leading-[70px] text-[#3A7289]">
        Our Valuable Reviews
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper max-w-[1135px] mx-auto"
      >
        <SwiperSlide className="flex flex-col p-[33px] gap-[22px] shadow-2xl rounded-xl border">
          <div className="flex max-w-[300px] items-center gap-[13px] text-start">
            <img src="/photos/frame1.png" className="max-w-[60px]" alt="" />
            <p className="text-[blue] text-[22px] leading-[28px] font-[800]">
              Perpiciatis esse molestiae vel qui.
            </p>
          </div>
          <p className="">
            Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem
            praesentiu excepturi id. Repudiandae incidunt doloremque. Error est
            et ullam.
          </p>
          <div className="flex gap-[8px] items-center border w-full">
            <div className="flex gap-2">
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" />
            </div>
            <div>
              <p className="text-[13px] font-[800] leading-[13px]">Roxanne</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-[33px] gap-[22px] shadow-2xl rounded-xl border">
          <div className="flex max-w-[300px] items-center gap-[13px] text-start">
            <img src="/photos/frame1.png" className="max-w-[60px]" alt="" />
            <p className="text-[blue] text-[22px] leading-[28px] font-[800]">
              Perpiciatis esse molestiae vel qui.
            </p>
          </div>
          <p className="">
            Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem
            praesentiu excepturi id. Repudiandae incidunt doloremque. Error est
            et ullam.
          </p>
          <div className="flex gap-[8px] items-center border w-full">
            <div className="flex gap-2">
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" />
            </div>
            <div>
              <p className="text-[13px] font-[800] leading-[13px]">Roxanne</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-[33px] gap-[22px] shadow-2xl rounded-xl border">
          <div className="flex max-w-[300px] items-center gap-[13px] text-start">
            <img src="/photos/frame1.png" className="max-w-[60px]" alt="" />
            <p className="text-[blue] text-[22px] leading-[28px] font-[800]">
              Perpiciatis esse molestiae vel qui.
            </p>
          </div>
          <p className="">
            Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem
            praesentiu excepturi id. Repudiandae incidunt doloremque. Error est
            et ullam.
          </p>
          <div className="flex gap-[8px] items-center border w-full">
            <div className="flex gap-2">
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" />
            </div>
            <div>
              <p className="text-[13px] font-[800] leading-[13px]">Roxanne</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-[33px] gap-[22px] shadow-2xl rounded-xl border">
          <div className="flex max-w-[300px] items-center gap-[13px] text-start">
            <img src="/photos/frame1.png" className="max-w-[60px]" alt="" />
            <p className="text-[blue] text-[22px] leading-[28px] font-[800]">
              Perpiciatis esse molestiae vel qui.
            </p>
          </div>
          <p className="">
            Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem
            praesentiu excepturi id. Repudiandae incidunt doloremque. Error est
            et ullam.
          </p>
          <div className="flex gap-[8px] items-center border w-full">
            <div className="flex gap-2">
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" />
            </div>
            <div>
              <p className="text-[13px] font-[800] leading-[13px]">Roxanne</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-[33px] gap-[22px] shadow-2xl rounded-xl border">
          <div className="flex max-w-[300px] items-center gap-[13px] text-start">
            <img src="/photos/frame1.png" className="max-w-[60px]" alt="" />
            <p className="text-[blue] text-[22px] leading-[28px] font-[800]">
              Perpiciatis esse molestiae vel qui.
            </p>
          </div>
          <p className="">
            Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem
            praesentiu excepturi id. Repudiandae incidunt doloremque. Error est
            et ullam.
          </p>
          <div className="flex gap-[8px] items-center border w-full">
            <div className="flex gap-2">
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" />
            </div>
            <div>
              <p className="text-[13px] font-[800] leading-[13px]">Roxanne</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col p-[33px] gap-[22px] shadow-2xl rounded-xl border">
          <div className="flex max-w-[300px] items-center gap-[13px] text-start">
            <img src="/photos/frame1.png" className="max-w-[60px]" alt="" />
            <p className="text-[blue] text-[22px] leading-[28px] font-[800]">
              Perpiciatis esse molestiae vel qui.
            </p>
          </div>
          <p className="">
            Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem
            praesentiu excepturi id. Repudiandae incidunt doloremque. Error est
            et ullam.
          </p>
          <div className="flex gap-[8px] items-center border w-full">
            <div className="flex gap-2">
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" /> <Star className="w-[15px]" />{" "}
              <Star className="w-[15px]" />
            </div>
            <div>
              <p className="text-[13px] font-[800] leading-[13px]">Roxanne</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-between absolute w-full top-[50%] left-[50%] translate-x-[-50%] max-w-[1300px]">
        <button
          type="button"
          className="w-auto start-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
            }}
            className="rounded-full relative border-2 bg-[#EBF1F3]"
          >
            <ArrowLeft
              // style={{
              //   color: "red",
              // }}
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </button>
        <button
          type="button"
          className="end-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
            }}
            className="rounded-full relative bg-[#EBF1F3]"
          >
            <ArrowRight class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </button>
      </div>
    </div>
  );
}
