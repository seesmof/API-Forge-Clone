import Link from "next/link";

export default function WhichPlanSection() {
  return (
    <section className="bg-linear-to-b from-orange-600 to-orange-700">
      <div className="px-4 py-12 mx-auto max-w-7xl text-center text-white">
        <h2 className="font-bold text-3xl">Not Sure Which Plan Is Right?</h2>
        <p className="py-4">
          Talk to our solutions team. We will help you find the right plan based
          on your traffic patterns and requirements.
        </p>
        <p className="flex flex-col md:flex-row gap-4 mt-4">
          <button className="rounded-full font-semibold w-fit self-center px-6 py-2 bg-white text-orange-700 shadow-md duration-150 hover:bg-white/95 cursor-pointer">
            <Link href="/contact">Talk to Sales</Link>
          </button>
          <button className="rounded-full font-semibold w-fit self-center px-6 py-2 bg-transparent text-white duration-150 hover:bg-white/15 cursor-pointer outline-2 outline-white/50">
            <Link href="/pricing">Documentation</Link>
          </button>
        </p>
      </div>
    </section>
  );
}
