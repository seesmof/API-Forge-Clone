"use client";

import { ArrowRight } from "@deemlol/next-icons";
import { ReactNode, useState } from "react";

interface FormInputContainerProps {
  children: ReactNode;
}

const FormInputContainer = ({ children }: FormInputContainerProps) => {
  return <div className="flex flex-col gap-1">{children}</div>;
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
      </div>
    </section>
  );
}
