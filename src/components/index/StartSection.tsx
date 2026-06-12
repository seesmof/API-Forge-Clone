"use client";

import { ReactNode, useState } from "react";
import Badge from "../small/Badge";

const Phone = () => {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      ></path>{" "}
    </svg>
  );
};

const Email = () => {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      ></path>{" "}
    </svg>
  );
};

const Address = () => {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      ></path>{" "}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>{" "}
    </svg>
  );
};

const Clock = () => {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>{" "}
    </svg>
  );
};

interface Contact {
  icon: ReactNode;
  title: string;
  value: string;
}

const contact: Contact[] = [
  { icon: <Phone />, title: "Phone", value: "(555) 678-9012" },
  { icon: <Email />, title: "Email", value: "hello@apiforge.dev" },
  {
    icon: <Address />,
    title: "Address",
    value: "200 Congress Ave, Austin, TX 78701",
  },
  {
    icon: <Clock />,
    title: "Office Hours",
    value: "Mon - Fri: 7:00 AM - 6:00 PM\nSat: 8:00 AM - 2:00 PM\nSun: Closed",
  },
];

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
        <button className="rounded-full bg-stone-300 h-8 w-8 flex items-center justify-center">
          {isOpen ? "x" : "+"}
        </button>
      </div>
      {isOpen && <p>{content}</p>}
    </>
  );
};

export default function StartSection() {
  return (
    <div className="bg-white" id="startSection">
      <div className="px-4 pt-16 flex flex-col">
        <Badge className="self-center">Get Started</Badge>
        <article className="text-center">
          <h2 className="font-bold text-3xl mt-4 tracking-tight">
            Start Building Today
          </h2>
          <p className="mt-3 text-stone-700">
            Sign up for a free API key and start building in minutes. Our
            developer relations team is here to help you succeed.
          </p>
        </article>

        <form className="mt-16 gap-5 flex flex-col">
          <div className="flex flex-col gap-2">
            <label
              className="font-bold text-sm cursor-pointer"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="fullName"
              id="fullName"
              className="px-3 py-2 outline focus:outline-2 focus:outline-orange-600 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm cursor-pointer" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              id="email"
              className="px-3 py-2 outline focus:outline-2 focus:outline-orange-600 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm cursor-pointer" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              name="phone"
              id="phone"
              maxLength={10}
              className="px-3 py-2 outline focus:outline-2 focus:outline-orange-600 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="type" className="font-bold text-sm cursor-pointer">
              Project Type
            </label>
            <select
              name="type"
              id="type"
              className="px-3 py-2 outline focus:outline-2 focus:outline-orange-600 rounded-md"
              required
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select a project type
              </option>
              <option value="residential">Residential Consturction</option>
              <option value="commercial">Commercial Building</option>
              <option value="renovation">Renovation & Remodeling</option>
              <option value="interior">Interior Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="details"
              className="font-bold text-sm cursor-pointer"
            >
              Project Details
            </label>
            <textarea
              name="details"
              id="details"
              rows={5}
              placeholder="Tell us about your project..."
              className="px-3 py-2 outline focus:outline-2 focus:outline-orange-600 rounded-md resize-none"
              required
            />
          </div>

          <button className="cursor-pointer duration-150 hover:bg-orange-700 bg-orange-600 text-white font-semibold w-full rounded-md py-2 shadow shadow-orange-300">
            Send Message
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-8 px-4 mt-5">
        {contact.map((item, index) => (
          <div className="flex flex-row gap-5 items-start" key={index}>
            <div className="h-12 w-12 flex items-center justify-center bg-orange-50 rounded-md stroke-orange-600">
              {item.icon}
            </div>
            <div className="flex flex-col text-sm pt-2">
              <span className="font-bold">{item.title}</span>
              <pre className="font-sans">{item.value}</pre>
            </div>
          </div>
        ))}
        <iframe
          className="w-full rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55448.45392857408!2d-95.40258045!3d29.7604267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf244cde1c5b%3A0x3e0e8f9b0e7e4c8a!2sDowntown%20Houston%2C%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="mt-24 px-4">
        <article className="text-center flex flex-col">
          <Badge className="self-center">FAQ</Badge>
          <h2 className="font-bold text-3xl mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-stone-700">
            Everything you need to know about APIForge and our API
            infrastructure platform.
          </p>
        </article>
        <article className="flex flex-col gap-5 mt-12">
          {questions.map((question, index) => (
            <QuestionComponent {...question} key={index} />
          ))}
        </article>
      </div>
    </div>
  );
}
