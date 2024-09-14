"use client";

import { CiMenuBurger } from "react-icons/ci";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Link } from "react-scroll";

const links = [
  {
    name: "home",
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

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="font-light uppercase text-xs tracking-[3px] flex flex-col z-50">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              spy={true}
              activeClass="active"
              className="hover:text-[#1abc9c] transition-all cursor-pointer border-b p-4 font-open"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
