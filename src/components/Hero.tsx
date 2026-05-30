"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const titles: string[] = ["Faster", "Smarter", "Together", "Securely"];

export default function HeroSection() {
  const [index, setIndex] = useState<number>(0);
  const [title, setTitle] = useState<string>(titles[index]);

  useEffect(() => {
    const counter = setTimeout(() => {
      const nextIndex = index < titles.length - 1 ? index + 1 : 0;
      setIndex(nextIndex);
      setTitle(titles[nextIndex]);
      console.log(nextIndex);
    }, 3000);

    return () => clearTimeout(counter);
  }, [index]);

  return (
    <div className="bg-radial from-orange-50">
      <div className="flex flex-col px-4 py-24">
        {/* Badge */}
        <div className="outline outline-orange-200 bg-orange-50 rounded-full flex flex-row items-center px-4 py-1 gap-2">
          <div className="rounded-full animate-pulse bg-orange-600 duration-150 p-1"></div>
          <p className="text-sm font-semibold text-orange-700">
            Trusted by 1M+ developers worldwide
          </p>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mt-5">
          Ship Better APIs <br />
          <span className="text-orange-600">{title}</span>
        </h1>
        <p className="text-stone-700 mt-5">
          The complete API infrastructure platform. Build, deploy, and scale
          production-ready APIs with built-in gateway, authentication,
          analytics, and auto-generated SDKs.
        </p>
        <div className="flex flex-row mt-12 gap-3">
          <button className="bg-orange-600 hover:bg-orange-700 transition-all duration-150 text-white px-6 py-3 rounded-md">
            <Link href={"#contact"}> Get Free API Key</Link>
          </button>
          <button className="bg-transparent outline-2 outline-stone-300 rounded-md hover:bg-slate-50 cursor-pointer px-6 py-2">
            <Link href={"#services"}>View Documentation</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
