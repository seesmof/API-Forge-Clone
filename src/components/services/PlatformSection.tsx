import { ReactNode } from "react";

const GatewayIcon = () => {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      ></path>
    </svg>
  );
};

const AuthenticationIcon = () => {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      ></path>
    </svg>
  );
};

const ThrottlingIcon = () => {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"
      ></path>
    </svg>
  );
};

const AnalyticsIcon = () => {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
      ></path>
    </svg>
  );
};

const WebhookIcon = () => {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      ></path>
    </svg>
  );
};

const SDKIcon = () => {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      ></path>
    </svg>
  );
};

interface FeatureProps {
  icon: ReactNode;
  heading: string;
  paragraph: string;
  pros: string[];
}

const features: FeatureProps[] = [
  {
    icon: <GatewayIcon />,
    heading: "API Gateway",
    paragraph:
      "High-performance routing, load balancing, and protocol translation for REST, GraphQL, and gRPC.",
    pros: [
      "Smart traffic routing & load balancing",
      "Request/response transformation",
      "Protocol translation (REST/GraphQL/gRPC)",
    ],
  },
  {
    icon: <AuthenticationIcon />,
    heading: "Authentication & Authorization",
    paragraph:
      "Enterprise-grade security with API keys, OAuth 2.0, JWT, and role-based access control.",
    pros: [
      "API key lifecycle management",
      "OAuth 2.0 & JWT validation",
      "Role-based access control (RBAC)",
    ],
  },
  {
    icon: <ThrottlingIcon />,
    heading: "Rate Limiting & Throttling",
    paragraph:
      "Protect your APIs with configurable rate limits, quotas, and intelligent throttling policies.",
    pros: [
      "Per-key & per-endpoint limits",
      "Sliding window algorithms",
      "Burst protection & queuing",
    ],
  },
  {
    icon: <AnalyticsIcon />,
    heading: "Analytics & Monitoring",
    paragraph:
      "Real-time dashboards with latency, throughput, error rates, and custom metric tracking.",
    pros: [
      "Real-time latency & throughput",
      "Custom metric dashboards",
      "Anomaly detection & alerting",
    ],
  },
  {
    icon: <WebhookIcon />,
    heading: "Webhook Management",
    paragraph:
      "Reliable event delivery with automatic retries, exponential backoff, and detailed delivery logs.",
    pros: [
      "Automatic retry with backoff",
      "Event filtering & routing",
      "Delivery logs & debugging",
    ],
  },
  {
    icon: <SDKIcon />,
    heading: "SDK Generation",
    paragraph:
      "Auto-generate type-safe client libraries in 20+ languages directly from your OpenAPI spec.",
    pros: [
      "20+ language targets",
      "Type-safe client generation",
      "Automatic versioning & publishing",
    ],
  },
];

const Feature = ({ icon, heading, paragraph, pros }: FeatureProps) => {
  return (
    <div className="rounded-md outline outline-stone-200 p-6">
      <div className="h-12 w-12 rounded-md bg-orange-100/70 text-orange-600 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-xl mt-3">{heading}</h3>
      <p className="my-2">{paragraph}</p>
      <ul className="list-inside list-disc ml-1 text-[0.9rem]">
        {pros.map((pro, index) => (
          <li key={index}>{pro}</li>
        ))}
      </ul>
    </div>
  );
};

export default function PlatformSection() {
  return (
    <section className="bg-white">
      <div className="py-16 px-4 mx-auto max-w-7xl">
        <article className="text-center">
          <h2 className="font-bold text-3xl">The API Platform</h2>
          <p className="mt-4">
            Six powerful products that work together seamlessly to handle every
            aspect of your API infrastructure.
          </p>
        </article>
        <article className="flex flex-col gap-5 mt-12">
          {features.map((feature, index) => (
            <Feature {...feature} key={index} />
          ))}
        </article>
      </div>
    </section>
  );
}
