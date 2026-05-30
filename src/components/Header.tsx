"use client";

import { Menu, X } from "@deemlol/next-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MenuItemClasses = "hover:text-stone-700 transition-all duration-150";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="top-0 sticky">
      <header className="bg-white/90 border-b border-stone-200">
        <div className="flex justify-between mx-auto px-4 py-2 items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={120}
              height={120}
              alt="A logo image of API Forge."
              className="h-8"
            />
          </Link>

          <div className="flex flex-row gap-3">
            <button className="bg-orange-600 text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-orange-700 duration-150 transition-all cursor-pointer">
              <Link href={"/pricing"}>Get API Key</Link>
            </button>
            <button
              className="hover:bg-stone-200 rounded-md p-1"
              onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="bg-white border-b border-stone-200">
          <div className="font-semibold flex-col flex p-3 gap-5">
            <Link className={MenuItemClasses} href={"/services"}>
              Products
            </Link>
            <Link className={MenuItemClasses} href={"/pricing"}>
              Pricing
            </Link>
            <Link className={MenuItemClasses} href={"/about"}>
              About
            </Link>
            <Link className={MenuItemClasses} href={"/blog"}>
              Blog
            </Link>
            <Link className={MenuItemClasses} href={"/contact"}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
