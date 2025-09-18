"use client";
import { motion } from "framer-motion";
import { Notebook, Zap, Mic, BarChart3 } from "lucide-react";
const icons = {
  notebook: Notebook,
  zap: Zap,
  mic: Mic,
  barchart: BarChart3,
};
export interface CardProps {
  id: number;
  icon: keyof typeof icons;
  title: string;
  description: string;
}
export default function Card({ icon, title, description }: CardProps) {
  const Icon = icons[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.2 }}
      className="p-6 rounded-2xl bg-[#0f0f14] shadow-inner shadow-black/60 border border-transparent hover:border-indigo-400/40 transition"
    >
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1f] shadow-md">
        <Icon className="text-indigo-300" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </motion.div>
  );
}
