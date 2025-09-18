"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-[#090909] border-t border-white/10 text-white mt-0"
    >
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo and company info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logo.png"
              alt="Thinkly Logo"
              width={120}
              height={40}
              className="mb-2"
            />
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Boost your productivity with AI-powered tools that help you work
              smarter, not harder.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-gray-500">© 2025 Thinkly</span>
            </div>
          </div>

          {/* Middle links */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-sm font-semibold text-white mb-2">Product</h3>
              <Link
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Recourses
              </Link>
              <Link
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Integrations
              </Link>
              <Link
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                API
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
              <h3 className="text-sm font-semibold text-white mb-2">Company</h3>
              <Link
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <HelpCircle size={14} />
                <span>Help Center</span>
              </Link>
            </div>
          </div>

          {/* Right links - Social & Legal */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-col items-center md:items-end gap-3">
              <h3 className="text-sm font-semibold text-white mb-2">Connect</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 mt-2">
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Mail size={14} />
                <span>Contact Us</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <ShieldCheck size={14} />
                <span>Privacy Policy</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <FileText size={14} />
                <span>Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom border with subtle gradient */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-500">
            © Designed by{" "}
            <a
              href="https://github.com/alaaahmed149"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Alaa Ahmed
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
