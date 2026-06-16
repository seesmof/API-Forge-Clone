import NavigationSection from "@/components/blog/NavigationSection";
import ShareSection from "@/components/blog/ShareSection";
import Badge from "@/components/small/Badge";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="bg-white">
        <div className="px-4 py-6 flex flex-col mx-auto max-w-7xl">
          <NavigationSection />

          <article className="flex flex-col">
            <Badge className="my-5">Developer Experience</Badge>
            <h1 className="font-bold text-2xl">
              Building Developer Portals That Developers Actually Use
            </h1>
            <p className="my-4 text-stone-600">
              The essential ingredients of a developer portal that drives
              adoption and reduces support burden.
            </p>
            <div className="flex gap-4 mt-4">
              <Image
                src="/Priya.jfif"
                width={40}
                height={40}
                alt="An image of the author of the post."
                className="rounded-full"
              />
              <div className="flex flex-col text-sm">
                <p className="font-bold">Priya Sharma</p>
                <div className="flex gap-1 text-stone-600">
                  <p>Feb 10, 2026</p>
                  <p>·</p>
                  <p>8 min read</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="bg-stone-100 h-px w-full my-8"></div>
          </article>

          <Image
            src="/gray.jfif"
            width={800}
            height={600}
            alt="An image of the screen with glasses in front of it."
            className="rounded-xl"
          />

          <article className="flex flex-col gap-6 mt-12">
            <p>
              A developer portal is often the first touchpoint between your API
              and the engineers who will integrate it. Get it right, and you
              reduce support tickets by 80%. Get it wrong, and developers will
              find an alternative before they even read your docs.
            </p>
            <h2 className="font-bold text-2xl mt-4">The Non-Negotiables</h2>
            <p>Every effective developer portal needs these five elements:</p>
            <ol className="flex flex-col gap-3 list-decimal list-inside ml-1">
              <li>
                <strong>Time to first API call under 5 minutes</strong>. This is
                the single most important metric. If a developer cannot make a
                successful API call within 5 minutes of landing on your portal,
                you are losing them.
              </li>
              <li>
                <strong>Interactive API explorer</strong>. Let developers make
                real API calls directly from the documentation. Seeing actual
                responses builds confidence faster than any amount of written
                documentation.
              </li>
              <li>
                <strong>
                  Copy-paste code examples in every major language
                </strong>
                . Developers do not want to translate curl commands into their
                language of choice. Provide ready-to-run examples in Python,
                JavaScript, Go, Java, Ruby, and PHP at minimum.
              </li>
              <li>
                <strong>Clear error documentation</strong>. Every error code
                should have its own page explaining what went wrong, why it
                happened, and exactly how to fix it. Include the most common
                causes and solutions.
              </li>
              <li>
                <strong>Changelog and migration guides</strong>. Developers need
                to know what changed, when, and what they need to do about it. A
                well-maintained changelog builds trust and reduces
                breaking-change anxiety.
              </li>
            </ol>
            <h2 className="font-bold text-2xl mt-4">Beyond the Basics</h2>
            <p>
              The best developer portals also include interactive tutorials that
              walk developers through common use cases step by step, community
              forums where developers help each other, and status pages that
              show real-time API health. These elements create a self-service
              ecosystem that scales with your user base.
            </p>
            <p>
              Remember: your developer portal is a product, not a document.
              Treat it with the same care and iteration you give your API
              itself.
            </p>

            {/* Separator */}
            <div className="bg-slate-100 h-px w-full my-8"></div>
          </article>

          <ShareSection />
        </div>
      </section>
    </>
  );
}
