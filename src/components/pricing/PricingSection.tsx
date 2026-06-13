import Link from "next/link";
import FAQSection from "../index/FAQSection";
import { Check, X } from "@deemlol/next-icons";
import Badge from "../small/Badge";

export default function PricingSection() {
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl flex flex-col">
        <article className="text-center flex flex-col">
          <Badge className="self-center">Pricing</Badge>
          <h2 className="font-bold text-3xl my-4">Plans for Every Stage</h2>
          <p>
            Start with our generous free tier and scale seamlessly as your API
            traffic grows.
          </p>
        </article>
        <article className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="bg-stone-100 rounded-md hover:shadow-xl shadow-md duration-150 flex-1">
            <div className="p-6">
              <div className="text-center">
                <h3 className="font-bold text-lg">Free</h3>
                <p className="text-sm mt-1">
                  For side projects and prototyping
                </p>

                <p className="font-bold text-5xl mt-4">$0</p>
                <span className="text-sm mt-1">1K requests/day</span>
              </div>
              <ul className="flex flex-col gap-2 my-6">
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>1,000 API requests/day</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>100 req/min rate limit</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>API Gateway & routing</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>API key authentication</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Basic analytics dashboard</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Community support (Discord)</p>
                </li>
                <li className="flex flex-row gap-2">
                  <X className="text-stone-400" />
                  <p>Webhook management</p>
                </li>
                <li className="flex flex-row gap-2">
                  <X className="text-stone-400" />
                  <p>Custom domains</p>
                </li>
              </ul>
              <button className="rounded-md bg-stone-300/50 duration-150 hover:bg-stone-300 p-3 w-full font-semibold cursor-pointer">
                <Link href="/contact">Get Started Free</Link>
              </button>
            </div>
          </div>

          <div className="rounded-md outline-2 outline-orange-600 hover:shadow-xl shadow-md duration-150 flex-1">
            <div className="p-6 flex flex-col relative">
              <div className="bg-orange-600 rounded-full text-white w-fit px-2 py-0.5 text-sm -top-3 absolute self-center">
                Most Popular
              </div>

              <div className="text-center">
                <h3 className="font-bold text-lg">Growth</h3>
                <p className="text-sm mt-1">For startups and growing teams</p>

                <p className="font-bold text-5xl mt-4">$49</p>
                <span className="text-sm mt-1">per month</span>
              </div>
              <ul className="flex flex-col gap-2 my-6">
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>1M API requests/month</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>10K req/min rate limit</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>API Gateway & routing</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>OAuth 2.0 & JWT auth</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Advanced analytics & alerts</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Email support (24h response)</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Webhook management</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Custom domains</p>
                </li>
              </ul>
              <button className="rounded-md bg-orange-600 hover:bg-orange-700 duration-150 text-white font-semibold p-3 w-full cursor-pointer">
                <Link href="/contact">Start Growth Plan</Link>
              </button>
            </div>
          </div>

          <div className="bg-stone-100 rounded-md hover:shadow-xl shadow-md duration-150 flex-1">
            <div className="p-6">
              <div className="text-center">
                <h3 className="font-bold text-lg">Scale</h3>
                <p className="text-sm mt-1">
                  For enterprises and high-traffic APIs
                </p>

                <p className="font-bold text-5xl mt-4">$199</p>
                <span className="text-sm mt-1">per month</span>
              </div>
              <ul className="flex flex-col gap-2 my-6">
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Unlimited API requests</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Unlimited rate limits</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>API Gateway with edge caching</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>SSO, RBAC & audit logs</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Custom dashboards & SLA monitoring</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Dedicated Slack + 1h SLA</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Webhook management + DLQ</p>
                </li>
                <li className="flex flex-row gap-2">
                  <Check className="text-orange-600" />
                  <p>Multi-region deployment</p>
                </li>
              </ul>
              <button className="rounded-md bg-stone-300/50 duration-150 hover:bg-stone-300 p-3 w-full font-semibold cursor-pointer">
                <Link href="/contact">Contact Sales</Link>
              </button>
            </div>
          </div>
        </article>
        <p className="text-sm text-center text-stone-500 mt-6">
          All plans include the full platform. Pricing is based on monthly API
          calls. Volume discounts available for annual billing.
        </p>

        <FAQSection className="mt-32" />
      </div>
    </section>
  );
}
