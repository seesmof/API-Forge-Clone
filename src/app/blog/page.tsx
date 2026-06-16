"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Article {
  imageName: string;
  category: "Architecture" | "Enginerring" | "Developer Experience";
  publishingDate: string;
  title: string;
  description: string;
  profilePictureName: string;
  authorName: string;
  readingTime: number;
  href?: string;
}

const articles: Article[] = [
  {
    imageName: "laptop",
    category: "Architecture",
    publishingDate: "Feb 20, 2026",
    title: "REST vs GraphQL in 2026: Which Should You Choose?",
    description:
      "A practical comparison of REST and GraphQL for modern API development, with guidance on when to use each approach.",
    profilePictureName: "Maya",
    authorName: "Maya Rodriguez",
    readingTime: 7,
    href: "rest-vs-graphql-2026",
  },
  {
    imageName: "server",
    category: "Enginerring",
    publishingDate: "Feb 15, 2026",
    title: "API Rate Limiting Strategies That Actually Work",
    description:
      "Learn proven rate limiting patterns that protect your APIs without frustrating legitimate users.",
    profilePictureName: "Alex",
    authorName: "Alex Kim",
    readingTime: 6,
  },
  {
    imageName: "gray",
    category: "Developer Experience",
    publishingDate: "Feb 10, 2026",
    title: "Building Developer Portals That Developers Actually Use",
    description:
      "The essential ingredients of a developer portal that drives adoption and reduces support burden.",
    profilePictureName: "Priya",
    authorName: "Priya Sharma",
    readingTime: 8,
  },
  {
    imageName: "glasses",
    category: "Architecture",
    publishingDate: "Feb 5, 2026",
    title: "API Versioning Best Practices for Long-Lived APIs",
    description:
      "Strategies for evolving your API without breaking existing integrations, from URL versioning to content negotiation.",
    profilePictureName: "Jordan",
    authorName: "Jordan Lee",
    readingTime: 6,
    href: "api-versioning-best-practices",
  },
  {
    imageName: "stats",
    category: "Enginerring",
    publishingDate: "Feb 28, 2026",
    title: "Webhook Reliability Patterns for Production Systems",
    description:
      "How to build webhook delivery systems that never lose events, from retry strategies to dead letter queues.",
    profilePictureName: "Alex",
    authorName: "Alex Kim",
    readingTime: 7,
  },
];

const ArticleComponent = ({ article }: { article: Article }) => {
  return (
    <div className="rounded-xl overflow-clip shadow-md duration-300 hover:shadow-xl group">
      <Link href={`/blog/${article.href}/`}>
        <div className="h-60 overflow-clip">
          <Image
            src={`/${article.imageName}.jfif`}
            width={800}
            height={500}
            alt={`An image of ${article.imageName}.`}
            className="group-hover:scale-105 duration-300"
          />
        </div>

        <div className="p-6 flex flex-col">
          <div className="flex gap-3 text-sm items-center">
            <div className="bg-orange-50 text-orange-700 font-semibold px-2 py-0.5">
              {article.category}
            </div>
            <p className="text-stone-600">{article.publishingDate}</p>
          </div>
          <h2 className="font-bold text-lg my-3 group-hover:text-orange-600 duration-300">
            {article.title}
          </h2>
          <p className="text-sm">{article.description}</p>
          <div className="flex gap-3 mt-4 items-center">
            <Image
              src={`/${article.profilePictureName}.jfif`}
              alt="An image of the author of the blog post."
              width={30}
              height={30}
              className="rounded-full w-10"
            />
            <div className="flex flex-col text-sm">
              <h5 className="font-bold">{article.authorName}</h5>
              <p className="text-stone-600/80">
                {article.readingTime} min read
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

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

          <div className="grid grid-cols-1 gap-8 mt-10">
            {activeTab === 0 ? (
              articles.map((article, index) => (
                <ArticleComponent key={index} article={article} />
              ))
            ) : activeTab === 1 ? (
              articles
                .filter((article) => article.category === "Architecture")
                .map((article, index) => (
                  <ArticleComponent key={index} article={article} />
                ))
            ) : activeTab === 2 ? (
              articles
                .filter((article) => article.category === "Enginerring")
                .map((article, index) => (
                  <ArticleComponent key={index} article={article} />
                ))
            ) : activeTab === 3 ? (
              articles
                .filter(
                  (article) => article.category === "Developer Experience",
                )
                .map((article, index) => (
                  <ArticleComponent key={index} article={article} />
                ))
            ) : (
              <></>
            )}
          </div>

          <div className="rounded-xl bg-stone-900 text-white mt-24">
            <div className="px-8 py-18 flex flex-col gap-5 text-center">
              <div className="bg-orange-900/50 text-orange-400 px-3 py-1 rounded-full font-semibold text-sm w-fit self-center">
                Newsletter
              </div>
              <h3 className="font-bold text-3xl">Stay in the Loop</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest articles, tips, and
                updates delivered straight to your inbox.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  name="emailInput"
                  id="emailInput"
                  placeholder="Enter your email"
                  className="rounded-full bg-gray-800 outline-gray-700 outline-1 placeholder:text-gray-500 w-full px-4 py-3"
                />
                <button
                  type="submit"
                  className="bg-orange-600 font-bold w-full rounded-full p-3 cursor-pointer duration-150 hover:bg-orange-600/70"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
