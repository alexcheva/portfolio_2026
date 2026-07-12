import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/brand/merkaba-logo-transparent.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-xl"
          priority
        />
        <span className="text-sm font-semibold tracking-wide">
          Alexandra Lukinicheva
        </span>
      </Link>

      <Navbar />
    </header>);
}