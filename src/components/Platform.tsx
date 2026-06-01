import { ReactNode } from "react";
import Badge from "./Badge";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const iconColor = "#ea580c";

const Home = () => {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      ></path>
    </svg>
  );
};

const Reload = () => {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      ></path>
    </svg>
  );
};

const Company = () => {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      ></path>
    </svg>
  );
};

const Clipboard = () => {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      ></path>
    </svg>
  );
};

const Gallery = () => {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      ></path>
    </svg>
  );
};

const Sparkes = () => {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      ></path>
    </svg>
  );
};

const features: Feature[] = [
  {
    icon: <Home />,
    title: "API Gateway",
    description:
      "Route, transform, and secure API traffic with a high-performance gateway. Supports REST, GraphQL, and gRPC protocols out of the box.",
  },
  {
    icon: <Reload />,
    title: "Rate Limiting",
    description:
      "Protect your APIs with intelligent rate limiting. Set per-key, per-endpoint, and sliding window limits with real-time enforcement.",
  },
  {
    icon: <Company />,
    title: "Authentication",
    description:
      "API key management, OAuth 2.0, JWT validation, and RBAC built in. Secure every endpoint without writing auth code.",
  },
  {
    icon: <Clipboard />,
    title: "Analytics Dashboard",
    description:
      "Real-time metrics on latency, throughput, errors, and usage patterns. Custom dashboards with alerting and anomaly detection.",
  },
  {
    icon: <Gallery />,
    title: "Webhook Management",
    description:
      "Reliable webhook delivery with automatic retries, event filtering, and delivery logs. Never miss a critical event notification.",
  },
  {
    icon: <Sparkes />,
    title: "SDK Generation",
    description:
      "Auto-generate type-safe client SDKs in 20+ languages from your API spec. Keep clients in sync with every API change.",
  },
];

export default function PlatformSection() {
  return (
    <div className="bg-stone-50 border-t border-stone-300">
      <div className="px-4 py-12 flex flex-col">
        <Badge className="self-center">Platform</Badge>
        <article className="text-center">
          <h2 className="font-bold text-3xl mt-4 tracking-tight">
            Everything You Need to Ship APIs
          </h2>
          <p className="mt-3">
            A complete toolkit for building, deploying, and managing
            production-grade APIs at any scale.
          </p>
        </article>
        <article className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-md flex flex-col gap-3 p-5 shadow-md shadow-stone-200 group hover:shadow-lg"
            >
              <div className="p-3 rounded-md bg-orange-50 w-fit">
                {feature.icon}
              </div>
              <p className="font-bold text-lg mt-3">{feature.title}</p>
              <p>{feature.description}</p>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
