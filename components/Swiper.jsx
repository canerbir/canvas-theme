"use client";

import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Swiperpage = () => {
  const { ref } = useParallax({ speed: 20 });

  return (
    <div className="mt-[-159px]">
      <div ref={ref} className="lg:w-[1903px] h-[785px] relative -z-10">
        <Image
          src="/assets/swiper.jpg"
          width={2000}
          height={1333}
          quality={100}
          alt="swiper"
          className="object-cover absolute w-full h-full"
        />
        <Swiper
          className="text-white lg:max-w-[746px] absolute lg:top-1/2 top-1/2 lg:right-0 transform -translate-y-1/2 lg:translate-x-1/2 overflow-hidden"
          spaceBetween={60}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="text-center mb-24 lg:">
            <p className="lg:text-2xl !leading-10 mb-8">
              Similique fugit repellendus expedita excepturi iure perferendis
              provident quia eaque vero numquam?
            </p>
            <h4 className="lg:text-xl">Steve Jobs</h4>
            <small className="text-sm">Apple Inc.</small>
          </SwiperSlide>
          <SwiperSlide className="text-2xl text-center">
            <p className="lg:text-2xl !leading-10 mb-8">
              Natus voluptatum enim quod necessitatibus quis expedita harum
              provident eos obcaecati id culpa corporis molestias.
            </p>
            <h4 className="lg:text-xl">Collis Ta'eed</h4>
            <small className="text-sm">Envato Inc.</small>
          </SwiperSlide>
          <SwiperSlide className="text-2xl text-center">
            <p className="lg:text-2xl !leading-10 mb-8">
              Incidunt deleniti blanditiis quas aperiam recusandae consequatur
              ullam quibusdam cum libero illo rerum!
            </p>
            <h4 className="lg:text-xl">John Doe</h4>
            <small className="text-sm">XYZ Inc.</small>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full h-[50px] z-10"></div>
    </div>
  );
};

export default Swiperpage;
