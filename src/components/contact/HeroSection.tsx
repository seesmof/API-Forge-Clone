import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-bl from-orange-600 to-orange-700">
      <div className="px-4 py-12 mx-auto max-w-7xl text-center flex flex-col text-white">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <p className="py-4">
          Have a question about APIForge? Want to discuss enterprise pricing?
          Our developer relations team is here to help.
        </p>
        <p className="text-sm mt-4 flex gap-2 self-center">
          <Link
            className="text-white/50 hover:text-white duration-150"
            href="/"
          >
            Home
          </Link>{" "}
          <p>/</p>
          <p>Contact</p>
        </p>
      </div>
    </section>
  );
}
