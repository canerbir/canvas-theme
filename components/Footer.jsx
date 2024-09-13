"use client";

import { Link } from "react-scroll";
import { FaFacebookF, FaGithub, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    name: "top",
    id: "home",
  },
  {
    name: "about",
    id: "about",
  },
  {
    name: "works",
    id: "works",
  },
  {
    name: "services",
    id: "services",
  },
  {
    name: "blog",
    id: "blog",
  },
  {
    name: "contact",
    id: "contact",
  },
];

const Footer = () => {
  return (
    <footer id="footer">
      <div className="bg-[#343A40] w-full">
        <div className="mx-auto text-[#f8f9fa] py-[50px] lg:flex justify-center gap-40">
          <div className="flex flex-col text-center my-[30px]">
            <h4 className="text-xl mb-12 tracking-widest font-light">
              SITE LINKS
            </h4>
            <div className="flex flex-col capitalize gap-1 text-center">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  spy={true}
                  offset={-77}
                  className="hover:text-white text-[#ffffffbf] text-[17px] transition-all cursor-pointer font-roboto font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-center items-center my-[30px]">
            <h4 className="text-xl mb-12 tracking-widest font-light">
              SUBSCRIBE
            </h4>
            <form className="mb-6">
              <input
                type="text"
                placeholder="Your Email Adress"
                className="w-[408px] h-[38px] text-center rounded-lg"
              />
            </form>
            <button className="py-2 px-6 font-light border border-white rounded-full hover:bg-white hover:text-[#343A40] transition-all duration-300">
              Subscribe Now
            </button>
          </div>
          <div className="flex flex-col text-center my-[30px]">
            <h4 className="text-xl mb-12 tracking-widest font-light">
              CONTACT
            </h4>
            <div className="mb-10">
              <span>795 Folsom Ave, Suite 600</span>
              <br />
              <span>San Francisco, CA 94107</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:bg-[#3b5998] hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaFacebookF />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:bg-black hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaXTwitter />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:bg-black hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaGithub />
                  </div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:bg-red-600 hover:text-white p-3 rounded-md"
              >
                <div>
                  <div>
                    <FaPinterestP />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2e33] w-full text-center">
        <div className="text-[#FFFFFF66] text-sm py-10">
          Copyrights Canvas 2020 | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
