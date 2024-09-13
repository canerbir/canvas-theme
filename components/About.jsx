"use client";

import { Link } from "react-scroll";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <section className=" mt-[1250px] lg:mt-[600px] block" id="about">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-[40px] font-roboto font-bold tracking-tight max-w-[700px] mx-auto mt-24">
          A digital web studio creating stunning & engaging online experiences
        </h1>
        <p className="mx-auto max-w-[800px] font-light font-roboto leading-8 text-xl text-gray-600">
          Ford Foundation reduce child mortality fight against oppression
          refugee disruption pursue these aspirations effect. Free-speech Nelson
          Mandela change liberal; challenges of our times sustainability
          institutions.
        </p>
        <Link
          className="flex items-center text-[#1ABC9C] gap-1 underline cursor-pointer mt-12 hover:text-black"
          style={{ textUnderlineOffset: "4px" }}
        >
          Learn more <FaChevronRight className="w-2" />
        </Link>
      </div>
      <div className="mt-40 flex  flex-col lg:flex-row items-start justify-center gap-x-6">
        <div className="mb-36 mx-auto lg:mx-0">
          <div className="relative w-[450px] lg:w-[310px] lg:mx-0 lg:mb-0 group">
            <Image
              width={500}
              height={500}
              quality={100}
              src="/assets/1.jpg"
              alt="1"
              className="transition-opacity duration-500 group-hover:opacity-25"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:bg-[#3b5998] hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <FaFacebookF className="hidden" />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:bg-black hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaXTwitter />
                  </div>
                  <div>
                    <FaXTwitter className="hidden" />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Github"
                className="hover:bg-black hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaGithub />
                  </div>
                  <div>
                    <FaGithub className="hidden" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="text-center pt-3">
            <h4 className="font-source pt-5">JOHN DOE</h4>
            <span className="mt-1 font-roboto text-[#999999] text-sm">CEO</span>
          </div>
        </div>

        <div className="mb-36 mx-auto lg:mx-0">
          <div className="relative w-[450px] lg:w-[310px] lg:mx-0 lg:mb-0 group">
            <Image
              width={500}
              height={500}
              quality={100}
              src="/assets/2.jpg"
              alt="2"
              className="transition-opacity duration-500 group-hover:opacity-25"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:bg-[#3b5998] hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <FaFacebookF className="hidden" />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:bg-black hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaXTwitter />
                  </div>
                  <div>
                    <FaXTwitter className="hidden" />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Github"
                className="hover:bg-black hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaGithub />
                  </div>
                  <div>
                    <FaGithub className="hidden" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="text-center pt-3">
            <h4 className="font-source pt-5">MARY JANE</h4>
            <span className="mt-1 font-roboto text-[#999999] text-sm">
              CO-FOUNDER
            </span>
          </div>
        </div>

        <div className="mb-36 mx-auto lg:mx-0">
          <div className="relative w-[450px] lg:w-[310px] lg:mx-0 lg:mb-0 group">
            <Image
              width={500}
              height={500}
              quality={100}
              src="/assets/3.jpg"
              alt="3"
              className="transition-opacity duration-500 group-hover:opacity-25"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:bg-[#3b5998] hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <FaFacebookF className="hidden" />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:bg-black hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaXTwitter />
                  </div>
                  <div>
                    <FaXTwitter className="hidden" />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Github"
                className="hover:bg-black hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaGithub />
                  </div>
                  <div>
                    <FaGithub className="hidden" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="text-center pt-3">
            <h4 className="font-source pt-5">JOSH CLARK</h4>
            <span className="mt-1 font-roboto text-[#999999] text-sm">
              SALES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
