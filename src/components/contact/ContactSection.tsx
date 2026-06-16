"use client";

import { ArrowRight } from "@deemlol/next-icons";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface FormInputContainerProps {
  children: ReactNode;
}

const FormInputContainer = ({ children }: FormInputContainerProps) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

const Email = () => {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      ></path>
    </svg>
  );
};

const Phone = () => {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      ></path>
    </svg>
  );
};

const Office = () => {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
    </svg>
  );
};

const Hours = () => {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
};

export default function ContactSection() {
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl flex flex-col px-4 py-12">
        <h2 className="font-bold text-2xl">Get in Touch</h2>
        <p className="mt-2">
          Tell us about your project and we will get back to you within 24
          hours.
        </p>
        <form className="mt-6 flex flex-col gap-6">
          <FormInputContainer>
            <label
              htmlFor="fullNameInput"
              className="text-sm font-semibold text-stone-600"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullNameInput"
              id="fullNameInput"
              placeholder="Jane Developer"
              className="outline outline-stone-400 focus:outline-2 focus:outline-orange-600 rounded-md p-2"
              required
            />
            {nameError && (
              <p className="text-red-600">This field is required.</p>
            )}
          </FormInputContainer>

          <FormInputContainer>
            <label
              htmlFor="emailInput"
              className="text-sm font-semibold text-stone-600"
            >
              Email
            </label>
            <input
              type="email"
              name="emailInput"
              id="emailInput"
              placeholder="jane@company.com"
              className="outline outline-stone-400 focus:outline-2 focus:outline-orange-600 rounded-md p-2"
              required
            />
            {emailError && (
              <p className="text-red-600">This field is required.</p>
            )}
          </FormInputContainer>

          <FormInputContainer>
            <label
              htmlFor="subjectInput"
              className="text-sm font-semibold text-stone-600"
            >
              Subject
            </label>
            <input
              type="text"
              name="subjectInput"
              id="subjectInput"
              placeholder="Enterprise pricing, technical question, partnership..."
              className="outline outline-stone-400 focus:outline-2 focus:outline-orange-600 rounded-md p-2"
            />
          </FormInputContainer>

          <FormInputContainer>
            <label
              htmlFor="messageInput"
              className="text-sm font-semibold text-stone-600"
            >
              Message
            </label>
            <textarea
              name="messageInput"
              id="messageInput"
              rows={5}
              placeholder="Enterprise pricing, technical question, partnership..."
              className="outline outline-stone-400 focus:outline-2 focus:outline-orange-600 rounded-md p-2"
              required
            />
          </FormInputContainer>

          <button className="bg-orange-600 w-fit text-white font-semibold flex gap-1 items-center px-4 py-2 rounded-md shadow-orange-200 shadow-md duration-150 hover:bg-orange-700 cursor-pointer">
            Send a Message <ArrowRight />
          </button>
        </form>

        <article className="flex flex-col mt-12">
          <h3 className="font-bold text-2xl">Developer Support</h3>
          <p className="mt-2">Multiple ways to reach our team.</p>

          <div className="flex flex-col gap-5 mt-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 flex items-center justify-center p-2.5 rounded-md">
                <Email />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold">Email</h4>
                <Link
                  className="duration-150 hover:text-orange-600"
                  href="mailto:hello@apiforge.dev"
                >
                  hello@apiforge.dev
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 flex items-center justify-center p-2.5 rounded-md">
                <Phone />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold">Phone</h4>
                <Link
                  className="duration-150 hover:text-orange-600"
                  href="tel:5556789012"
                >
                  (555) 678-9012
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 flex items-center justify-center p-2.5 rounded-md">
                <Office />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold">Office</h4>
                <p>200 Congress Ave, Austin, TX 78701 </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 flex items-center justify-center p-2.5 rounded-md">
                <Hours />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold">Support Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM CT</p>
                <p>Enterprise: 24/7 on-call support</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55234.45392857408!2d-97.74306055!3d30.2671530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sDowntown%20Austin%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1"
        className="h-80 w-full border-0 mt-8"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our office location in Austin"
      ></iframe>
    </section>
  );
}
