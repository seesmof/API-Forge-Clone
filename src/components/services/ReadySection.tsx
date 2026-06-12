import Link from "next/link";

export default function ReadySection() {
  return (
    <section className="bg-linear-to-bl from-orange-600 to-orange-700">
      <div className="py-12 px-4 mx-auto max-w-3xl text-center text-white">
        <h2 className="text-2xl font-bold">Ready to Build Better APIs?</h2>
        <p className="py-4 mb-4">
          Start with our free tier and scale as you grow. No credit card
          required.
        </p>
        <button className="bg-white text-orange-600 text-sm px-8 py-2 rounded-md shadow-md duration-150">
          <Link href="/pricing/">Get Free API Key</Link>
        </button>
      </div>
    </section>
  );
}
