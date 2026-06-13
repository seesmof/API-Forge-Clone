import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-bl from-orange-600 to-orange-700">
      <div className="px-4 py-12 mx-auto max-w-7xl text-center text-white">
        <h2 className="font-bold text-3xl">About APIForge</h2>
        <p className="py-4">
          Founded in 2022, we are building the developer-first API
          infrastructure platform that engineering teams deserve.
        </p>
        <div className="text-sm mt-4">
          <Link
            className="text-white/50 hover:text-white duration-150"
            href="/"
          >
            Home
          </Link>{" "}
          / About
        </div>
      </div>
    </section>
  );
}
