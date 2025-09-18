"use client";
import Card from "@/components/Card";
import { features } from "@/lib/features";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Features() {
  return (
    <div className="w-full bg-[#111119] p-10 py-20 mt-5 mb-0 flex flex-col gap-8 items-center relative overflow-hidden">
      {/* Decorative gradient orbs for depth */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-purple-900/20 blur-2xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-blue-900/20 blur-2xl"></div>

      {/* Glass card container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative flex flex-col justify-center items-center gap-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-10 shadow-lg"
      >
        <Image src={"/thinkly.png"} alt="logo" width={100} height={100} />
        <h1 className="text-center text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.3)]">
          Everything you need to stay productive
        </h1>
        <p className="text-center text-md md:text-xl max-w-3xl  bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 drop-shadow-[0_0.8px_0.8px_rgba(255,255,255,0.2)]">
          Thinkly brings together notes, tasks, and AI assistance in a single
          simple platform
        </p>
      </motion.div>
      <div className="flex flex-col items-center gap-8 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl md:text-4xl text-center font-bold"
        >
          Smarter tools for a smarter workflow
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
