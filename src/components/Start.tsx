import { ReactNode } from "react";
import Badge from "./Badge";

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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
];

export default function StartSection() {
  return (
    <div className="bg-white">
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
          <div className="flex flex-row gap-5 items-center" key={index}>
            <div className="h-12 w-12 flex items-center justify-center bg-orange-50 rounded-md stroke-orange-600">
              {item.icon}
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-bold">{item.title}</span>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
