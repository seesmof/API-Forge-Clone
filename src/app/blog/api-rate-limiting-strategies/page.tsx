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
              API Rate Limiting Strategies That Actually Work
            </h1>
            <p className="my-4 text-stone-600">
              Learn proven rate limiting patterns that protect your APIs without
              frustrating legitimate users.
            </p>
            <div className="flex gap-4">
              <Image
                src="/Alex.jfif"
                width={40}
                height={40}
                alt="An image of the author of the post."
                className="rounded-full"
              />
              <div className="flex flex-col text-sm">
                <p className="font-bold">Alex Kim</p>
                <div className="flex gap-1 text-stone-600">
                  <p>Feb 15, 2026</p>
                  <p>·</p>
                  <p>6 min read</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="bg-stone-100 h-px w-full my-8"></div>
          </article>

          <Image
            src="/server.jfif"
            width={800}
            height={600}
            alt="An image of the screen with glasses in front of it."
            className="rounded-xl"
          />

          <article className="flex flex-col gap-6 mt-12">
            <p>
              Rate limiting is one of those things that seems simple until you
              try to do it well. A naive implementation will either let abuse
              through or block legitimate traffic. Here is how to build rate
              limiting that actually works in production.
            </p>
            <h2 className="font-bold text-2xl mt-4">The Three Layers</h2>
            <p>Effective rate limiting operates at three distinct layers:</p>
            <ol className="flex flex-col gap-3 list-decimal list-inside ml-1">
              <li>
                <strong>Global limits</strong> protect your infrastructure from
                total overload. These are high thresholds that should rarely be
                hit by any single consumer.
              </li>
              <li>
                <strong>Per-consumer limits</strong> (by API key or IP) prevent
                individual users from monopolizing resources. These are the
                limits you expose in your pricing tiers.
              </li>
              <li>
                <strong>Per-endpoint limits</strong> protect expensive
                operations. Your search endpoint might handle 100 req/min while
                your simple status check handles 1000 req/min.
              </li>
            </ol>
            <h2 className="font-bold text-2xl mt-4">
              Sliding Window vs Fixed Window
            </h2>
            <p>
              Fixed window counters are simple but create burst problems at
              window boundaries. A user could send 100 requests at 11:59 and
              another 100 at 12:00, effectively doubling their rate.
            </p>
            <p>
              Sliding window algorithms solve this by tracking requests across a
              rolling time period. The sliding window log approach is the most
              accurate but requires more memory. The sliding window counter is a
              good compromise — it interpolates between the current and previous
              windows to approximate a true sliding window with minimal
              overhead.
            </p>
            <h2 className="font-bold text-2xl mt-4">
              Communicating Limits to Clients
            </h2>
            <p>Always include rate limit headers in your responses:</p>
            <ul className="flex flex-col list-disc list-inside ml-1 gap-3">
              <li>
                <code>X-RateLimit-Limit</code>: Maximum requests allowed
              </li>
              <li>
                <code>X-RateLimit-Remaining</code>: Requests left in current
                window
              </li>
              <li>
                <code>X-RateLimit-Reset</code>: Unix timestamp when the window
                resets
              </li>
              <li>
                <code>Retry-After</code>: Seconds to wait before retrying (on
                429 responses)
              </li>
            </ul>
            <p>
              Good documentation and clear error messages turn rate limiting
              from a frustration into a feature. When developers understand and
              can predict your limits, they build better integrations.
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
                  src="/stats.jfif"
                  width={800}
                  height={500}
                  alt="An image of glasses."
                  className="group-hover:scale-105 duration-300"
                />
              </div>

              <div className="p-5 flex flex-col">
                <div className="bg-orange-50 text-orange-700 font-semibold px-2 py-0.5 w-fit text-sm">
                  Engineering
                </div>
                <h2 className="font-bold my-3 group-hover:text-orange-600 duration-300">
                  Webhook Reliability Patterns for Production Systems{" "}
                </h2>
                <p className="text-sm text-stone-500">Jan 28, 2026</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
