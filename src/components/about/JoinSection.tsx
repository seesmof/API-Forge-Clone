import Link from "next/link";

export default function JoinSection() {
  return (
    <section className="bg-linear-to-b from-orange-600 to-orange-700">
      <div className="px-4 py-12 mx-auto max-w-7xl text-center text-white">
        <h2 className="font-bold text-3xl">Want to Join Us?</h2>
        <p className="py-4">
          We are always looking for talented engineers who want to build the
          future of API infrastructure.
        </p>
        <button className="rounded-md font-semibold w-fit self-center px-6 py-2 bg-white text-orange-700 shadow-md duration-150 hover:bg-white/95 cursor-pointer mt-4">
          <Link href="/contact">View Open Roles</Link>
        </button>
      </div>
    </section>
  );
}
