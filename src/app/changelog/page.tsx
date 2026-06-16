import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="bg-linear-to-bl from-orange-600 to-orange-700">
        <div className="px-4 py-12 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-bold text-3xl">Changelog</h1>
          <p className="my-4">
            Track every update to the APIForge platform. New features,
            improvements, and fixes shipped regularly.
          </p>
          <div className="text-sm mt-4 flex gap-2 self-center">
            <Link
              className="text-white/50 hover:text-white duration-150"
              href="/"
            >
              Home
            </Link>{" "}
            <p>/</p>
            <p>Changelog</p>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-bl from-orange-600 to-orange-700">
        <div className="px-4 py-12 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-bold text-3xl">Stay Up to Date</h1>
          <p className="my-4">
            Want to be the first to know about new features? Start building with
            APIForge today.
          </p>
          <button className="bg-white text-orange-600 duration-150 hover:bg-white/90 cursor-pointer px-4 py-2 rounded-lg shadow-lg mt-4">
            Get Started Free
          </button>
        </div>
      </section>
    </>
  );
}
