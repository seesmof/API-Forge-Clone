"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Badge from "../small/Badge";

const titles: string[] = ["Faster", "Smarter", "Together", "Securely"];

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  { title: "1M+", description: "Developers" },
  { title: "50B+", description: "API Calls/mo" },
  { title: "99.999%", description: "Uptime" },
  { title: "200+", description: "SDKs" },
];

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
        <Badge>
          <div className="flex flex-row items-center gap-2">
            <div className="rounded-full animate-pulse bg-orange-600 duration-150 p-1"></div>
            <p>Trusted by 1M+ developers worldwide</p>
          </div>
        </Badge>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-5">
          Ship Better APIs <br />
          <span className="text-orange-600">{title}</span>
        </h1>
        <p className="text-stone-700 mt-5">
          The complete API infrastructure platform. Build, deploy, and scale
          production-ready APIs with built-in gateway, authentication,
          analytics, and auto-generated SDKs.
        </p>

        {/* Call to Action Section */}
        <article className="flex flex-col sm:flex-row mt-12 gap-3">
          <button className="bg-orange-600 hover:bg-orange-700 transition-all duration-150 text-white px-6 py-3 rounded-md">
            <Link href="#startSection"> Get Free API Key</Link>
          </button>
          <button className="bg-transparent outline-2 outline-stone-300 rounded-md hover:bg-slate-50 cursor-pointer px-6 py-2">
            <Link href="#servicesSection">View Documentation</Link>
          </button>
        </article>
      </div>

      <div className="border-t border-stone-300 mx-4 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-between py-6 pr-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-orange-600 font-semibold text-2xl">
                {feature.title}
              </p>
              <p className="text-sm text-stone-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
