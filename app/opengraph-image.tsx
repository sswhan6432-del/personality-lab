import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Archetype Lab - 나를 알아가는 테스트";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a12 0%, #16161e 50%, #0f0f1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#888", letterSpacing: "0.4em", marginBottom: 20 }}>
          ARCHETYPE LAB
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, color: "#F1F1F1", marginBottom: 16 }}>
          나를 알아가는 테스트
        </div>
        <div style={{ fontSize: 20, color: "#666" }}>
          연애 유형 · MBTI 심화 · 성향 분석
        </div>
      </div>
    ),
    { ...size }
  );
}
