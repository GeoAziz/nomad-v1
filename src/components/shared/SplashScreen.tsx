"use client";

import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-wider text-glow animate-pulse">
          VybzVerse
        </h1>
      </motion.div>
    </div>
  );
}
