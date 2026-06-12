import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-bl from-orange-600 to-orange-700">
      <div className="py-12 px-4 mx-auto max-w-7xl text-center text-white">
        <h1 className="font-bold text-3xl">Our Products</h1>
        <p className="py-4">
          A complete API infrastructure platform with everything you need to
          build, deploy, and scale production APIs.
        </p>
        <p className="text-sm mt-4">
          <Link
            className="text-white/50 hover:text-white duration-150"
            href="/"
          >
            Home
          </Link>{" "}
          / Products
        </p>
      </div>
    </section>
  );
}
