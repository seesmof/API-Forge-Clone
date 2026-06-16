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
            <Badge className="my-5">Architecture</Badge>
            <h1 className="font-bold text-2xl">
              API Versioning Best Practices for Long-Lived APIs
            </h1>
            <p className="my-4 text-stone-600">
              Strategies for evolving your API without breaking existing
              integrations, from URL versioning to content negotiation.
            </p>
            <div className="flex gap-4">
              <Image
                src="/Jordan.jfif"
                width={40}
                height={40}
                alt="An image of the author of the post."
                className="rounded-full"
              />
              <div className="flex flex-col text-sm">
                <p className="font-bold">Jordan Lee</p>
                <div className="flex gap-1 text-stone-600">
                  <p>Feb 5, 2026</p>
                  <p>·</p>
                  <p>6 min read</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="bg-stone-100 h-px w-full my-8"></div>
          </article>

          <Image
            src="/glasses.jfif"
            width={800}
            height={600}
            alt="An image of the screen with glasses in front of it."
            className="rounded-xl"
          />

          <article className="flex flex-col gap-6 mt-12">
            <p>
              API versioning is inevitable. No matter how well you design your
              initial API, business requirements change, better patterns emerge,
              and breaking changes become necessary. The question is not whether
              to version, but how to do it without creating a maintenance
              nightmare.
            </p>
            <h2 className="font-bold text-2xl mt-4">
              The Four Versioning Strategies
            </h2>
            <p>
              <strong>URL Path Versioning</strong> (<code>/v1/users</code>,
              <code>/v2/users</code>) is the most common and most visible
              approach. It is easy to understand, easy to route, and makes
              version selection explicit in every request. The downside is that
              it creates a new URL namespace for every version.
            </p>
            <p>
              <strong>Query Parameter Versioning</strong> (
              <code>/users?version=2</code>) keeps URLs clean but makes version
              selection less obvious. It works well when versions differ in
              response format rather than resource structure.
            </p>
            <p>
              <strong>Header Versioning</strong> (
              <code>Accept: application/vnd.api+json;version=2</code>) is the
              most RESTful approach but the least developer-friendly. It is
              invisible in browser URL bars and harder to test casually.
            </p>
            <p>
              <strong>Content Negotiation</strong> uses the <code>Accept</code>{" "}
              header with custom media types. It is elegant but complex, and
              most developers find it harder to work with than URL versioning.
            </p>
            <h2 className="font-bold text-2xl mt-4">Our Recommendation</h2>
            <p>
              For most APIs, URL path versioning strikes the best balance
              between clarity and practicality. Couple it with a strict
              deprecation policy:
            </p>
            <ol className="list-decimal list-inside ml-1 flex flex-col gap-3">
              <li>Announce deprecation at least 6 months before removal</li>
              <li>
                Add Sunset and Deprecation headers to responses from deprecated
                versions
              </li>
              <li>Provide automated migration guides and tooling</li>
              <li>
                Monitor traffic to deprecated versions and proactively reach out
                to remaining consumers
              </li>
            </ol>
            <p>
              The goal is not to avoid versioning — it is to make version
              transitions painless for your consumers. Invest in migration
              tooling and clear communication, and your developers will thank
              you.
            </p>

            {/* Separator */}
            <div className="bg-slate-100 h-px w-full my-8"></div>
          </article>

          <ShareSection />
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="px-4 py-20">
          <h2 className="font-bold text-2xl">Related Articles</h2>

          <div className="rounded-xl mt-6 overflow-clip shadow-md duration-300 hover:shadow-xl group bg-white">
            <Link href="/blog/rest-vs-graphql-2026/">
              <div className="h-60 overflow-clip">
                <Image
                  src="/laptop.jfif"
                  width={800}
                  height={500}
                  alt="An image of glasses."
                  className="group-hover:scale-105 duration-300"
                />
              </div>

              <div className="p-5 flex flex-col">
                <div className="bg-orange-50 text-orange-700 font-semibold px-2 py-0.5 w-fit text-sm">
                  Architecture
                </div>
                <h2 className="font-bold my-3 group-hover:text-orange-600 duration-300">
                  REST vs GraphQL in 2026: Which Should You Choose?{" "}
                </h2>
                <p className="text-sm text-stone-500">Feb 20, 2026</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
