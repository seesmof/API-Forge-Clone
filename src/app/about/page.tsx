import Badge from "@/components/small/Badge";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-bl from-orange-600 to-orange-700">
        <div className="px-4 py-12 mx-auto max-w-7xl text-center text-white">
          <h2 className="font-bold text-3xl">About APIForge</h2>
          <p className="py-4">
            Founded in 2022, we are building the developer-first API
            infrastructure platform that engineering teams deserve.
          </p>
          <p className="text-sm mt-4">
            <Link
              className="text-white/50 hover:text-white duration-150"
              href="/"
            >
              Home
            </Link>{" "}
            / About
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl flex flex-col gap-4">
          <Badge>Our Mission</Badge>
          <h1 className="text-3xl font-bold">APIs Should Just Work</h1>
          <p className="text-orange-700/80 italic font-semibold">
            “To give every developer the tools to build, ship, and scale APIs
            without fighting infrastructure — so they can focus on what matters:
            building great products.”
          </p>
          <p>
            APIForge was founded in 2022 by a team of engineers who were tired
            of stitching together API gateways, auth providers, rate limiters,
            and monitoring tools from five different vendors. We believed there
            had to be a better way — a single, developer-first platform that
            handles the entire API lifecycle.
          </p>
          <p>
            Today, APIForge powers over 50 billion API calls per month for more
            than a million developers worldwide. From startups shipping their
            first endpoint to enterprises managing thousands of microservices,
            our platform scales seamlessly to meet any demand.
          </p>
          <Image
            src="/mission.jfif"
            width={800}
            height={600}
            alt="An image of a workplace with people working on their laptops."
            className="rounded-2xl mt-6"
          />
        </div>
      </section>
    </>
  );
}
