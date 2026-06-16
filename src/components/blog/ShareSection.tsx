import { Facebook, Link2, LinkedIn, X } from "@deemlol/next-icons";

export default function ShareSection() {
  return (
    <article>
      <p className="text-sm font-semibold">Share this article</p>
      <div className="flex gap-3 mt-3">
        <div className="rounded-full duration-150 hover:bg-blue-600 hover:text-white cursor-pointer h-10 w-10 bg-stone-100 flex items-center justify-center">
          <X />
        </div>
        <div className="rounded-full duration-150 hover:bg-blue-600 hover:text-white cursor-pointer h-10 w-10 bg-stone-100 flex items-center justify-center">
          <Facebook />
        </div>
        <div className="rounded-full duration-150 hover:bg-blue-600 hover:text-white cursor-pointer h-10 w-10 bg-stone-100 flex items-center justify-center">
          <LinkedIn />
        </div>
        <div className="rounded-full duration-150 hover:bg-blue-600 hover:text-white cursor-pointer h-10 w-10 bg-stone-100 flex items-center justify-center">
          <Link2 />
        </div>
      </div>
    </article>
  );
}
