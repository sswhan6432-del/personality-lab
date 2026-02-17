"use client";

import { motion } from "framer-motion";

const tests = [
  {
    id: "love",
    title: "연애 유형 테스트",
    titleEn: "Love Archetype Test",
    description: "72문항으로 알아보는 나의 연애 성향",
    descriptionEn: "Discover your dating style through 72 questions",
    stats: "72 questions · 6 dimensions · 12 archetypes",
    url: "https://couplepoint.space",
    color: "primary",
    glowClass: "card-glow-love",
    gradientClass: "gradient-love",
    tags: ["연애 성향", "커플 궁합", "데이트 추천"],
    tagsEn: ["Love Style", "Couple Match", "Date Ideas"],
    numeral: "I",
  },
  {
    id: "bdsm",
    title: "BDSM 성향 테스트",
    titleEn: "BDSM Archetype Test",
    description: "깊이 있는 성향 분석과 아키타입 매칭",
    descriptionEn: "Deep preference analysis with archetype matching",
    stats: "72 questions · 7 dimensions · 12 archetypes",
    url: "https://bdsmtest.space",
    color: "accent",
    glowClass: "card-glow-bdsm",
    gradientClass: "gradient-bdsm",
    tags: ["성향 분석", "아키타입", "궁합 테스트"],
    tagsEn: ["Preference", "Archetype", "Compatibility"],
    numeral: "II",
  },
];

export default function HubPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-16 text-center"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-text-muted">
          Personality Lab
        </p>
        <h1 className="mb-4 text-4xl font-black text-text-primary sm:text-5xl">
          나를 알아가는 테스트
        </h1>
        <div className="mx-auto mb-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-primary via-text-muted to-accent" />
        <p className="text-sm text-text-secondary">
          당신의 성향을 과학적으로 분석합니다
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {tests.map((test, index) => (
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
            className={`group relative overflow-hidden rounded-2xl border border-border ${test.gradientClass} p-8 transition-all duration-500 hover:border-${test.color}/30 ${test.glowClass}`}
          >
            {/* Numeral */}
            <div className={`absolute right-6 top-6 text-5xl font-black text-${test.color}/10`}>
              {test.numeral}
            </div>

            {/* Content */}
            <div className="relative">
              <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-${test.color}/60`}>
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
                    className={`rounded-full bg-${test.color}/10 px-3 py-1 text-xs font-medium text-${test.color}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className={`inline-flex items-center gap-2 rounded-full bg-${test.color}/10 px-6 py-3 text-sm font-semibold text-${test.color} transition-all group-hover:bg-${test.color}/20`}
              >
                테스트 시작하기
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative mt-16 text-xs text-text-muted"
      >
        &copy; {new Date().getFullYear()} Personality Lab
      </motion.p>
    </div>
  );
}
