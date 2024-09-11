"use client";

import Image from "next/image";

const Services = () => {
  return (
    <section id="services">
      <div className="text-center mx-auto flex items-center justify-center bg-[#F8F9FA]">
        <h2 className="text-xl lg:text-3xl font-light lg:max-w-[1200px] lg:px-[130px] px-12 py-20">
          We enjoy working on the Services & Products we provide as much as you
          need them. This help us in delivering your Goals easily. Browse
          through the wide range of services we provide.
        </h2>
      </div>
      <div className="lg:flex">
        <div>
          <div className="lg:w-[634.33px] lg:h-[447.28px] hidden lg:flex">
            <Image
              src="/assets/services.jpg"
              quality={100}
              width={634.33}
              height={347.28}
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 items-center justify-center w-full">
          <div className="h-[223.64px] flex flex-col items-center justify-center border-b lg:border-r">
            <Image
              src="/assets/responsive.png"
              quality={100}
              width={48}
              height={48}
            />
            <h3 className="mt-5">Responsive Framework</h3>
          </div>
          <div className="h-[223.64px] flex flex-col items-center justify-center border-b lg:border-r">
            <Image
              src="/assets/chart.png"
              quality={100}
              width={48}
              height={48}
            />
            <h3 className="mt-5">Beautifully Presented</h3>
          </div>
          <div className="h-[223.64px] flex flex-col items-center justify-center border-b lg:border-r">
            <Image
              src="/assets/puzzle.png"
              quality={100}
              width={48}
              height={48}
            />
            <h3 className="mt-5">Extensively Extendable</h3>
          </div>
          <div className="h-[223.64px] flex flex-col items-center justify-center border-b lg:border-r">
            <Image
              src="/assets/gear.png"
              quality={100}
              width={83}
              height={48}
            />
            <h3 className="mt-5">Powerfully Customizable</h3>
          </div>
          <div className="h-[223.64px] flex flex-col items-center justify-center border-b lg:border-r">
            <Image
              src="/assets/react.png"
              quality={100}
              width={48}
              height={48}
            />
            <h3 className="mt-5">Geniusly Transformable</h3>
          </div>
          <div className="h-[223.64px] flex flex-col items-center justify-center border-b lg:border-r">
            <Image
              src="/assets/baloon.png"
              quality={100}
              width={48}
              height={48}
            />
            <h3 className="mt-5">Industrial Support</h3>
          </div>
        </div>
      </div>
      <div className="h-[179.8px] w-full bg-[#343A40] flex items-center justify-center text-white">
        <h2 className="lg:text-[30px] font-light mr-3">
          Like Our Services? Get an
        </h2>
        <button className="py-2 px-[26px] border border-white rounded-full hover:bg-white hover:text-[#343A40] transition-all duration-300">
          Instant Quote
        </button>
      </div>
    </section>
  );
};

export default Services;
