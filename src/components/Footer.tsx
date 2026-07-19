import Image from "next/image";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">


      <span className="text-sm font-semibold tracking-wide">
        2026 build by Alexandra Lukinicheva
      </span>
      <Image
        src="/brand/merkaba-logo-transparent.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-xl"
        priority
      />

      {/* <Navbar /> */}
    </footer>);
}