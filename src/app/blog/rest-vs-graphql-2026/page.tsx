import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="px-4 py-6 flex flex-col">
        <nav className="flex flex-col">
          <Link href="/blog/" className="">
            Back to Blog
          </Link>
        </nav>
      </div>
    </section>
  );
}
