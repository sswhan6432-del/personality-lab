import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://archetypelist.space";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Archetype Lab - 나를 알아가는 테스트",
    template: "%s | Archetype Lab",
  },
  description: "연애 유형, MBTI 심화, 성향 분석 테스트로 나를 더 깊이 이해해보세요. 과학적 분석 기반 아키타입 테스트 모음.",
  keywords: ["성격 테스트", "아키타입", "연애 유형", "MBTI", "성향 분석", "심리 테스트", "자기 이해"],
  openGraph: {
    title: "Archetype Lab - 나를 알아가는 테스트",
    description: "연애 유형, MBTI 심화, 성향 분석 테스트 모음",
    url: siteUrl,
    siteName: "Archetype Lab",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archetype Lab",
    description: "연애 유형, MBTI 심화, 성향 분석 테스트 모음",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google114c8ee082555aea",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HFMPSRC9HZ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HFMPSRC9HZ');`,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3056597383286208"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Archetype Lab",
              url: siteUrl,
              description: "연애 유형, MBTI 심화, 성향 분석 테스트 모음",
              publisher: {
                "@type": "Organization",
                name: "Archetype Lab",
              },
            }),
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
