import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function MenuItems() {
  return (
    <NavigationMenu className="flex items-center">
      <NavigationMenuList className="flex gap-8">
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger className="text-base font-normal">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-2 md:grid-cols-1 w-[200px]">
              <div className="flex items-center gap-3">
                <Image
                  src="/file.svg"
                  alt="Documentation"
                  width={24}
                  height={24}
                />
                <Link href="#" className="flex flex-col gap-1 text-white">
                  <div className="text-base font-medium">Documentation</div>
                  <div className="text-xs text-gray-400">
                    Learn how to use our tools
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/globe.svg" alt="API" width={24} height={24} />
                <Link href="#" className="flex flex-col gap-1 text-white">
                  <div className="text-base font-medium">API</div>
                  <div className="text-xs text-gray-400">
                    Integrate with our services
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/window.svg" alt="Plugins" width={24} height={24} />
                <Link href="#" className="flex flex-col gap-1 text-white">
                  <div className="text-base font-medium">Plugins</div>
                  <div className="text-xs text-gray-400">
                    Extend functionality
                  </div>
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger className="text-base font-normal">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-2 w-[200px]">
              <Link href="#" className="block text-white hover:text-gray-300">
                Blog
              </Link>
              <Link href="#" className="block text-white hover:text-gray-300">
                Documentation
              </Link>
              <Link href="#" className="block text-white hover:text-gray-300">
                Guides
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
