import Image from "next/image";
import Badge from "../small/Badge";

export default function MissionSection() {
  return (
    <section className="bg-white">
      <div className="px-4 py-20 mx-auto max-w-7xl flex flex-col gap-4">
        <Badge>Our Mission</Badge>
        <h1 className="text-3xl font-bold">APIs Should Just Work</h1>
        <p className="text-orange-700/80 italic font-semibold">
          “To give every developer the tools to build, ship, and scale APIs
          without fighting infrastructure — so they can focus on what matters:
          building great products.”
        </p>
        <p>
          APIForge was founded in 2022 by a team of engineers who were tired of
          stitching together API gateways, auth providers, rate limiters, and
          monitoring tools from five different vendors. We believed there had to
          be a better way — a single, developer-first platform that handles the
          entire API lifecycle.
        </p>
        <p>
          Today, APIForge powers over 50 billion API calls per month for more
          than a million developers worldwide. From startups shipping their
          first endpoint to enterprises managing thousands of microservices, our
          platform scales seamlessly to meet any demand.
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
  );
}
