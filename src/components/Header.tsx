import { Menu } from "@deemlol/next-icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/90 border-b border-stone-200">
      <div className="flex justify-between mx-auto px-4 py-2 items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={120}
            height={120}
            alt="A logo image of API Forge."
            className="h-8"
          />
        </Link>

        <div className="flex flex-row gap-3">
          <button className="bg-orange-600 text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-orange-700 duration-150 transition-all cursor-pointer">
            <Link href={"/pricing"}>Get API Key</Link>
          </button>
          <button className="hover:bg-stone-200 rounded-md p-1">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
