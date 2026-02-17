import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personality Lab - 나를 알아가는 테스트",
  description: "연애 유형 테스트와 성향 분석 테스트로 나를 더 깊이 이해해보세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
