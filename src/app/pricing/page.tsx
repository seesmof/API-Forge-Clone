import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-bl from-orange-600 to-orange-700">
        <div className="px-4 py-12 mx-auto max-w-3xl text-center text-white">
          <h1 className="font-bold text-3xl">Pricing</h1>
          <p className="py-4">
            Simple, transparent pricing that scales with your API traffic. Start
            free, upgrade when you are ready.
          </p>
          <p className="text-sm mt-4">
            <Link
              className="text-white/50 hover:text-white duration-150"
              href="/"
            >
              Home
            </Link>{" "}
            / Pricing
          </p>
        </div>
      </section>
    </>
  );
}
