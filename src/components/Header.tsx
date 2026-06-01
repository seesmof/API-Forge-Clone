"use client";

import { Menu, X } from "@deemlol/next-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Link {
  title: string;
  href: string;
}

const linksData: Link[] = [
  { href: "/services", title: "Products" },
  { href: "/pricing", title: "Pricing" },
  { href: "/about", title: "About" },
  { href: "/blog", title: "Blog" },
  { href: "/contact", title: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="top-0 sticky z-50">
      <header className="bg-white/90 border-b border-stone-200">
        <div className="flex justify-between mx-auto px-4 py-2 items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={120}
              height={120}
              alt="A logo image of API Forge."
            />
          </Link>

          <div className="flex flex-row gap-3">
            <button className="bg-orange-600 text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-orange-700 duration-150 transition-all cursor-pointer">
              <Link href={"/pricing"}>Get API Key</Link>
            </button>
            <button
              className="hover:bg-stone-200 rounded-md p-1 cursor-pointer"
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
            {linksData.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-stone-700 transition-all duration-150"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
