import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Archetype Lab",
  description: "Archetype Lab은 연애 유형, MBTI 심화, 관계 성향 등 다양한 심리 테스트를 제공합니다.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-text-primary">About Archetype Lab</h1>

      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Archetype Lab이란?</h2>
          <p>
            Archetype Lab은 과학적 심리 분석을 기반으로 한 개성 탐구 테스트 모음 플랫폼입니다.
            연애 성향, 인지 기능 기반 MBTI, 관계 아키타입 등 다양한 테스트를 통해
            자신을 더 깊이 이해할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">제공 테스트</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>CouplePoint</strong> — 72문항으로 알아보는 연애 성향 테스트.
              6가지 차원으로 12가지 연애 아키타입을 분석합니다.
            </li>
            <li>
              <strong>CogniType</strong> — 8개 인지 기능 기반 심화 MBTI 테스트.
              단순 4글자를 넘어 인지 스택으로 진짜 유형을 찾습니다.
            </li>
            <li>
              <strong>Velvet Compass</strong> — 관계 성향 아키타입 테스트.
              8가지 차원, 12가지 아키타입으로 관계 스타일을 분석합니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">개인정보 보호</h2>
          <p>
            모든 테스트는 회원가입 없이 이용 가능하며, 결과는 서버에 저장되지 않습니다.
            데이터는 사용자의 브라우저 내에서만 처리됩니다. 자세한 내용은{" "}
            <a href="/privacy" className="text-primary underline">개인정보처리방침</a>을
            참고해주세요.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">연락처</h2>
          <p>
            문의사항이 있으시면 아래로 연락해주세요.
          </p>
          <ul className="mt-2 space-y-1">
            <li>
              이메일:{" "}
              <a href="mailto:sswhan6432@gmail.com" className="text-primary underline">
                sswhan6432@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
