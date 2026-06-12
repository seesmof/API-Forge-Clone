"use client";

import { useState } from "react";
import Badge from "../small/Badge";

interface Question {
  title: string;
  content: string;
}

const questions: Question[] = [
  {
    title: "How quickly can I get started with APIForge?",
    content:
      "You can sign up and make your first API call in under 5 minutes. Our quickstart guides cover all major languages and frameworks, and our auto-generated SDKs handle client setup automatically.",
  },
  {
    title: "What protocols does the API Gateway support?",
    content:
      "APIForge supports REST, GraphQL, gRPC, and WebSocket protocols. You can mix and match protocols across your API surface and the gateway handles routing, transformation, and load balancing for all of them.",
  },
  {
    title: "How does pricing scale with API volume?",
    content:
      "Our pricing is based on API calls per month with generous free tier limits. You only pay for what you use, and volume discounts kick in automatically as you scale. There are no hidden fees for features like rate limiting or analytics.",
  },
  {
    title: "Can I migrate my existing APIs to APIForge?",
    content:
      "Yes. APIForge supports OpenAPI and GraphQL schema imports, so you can point our gateway at your existing endpoints and start adding features immediately. Most teams complete migration in less than a day.",
  },
  {
    title: "What kind of support do you offer?",
    content:
      "Free tier includes community support via Discord and forums. Growth plans get email support with 24-hour response time. Scale plans include dedicated Slack channels, a named solutions engineer, and 1-hour response SLA for critical issues.",
  },
];

const QuestionComponent = ({ title, content }: Question) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex flex-row justify-between gap-3 items-center pb-3"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <h3 className="font-bold">{title}</h3>
        <button className="rounded-full bg-stone-200/50 h-8 w-8 flex items-center justify-center">
          {isOpen ? "x" : "+"}
        </button>
      </div>
      {isOpen && <p className="-translate-y-4">{content}</p>}
    </>
  );
};

export default function FAQSection({ className }: { className?: string }) {
  return (
    <div className={`px-4 ${className}`}>
      <article className="text-center flex flex-col">
        <Badge className="self-center">FAQ</Badge>
        <h2 className="font-bold text-3xl mt-4 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-stone-700">
          Everything you need to know about APIForge and our API infrastructure
          platform.
        </p>
      </article>
      <article className="flex flex-col gap-5 mt-12">
        {questions.map((question, index) => (
          <QuestionComponent {...question} key={index} />
        ))}
      </article>
    </div>
  );
}
