"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tests = [
  {
    id: "love",
    title: "연애 유형 테스트",
    titleEn: "CouplePoint",
    description: "72문항으로 알아보는 나의 연애 성향",
    descriptionEn: "Discover your dating style through 72 questions",
    stats: "72 questions · 6 dimensions · 12 archetypes",
    url: "https://couplepoint.space",
    tags: ["연애 성향", "커플 궁합", "데이트 추천"],
    numeral: "I",
    rgb: "232, 120, 106",
  },
  {
    id: "mbti",
    title: "MBTI 심화 테스트",
    titleEn: "CogniType",
    description: "8개 인지 기능으로 알아보는 진짜 MBTI",
    descriptionEn: "True MBTI through 8 cognitive functions",
    stats: "72 questions · 8 functions · 16 types",
    url: "https://mbtitest.space",
    tags: ["인지 기능", "MBTI 심화", "성격 유형"],
    numeral: "II",
    rgb: "99, 102, 241",
  },
  {
    id: "bdsm",
    title: "BDSM 성향 테스트",
    titleEn: "Velvet Compass",
    description: "깊이 있는 성향 분석과 아키타입 매칭",
    descriptionEn: "Deep preference analysis with archetype matching",
    stats: "72 questions · 7 dimensions · 12 archetypes",
    url: "https://bdsmtest.space",
    tags: ["성향 분석", "아키타입", "궁합 테스트"],
    numeral: "III",
    rgb: "124, 111, 224",
  },
];

export default function HubPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  const hoveredTest = tests.find((t) => t.id === hovered);
  const themeRgb = hoveredTest?.rgb ?? null;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
      {/* Full-page ambient background */}
      <div
        className="pointer-events-none fixed inset-0 transition-all duration-700 ease-out"
        style={{
          background: themeRgb
            ? `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${themeRgb}, 0.08) 0%, transparent 70%)`
            : "transparent",
        }}
      />

      {/* Floating orbs that react to hover */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full blur-[120px] transition-all duration-1000"
          style={{
            background: themeRgb
              ? `rgba(${themeRgb}, 0.12)`
              : "rgba(232, 120, 106, 0.04)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-[120px] transition-all duration-1000"
          style={{
            background: themeRgb
              ? `rgba(${themeRgb}, 0.08)`
              : "rgba(124, 111, 224, 0.04)",
          }}
        />
        {/* Center pulse on hover */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000"
          style={{
            background: themeRgb
              ? `radial-gradient(circle, rgba(${themeRgb}, 0.06) 0%, transparent 70%)`
              : "transparent",
          }}
        />
      </div>

      {/* Animated top border line */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 h-[2px] overflow-hidden">
        <div
          className="h-full transition-all duration-700"
          style={{
            background: themeRgb
              ? `linear-gradient(90deg, transparent, rgba(${themeRgb}, 0.6), transparent)`
              : "linear-gradient(90deg, transparent, rgba(100,100,120,0.1), transparent)",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-16 text-center"
      >
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] transition-colors duration-700"
          style={{ color: themeRgb ? `rgba(${themeRgb}, 0.6)` : undefined }}
        >
          Archetype Lab
        </p>
        <h1 className="mb-4 text-4xl font-black text-text-primary sm:text-5xl">
          나를 알아가는 테스트
        </h1>
        <div
          className="mx-auto mb-4 h-[2px] w-16 rounded-full transition-all duration-700"
          style={{
            background: themeRgb
              ? `linear-gradient(90deg, transparent, rgba(${themeRgb}, 0.8), transparent)`
              : "linear-gradient(90deg, rgba(232,120,106,0.4), rgba(100,100,120,0.3), rgba(124,111,224,0.4))",
          }}
        />
        <p className="text-sm text-text-secondary">
          당신의 성향을 과학적으로 분석합니다
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((test, index) => {
          const isActive = hovered === test.id;
          const isDimmed = hovered !== null && !isActive;

          return (
            <motion.a
              key={test.id}
              href={test.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHovered(test.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-2xl border p-8 transition-all duration-500"
              style={{
                borderColor: isActive ? `rgba(${test.rgb}, 0.4)` : "rgba(42,42,58,1)",
                background: isActive
                  ? `linear-gradient(135deg, rgba(${test.rgb}, 0.12) 0%, rgba(${test.rgb}, 0.03) 100%)`
                  : "linear-gradient(135deg, rgba(42,42,58,0.3) 0%, rgba(26,26,37,0.5) 100%)",
                boxShadow: isActive
                  ? `0 0 60px rgba(${test.rgb}, 0.2), 0 0 120px rgba(${test.rgb}, 0.08), inset 0 1px 0 rgba(${test.rgb}, 0.1)`
                  : "none",
                opacity: isDimmed ? 0.4 : 1,
                filter: isDimmed ? "grayscale(0.5)" : "none",
              }}
            >
              {/* Hover shimmer */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "200%", opacity: 0.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(${test.rgb}, 0.3), transparent)`,
                      width: "50%",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Numeral */}
              <div
                className="absolute right-6 top-6 text-5xl font-black transition-all duration-500"
                style={{ color: `rgba(${test.rgb}, ${isActive ? 0.2 : 0.07})` }}
              >
                {test.numeral}
              </div>

              {/* Content */}
              <div className="relative">
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-500"
                  style={{ color: `rgba(${test.rgb}, ${isActive ? 0.8 : 0.5})` }}
                >
                  {test.titleEn}
                </p>
                <h2 className="mb-3 text-2xl font-bold text-text-primary">
                  {test.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {test.description}
                </p>

                {/* Stats */}
                <p className="mb-5 text-xs text-text-muted">{test.stats}</p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {test.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium transition-all duration-500"
                      style={{
                        background: `rgba(${test.rgb}, ${isActive ? 0.15 : 0.08})`,
                        color: `rgba(${test.rgb}, ${isActive ? 1 : 0.7})`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-500"
                  style={{
                    background: `rgba(${test.rgb}, ${isActive ? 0.2 : 0.08})`,
                    color: `rgb(${test.rgb})`,
                  }}
                >
                  테스트 시작하기
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative mt-16 text-xs text-text-muted"
      >
        &copy; {new Date().getFullYear()} Archetype Lab
      </motion.p>
    </div>
  );
}
