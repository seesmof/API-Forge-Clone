"use client";

import { GitHub, LinkedIn, Mail, MapPin, Phone, X } from "@deemlol/next-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-stone-900 text-gray-400">
      <div className="px-4 py-12">
        <article className="w-2/3">
          <h3 className="font-bold text-white text-lg">
            API<span className="text-orange-300">Forge</span>
          </h3>
          <p className="mt-3">
            Developer-first API infrastructure that helps teams ship better APIs
            faster. Gateway, auth, analytics, and SDKs in one platform.
          </p>
          <div className="flex flex-col py-6 gap-2 text-sm">
            <Link
              href="tel:+15556789012"
              className="flex flex-row cursor-pointer items-center hover:text-gray-50 transition duration-150 gap-2"
              onClick={() => navigator.clipboard.writeText("(555) 678-9012")}
            >
              <Phone className="h-5" /> (555) 678-9012
            </Link>
            <Link
              href="mailto:hello@apiforge.dev"
              className="flex flex-row cursor-pointer items-center hover:text-gray-50 transition duration-150 gap-2"
            >
              <Mail className="h-5" /> hello@apiforge.dev
            </Link>
            <Link
              href="https://maps.app.goo.gl/PcAYC4EWYLsxFseK7"
              className="flex flex-row cursor-pointer items-center hover:text-gray-50 transition duration-150 gap-2"
            >
              <MapPin className="h-5" /> 200 Congress Ave, Austin, TX 78701
            </Link>
          </div>
          <div className="flex flex-row gap-3">
            <Link
              href="https://github.com/"
              className="rounded-md hover:bg-stone-700 bg-stone-800 p-3 hover:text-white"
            >
              <GitHub />
            </Link>
            <Link
              href="https://x.com/"
              className="rounded-md hover:bg-stone-700 bg-stone-800 p-3 hover:text-white"
            >
              <X />
            </Link>
            <Link
              href="https://linkedin.com/"
              className="rounded-md hover:bg-stone-700 bg-stone-800 p-3 hover:text-white"
            >
              <LinkedIn />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
