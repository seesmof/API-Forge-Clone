import Link from "next/link";

export default function NavigationSection() {
  return (
    <nav className="flex flex-col text-sm gap-4">
      <Link
        href="/blog/"
        className="text-orange-600 duration-150 hover:text-orange-700"
      >
        Back to Blog
      </Link>
      <div className="flex gap-2">
        <Link
          href="/"
          className="text-stone-500 duration-100 hover:text-stone-900"
        >
          Home
        </Link>{" "}
        /{" "}
        <Link
          href="/blog/"
          className="text-stone-500 duration-100 hover:text-stone-900"
        >
          Blog
        </Link>{" "}
        / Article
      </div>
    </nav>
  );
}
