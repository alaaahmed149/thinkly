"use client";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden block">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white focus:outline-none hover:bg-white/10 rounded-md"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          !isOpen && "pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-[#090909] border-l border-white/10 shadow-xl z-50 overflow-y-auto ${
          isOpen ? "menu-open" : ""
        }`}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col px-4 py-6 space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <Image src="/logo.png" alt="logo" width={100} height={80} />
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col space-y-4">
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              Menu
            </p>
            <div className="flex items-center gap-2 py-2 border-b border-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <Link href="#" className="text-white hover:text-gray-300">
                Solutions
              </Link>
            </div>
            <div className="pl-4 flex flex-col space-y-3 py-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/file.svg"
                  alt="Documentation"
                  width={16}
                  height={16}
                />
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-sm">Documentation</span>
                    <span className="text-xs text-gray-400">
                      Learn how to use our tools
                    </span>
                  </div>
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Image src="/globe.svg" alt="API" width={16} height={16} />
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-sm">API</span>
                    <span className="text-xs text-gray-400">
                      Integrate with our services
                    </span>
                  </div>
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Image src="/window.svg" alt="Plugins" width={16} height={16} />
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-sm">Plugins</span>
                    <span className="text-xs text-gray-400">
                      Extend functionality
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 py-2 border-b border-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
              </svg>
              <Link href="#" className="text-white hover:text-gray-300">
                Resources
              </Link>
            </div>
            <div className="pl-4 flex flex-col space-y-3 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Blog
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Documentation
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Guides
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 py-2 border-b border-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <Link href="#" className="text-white hover:text-gray-300">
                About
              </Link>
            </div>

            <div className="flex items-center gap-2 py-2 border-b border-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <Link href="#" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </div>
          </nav>

          {/* Sign In/Up Buttons */}
          <div className="flex flex-col space-y-4 mt-4 pt-4 border-t border-gray-800">
            <Button variant="ghost" className="w-full cursor-pointer">
              Sign In
            </Button>
            <Button
              variant="outline"
              className="text-black border-white/20 w-full cursor-pointer"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
