"use client";

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

const Nav = () => {
  return (
    <nav className="space-x-12 font-light uppercase text-xs tracking-[3px]">
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.id}
          smooth={true}
          spy={true}
          offset={-77}
          activeClass="active"
          className="hover:text-[#1abc9c] transition-all cursor-pointer font-open"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
