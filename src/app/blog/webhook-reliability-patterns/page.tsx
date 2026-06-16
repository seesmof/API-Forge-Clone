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
              Webhook Reliability Patterns for Production Systems
            </h1>
            <p className="my-4 text-stone-600">
              How to build webhook delivery systems that never lose events, from
              retry strategies to dead letter queues.
            </p>
            <div className="flex gap-4 mt-4">
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
                  <p>Jan 28, 2026</p>
                  <p>·</p>
                  <p>7 min read</p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="bg-stone-100 h-px w-full my-8"></div>
          </article>

          <Image
            src="/stats.jfif"
            width={800}
            height={600}
            alt="An image of the screen with glasses in front of it."
            className="rounded-xl"
          />

          <article className="flex flex-col gap-6 mt-12">
            <p>
              Webhooks are deceptively simple in concept — send an HTTP POST
              when something happens — but building a reliable webhook delivery
              system is one of the hardest distributed systems problems you will
              encounter. Here are the patterns that separate production-grade
              webhook systems from toys.
            </p>
            <h2 className="font-bold text-2xl mt-4">The Retry Strategy</h2>
            <p>
              Never use fixed-interval retries. They create thundering herd
              problems when a consumer’s server comes back online and every
              queued webhook fires simultaneously. Instead, use exponential
              backoff with jitter:
            </p>
            <ul className="flex flex-col gap-3 list-disc list-inside ml-1">
              <li>
                <strong>Attempt 1</strong>: Immediate
              </li>
              <li>
                <strong>Attempt 2</strong>: 1 minute + random jitter (0-30s)
              </li>
              <li>
                <strong>Attempt 3</strong>: 5 minutes + random jitter
              </li>
              <li>
                <strong>Attempt 4</strong>: 30 minutes + random jitter
              </li>
              <li>
                <strong>Attempt 5</strong>: 2 hours + random jitter
              </li>
              <li>
                <strong>Attempt 6</strong>: 12 hours + random jitter
              </li>
            </ul>
            <p>
              The jitter is critical — it prevents retry storms where thousands
              of failed webhooks all retry at the exact same moment.
            </p>
            <h2 className="font-bold text-2xl mt-4">Idempotency Keys</h2>
            <p>
              Every webhook event should include a unique idempotency key.
              Consumers will inevitably receive duplicate deliveries due to
              network issues, timeouts, or retry logic. The idempotency key lets
              them safely deduplicate on their end.
            </p>
            <p>
              Include this key in both the payload and a header (
              <code>X-Webhook-Id</code>), and document clearly that consumers
              should use it for deduplication.
            </p>
            <h2 className="font-bold text-2xl mt-4">Dead Letter Queues</h2>
            <p>
              After exhausting all retry attempts, failed webhooks should go to
              a dead letter queue rather than being silently dropped. The DLQ
              serves two purposes:
            </p>
            <ol className="list-decimal list-inside ml-1 flex flex-col gap-3">
              <li>
                It gives consumers a way to manually inspect and replay failed
                events
              </li>
              <li>
                It gives you visibility into systematic delivery failures that
                might indicate a consumer-side issue
              </li>
            </ol>
            <p>
              A good webhook management dashboard — like what APIForge provides
              — lets consumers browse their DLQ, inspect payloads, and trigger
              manual redelivery with a single click.
            </p>
            <h2 className="font-bold text-2xl mt-4">Signature Verification</h2>
            <p>
              Always sign your webhook payloads with HMAC-SHA256 using a
              per-consumer secret. Include the signature in a header (
              <code>X-Webhook-Signature</code>) so consumers can verify that the
              payload was not tampered with in transit. This is not optional —
              without signature verification, webhooks are a security
              vulnerability.
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
            <Link href="/blog/api-rate-limiting-strategies/">
              <div className="h-60 overflow-clip">
                <Image
                  src="/server.jfif"
                  width={800}
                  height={500}
                  alt="An image of a server racks."
                  className="group-hover:scale-105 duration-300"
                />
              </div>

              <div className="p-5 flex flex-col">
                <div className="bg-orange-50 text-orange-700 font-semibold px-2 py-0.5 w-fit text-sm">
                  Engineering
                </div>
                <h2 className="font-bold my-3 group-hover:text-orange-600 duration-300">
                  API Rate Limiting Strategies That Actually Work{" "}
                </h2>
                <p className="text-sm text-stone-500">Feb 15, 2026</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
