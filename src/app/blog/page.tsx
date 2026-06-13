"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [search, setSearch] = useState<string>("");
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <section className="bg-linear-to-bl from-orange-600 to-orange-700">
        <div className="px-4 py-16 flex flex-col text-center text-white mx-auto max-w-7xl">
          <div className="rounded-full bg-white/20 w-fit self-center py-1 px-3">
            Our Blog
          </div>
          <h1 className="py-4 text-3xl font-bold">Insights & Updates</h1>
          <p>
            Stay up to date with the latest tips, trends, and insights from our
            team.
          </p>
          <div className="text-sm mt-8">
            <Link
              className="text-white/70 hover:text-white duration-150"
              href="/"
            >
              Home
            </Link>{" "}
            / About
          </div>
        </div>
      </section>

      <section>
        <div className="px-4 py-16 flex flex-col max-w-7xl mx-auto">
          <input
            type="text"
            name="searchBox"
            id="searchBox"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="shadow rounded-full px-4 py-2"
          />

          <div className="flex gap-1 flex-wrap items-center justify-center mt-6">
            <button
              className={`rounded-full duration-150 px-4 py-2 text-sm ${activeTab === 0 ? "bg-orange-600 text-white" : "bg-stone-100"}`}
              onClick={() => setActiveTab(0)}
            >
              All
            </button>
            <button
              className={`rounded-full duration-150 px-4 py-2 text-sm ${activeTab === 1 ? "bg-orange-600 text-white" : "bg-stone-100"}`}
              onClick={() => setActiveTab(1)}
            >
              Architecture
            </button>
            <button
              className={`rounded-full duration-150 px-4 py-2 text-sm ${activeTab === 2 ? "bg-orange-600 text-white" : "bg-stone-100"}`}
              onClick={() => setActiveTab(2)}
            >
              Engineering
            </button>
            <button
              className={`rounded-full duration-150 px-4 py-2 text-sm ${activeTab === 3 ? "bg-orange-600 text-white" : "bg-stone-100"}`}
              onClick={() => setActiveTab(3)}
            >
              Developer Experience
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
