"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";
import { ArrowUpRightIcon } from "lucide-react";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden z-10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none select-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none select-none" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Profile Picture */}

          <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
            <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background">
              <Image
                src={siteConfig.author_img}
                alt={`${siteConfig.author} profile`}
                width={192}
                height={192}
                className="object-cover w-full h-full "
                priority
              />
            </div>
          </CardHeader>

          {/* Main Heading - show name and description from config */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-extrabold tracking-tight leading-none">
              <span className="block">{siteConfig.siteName}</span>
            </h1>
            <p className="mx-auto max-w-2xl sm:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed px-4 sm:px-0">
              "Full-stack mobile craftsman: Backend brains, frontend soul,
              mobile heart"
            </p>
          </div>
        </motion.div>
      </div>
      {/* Floating Elements */}
      <div className="absolute left-1/4 top-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none select-none" />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none select-none" />
    </motion.section>
  );
}
