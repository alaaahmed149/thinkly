import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MenuItems from "@/components/MenuItems";
import MobileMenu from "@/components/MobileMenu";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between md:justify-around p-2 bg-[#090909] border-b border-white/10 sticky top-0 z-30">
      <div className="flex justify-center items-center p-2">
        <Image src={"/logo.png"} alt="logo" width={120} height={100} />
      </div>

      <div className="hidden md:flex gap-8">
        <MenuItems />
        <Link href="#" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link href="#" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
        <Button variant="ghost" className="text-white cursor-pointer">
          Sign In
        </Button>
        <Button
          variant="outline"
          className="text-black border-white/20 cursor-pointer"
        >
          Sign Up
        </Button>
      </div>

      <MobileMenu />
    </div>
  );
}
