"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust path based on your shadcn setup

interface HeroData {
  tagline: string;
  titleNormal: string;
  titleHighlight: string;
  description: string;
  primaryBtn: { text: string; link: string };
  secondaryBtn: { text: string; link: string };
  bgImage: string;
}

export default function HeroSection({ data }: { data: HeroData }) {
  // Motion animation variants for a clean staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-start overflow-hidden bg-zinc-950 px-6 sm:px-12 md:px-20 lg:px-32 py-10">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage}
          alt="Background Image"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Gradients to recreate the dark corporate atmosphere in your reference image */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-900/40"></div>
        <div className="absolute inset-0 bg-zinc-950/30"></div>
      </div>

      {/* Main Content Area */}
      <motion.div
        className="relative z-10 max-w-4xl text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false, // Change to `false` if you want it to re-animate every single time you scroll up and down
          amount: 0.3, // Triggers when 30% of the element is visible in the viewport
        }}
      >
        {/* Small Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm font-bold tracking-widest text-orange-500 uppercase mb-4"
        >
          {data.tagline}
        </motion.p>

        {/* Dynamic Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
        >
          {data.titleNormal}
          <span className="text-orange-500 block sm:inline">
            {data.titleHighlight}
          </span>
        </motion.h1>

        {/* Paragraph Description */}
        <motion.p
          variants={itemVariants}
          className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10"
        >
          {data.description}
        </motion.p>

        {/* Button Action Trigger Area */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4"
        >
          {/* Primary Button */}
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-6 rounded-md shadow-lg transition-transform active:scale-95"
          >
            <Link href={data.primaryBtn.link}>{data.primaryBtn.text}</Link>
          </Button>

          {/* Secondary Outline/Ghost Button */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-zinc-400 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium px-6 py-6 rounded-md group transition-all"
          >
            <Link
              href={data.secondaryBtn.link}
              className="flex items-center gap-2"
            >
              {data.secondaryBtn.text}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
