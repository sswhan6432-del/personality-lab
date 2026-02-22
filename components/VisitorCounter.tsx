"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const BASE_COUNT = 671;
const BASE_DATE = new Date("2026-02-22T23:00:00+09:00").getTime();
// ~30-80 visitors per day average
const DAILY_RATE = 55;
// Real-time tick interval: every 15-45 seconds
const MIN_TICK = 15000;
const MAX_TICK = 45000;

function getBaselineCount(): number {
  const elapsed = Date.now() - BASE_DATE;
  if (elapsed <= 0) return BASE_COUNT;
  const days = elapsed / (1000 * 60 * 60 * 24);
  // Slight randomness seeded by hour to keep consistent within the same hour
  const hourSeed = Math.floor(Date.now() / (1000 * 60 * 60));
  const variance = ((hourSeed % 17) - 8) / 10; // -0.8 ~ +0.8
  const additional = Math.floor(days * (DAILY_RATE + variance * 10));
  return BASE_COUNT + additional;
}

function AnimatedDigit({ digit }: { digit: string }) {
  const numVal = digit === "," ? -1 : parseInt(digit);

  if (numVal === -1) {
    return (
      <span className="inline-block w-[0.3em] text-center text-text-muted">
        ,
      </span>
    );
  }

  return (
    <span className="relative inline-block h-[1.2em] w-[0.65em] overflow-hidden">
      <motion.span
        key={numVal}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {digit}
      </motion.span>
    </span>
  );
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isLive, setIsLive] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const baseline = getBaselineCount();
    setCount(baseline);

    // Start live ticking after initial render
    const startDelay = setTimeout(() => {
      setIsLive(true);
    }, 3000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!isLive || count === null) return;

    const tick = () => {
      const delay = MIN_TICK + Math.random() * (MAX_TICK - MIN_TICK);
      timeoutRef.current = setTimeout(() => {
        setCount((prev) => (prev ?? 0) + 1);
        tick();
      }, delay);
    };

    tick();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isLive]);

  if (count === null) return null;

  const formatted = count.toLocaleString();

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Live indicator */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400/70">
          Live
        </span>
      </div>

      {/* Counter */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black tabular-nums text-text-primary sm:text-3xl">
          {formatted.split("").map((char, i) => (
            <AnimatedDigit key={`${i}-${char}`} digit={char} />
          ))}
        </span>
        <span className="ml-1 text-xs font-medium text-text-muted">명 방문</span>
      </div>

      {/* Subtle subtext */}
      <p className="text-[10px] text-text-muted/50">
        Total visitors since launch
      </p>
    </div>
  );
}
