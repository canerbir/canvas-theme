"use client";

import { useState, useEffect } from "react";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Scroll miktarını ihtiyacınıza göre ayarlayın
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`top-0 sticky z-50 transition-all duration-300 ${
        scrolling ? "bg-white" : "bg-[#f9f9f9]"
      }`}
    >
      <div className="border-b">
        <div className="w-full px-[30px]">
          <div className="flex flex-wrap items-center">
            {/* logo */}
            <div className="pr-[30px] relative flex items-center mr-auto max-h-full">
              <a className="py-5">
                <h1 className="text-3xl font-open">
                  canvas<i className="font-thin text-gray-600">one</i>
                </h1>
              </a>
            </div>
            {/* links */}
            <div className="mr-7 hidden lg:flex">
              <Nav />
            </div>
            {/* mobile nav */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
