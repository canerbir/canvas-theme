"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Blog = () => {
  return (
    <div id="blog" className="">
      <div className="text-center flex items-end justify-center bg-red h-[250px]">
        <h2 className="uppercase text-3xl pb-20">Recently From the Blog</h2>
      </div>
      <div className="bg-[#F8F9FA] grid mx-auto items-center justify-center">
        <div className="mt-24 lg:flex items-center justify-center">
          <div className="lg:flex max-w-[636px] mb-12 lg:mr-10">
            <Image
              src="/assets/blog1.jpg"
              width={294}
              height={220}
              className="hidden lg:flex"
            />
            <Image
              src="/assets/blog1.jpg"
              width={425}
              height={326}
              className="lg:hidden"
            />
            <div className="flex flex-col justify-center gap-4 lg:ml-5">
              <span className="text-base font-playfair text-[#6C757D]">
                Press &amp; Media
              </span>
              <h3 className="text-[22px]">
                Global Meetup Program is Launching!
              </h3>
              <Link
                className="flex items-center text-[#1ABC9C] text-base font-playfair gap-1 underline cursor-pointer hover:text-black"
                style={{ textUnderlineOffset: "4px" }}
              >
                Read more <FaChevronRight className="w-2" />
              </Link>
            </div>
          </div>
          <div className="lg:flex max-w-[636px] mb-12">
            <Image
              src="/assets/blog2.jpg"
              width={294}
              height={220}
              className="hidden lg:flex"
            />
            <Image
              src="/assets/blog2.jpg"
              width={425}
              height={326}
              className="lg:hidden"
            />
            <div className="flex flex-col justify-center gap-4 lg:ml-5">
              <span className="text-base font-playfair text-[#6C757D]">
                Inside Scoops
              </span>
              <h3 className="text-[22px]">
                The New YouTube Economy unfolds itself
              </h3>
              <Link
                className="flex items-center text-[#1ABC9C] text-base font-playfair gap-1 underline cursor-pointer hover:text-black"
                style={{ textUnderlineOffset: "4px" }}
              >
                Read more <FaChevronRight className="w-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-24 lg:flex items-center justify-center">
          <div className="lg:flex max-w-[636px] mb-12 lg:mr-10">
            <Image
              src="/assets/blog3.jpg"
              width={294}
              height={220}
              className="hidden lg:flex"
            />
            <Image
              src="/assets/blog3.jpg"
              width={425}
              height={326}
              className="lg:hidden"
            />
            <div className="flex flex-col justify-center gap-4 lg:ml-5">
              <span className="text-base font-playfair text-[#6C757D]">
                Video Blog
              </span>
              <h3 className="text-[22px]">Kicking Off Design Party in Style</h3>
              <Link
                className="flex items-center text-[#1ABC9C] text-base font-playfair gap-1 underline cursor-pointer hover:text-black"
                style={{ textUnderlineOffset: "4px" }}
              >
                Read more <FaChevronRight className="w-2" />
              </Link>
            </div>
          </div>
          <div className="lg:flex max-w-[636px] mb-12">
            <Image
              src="/assets/blog4.jpg"
              width={294}
              height={220}
              className="hidden lg:flex"
            />
            <Image
              src="/assets/blog4.jpg"
              width={425}
              height={326}
              className="lg:hidden"
            />
            <div className="flex flex-col justify-center gap-4 lg:ml-5">
              <span className="text-base font-playfair text-[#6C757D]">
                Inspiration
              </span>
              <h3 className="text-[22px]">
                Top Ten Signs You&apos;re a Designer
              </h3>
              <Link
                className="flex items-center text-[#1ABC9C] text-base font-playfair gap-1 underline cursor-pointer hover:text-black"
                style={{ textUnderlineOffset: "4px" }}
              >
                Read more <FaChevronRight className="w-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[1296px] h-[111.98px] mx-auto mt-20 mb-24 hidden lg:flex">
        <Swiper
          spaceBetween={1}
          slidesPerView={6}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper7.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper9.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper10.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:max-w-[1296px] h-[111.98px] mx-auto mt-20 mb-24 lg:hidden">
        <Swiper
          spaceBetween={1}
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper7.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper9.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={111.98} width={149.33} src="/assets/swiper10.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
