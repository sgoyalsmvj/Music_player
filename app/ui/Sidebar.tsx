"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
interface SidebarProps {
  // Define props here
}
const links = [
  { name: "Discover", to: "/discover", icon: HiOutlineHome },
  { name: "Around You", to: "/aroundyou", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/topartists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/topcharts", icon: HiOutlineHashtag },
];

const NavLinks = () => (
  <div className="mt-10">
    {links.map((item) => (
      <Link
        key={item.name}
        href={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </Link>
    ))}
  </div>
);

const Sidebar: React.FC<SidebarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] h-screen">
        <div className="flex items-center justify-center">
          <Image
            src="logo.svg"
            alt="logo"
            className="w-full h-14 object-contain"
            width={200}
            height={200}
            priority={true}
          />
        </div>
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex items-center justify-center">
          <Image
            src="logo.svg"
            alt="logo"
            className="w-full h-14 object-contain"
            width={200}
            height={200}
            priority={true}
          />
        </div>
        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;
