"use client";

import { Link } from "react-scroll";
import { fadeIn } from "@/app/variants";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <section id="home" className="h-[80vh] bg-[#f9f9f9] ">
      <div className="relative h-full">
        <div className="container">
          <div className="py-20 lg:ml-28">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <h5 className="font-roboto tracking-widest text-gray-400 mb-2">
                DEVELOPER
              </h5>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="text-6xl font-bold text-[#084678] mb-8">
                We Deliver Best Website <br /> For You.
              </h1>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <p className="text-xl font-roboto text-gray-500 font-thin">
                Monotonectally pursue intuitive catalysts for change for
                extensible <br /> materials.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mt-16"
            >
              <Link to="about" smooth={true} spy={true}>
                <button className="flex items-center gap-2 bg-[#084678] text-white font-roboto p-3 text-center justify-center font-bold rounded-full w-[170px]">
                  Get Starded <BsArrowRight />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-[300px] px-16 py-20 bg-white rounded-3xl shadow-2xl">
          <div className="lg:flex gap-24">
            <div className="border-b lg:border-none">
              <h5 className="font-roboto tracking-widest text-gray-400 mb-6">
                PURPOSE
              </h5>
              <h1 className="text-6xl font-bold text-[#084678] mb-8">
                Business
              </h1>
              <p className="font-roboto text-gray-500 font-thin leading-8 mb-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum sunt, iure voluptatem repellat ab veniam facere iusto
                quae quia delectus!
              </p>
              <Link to="about" smooth={true} spy={true}>
                <button className="mb-20 lg:mb-0 flex items-center gap-2 bg-[#084678] text-white font-roboto p-3 text-center justify-center font-bold rounded-full w-[150px]">
                  Get Starded
                </button>
              </Link>
            </div>
            <div>
              <h5 className="mt-20 lg:mt-0 font-roboto tracking-widest text-gray-400 mb-6">
                PURPOSE
              </h5>
              <h1 className="text-6xl font-bold mb-8">Personal</h1>
              <p className="font-roboto text-gray-500 font-thin leading-8 mb-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum sunt, iure voluptatem repellat ab veniam facere iusto
                quae quia delectus!
              </p>
              <Link to="about" smooth={true} spy={true}>
                <button className="flex items-center gap-2 bg-black text-white font-roboto p-3 text-center justify-center font-bold rounded-full w-[150px]">
                  Get Starded
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
