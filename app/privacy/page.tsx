import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - Archetype Lab",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-text-primary">개인정보처리방침</h1>
      <p className="mb-2 text-sm text-text-muted">시행일: 2026년 2월 19일</p>

      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">1. 수집하는 개인정보</h2>
          <p>
            Archetype Lab(&quot;서비스&quot;)은 별도의 회원가입 없이 이용 가능하며, 이용자의 개인정보를
            서버에 저장하지 않습니다. 테스트 결과는 이용자의 브라우저(로컬 스토리지)에만 저장됩니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">2. 쿠키 및 광고</h2>
          <p>
            본 사이트는 Google AdSense를 통해 광고를 제공합니다. Google은 쿠키를 사용하여
            이용자의 관심사에 기반한 광고를 표시할 수 있습니다. 이용자는 브라우저 설정에서
            쿠키를 관리하거나{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Google 광고 설정
            </a>
            에서 맞춤 광고를 비활성화할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">3. 제3자 서비스</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Google AdSense: 광고 제공 및 쿠키 사용</li>
            <li>Google Analytics: 사이트 이용 통계 (익명화 처리)</li>
            <li>Vercel: 웹사이트 호스팅</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">4. 데이터 보관</h2>
          <p>
            테스트 응답 및 결과는 서버에 전송되거나 저장되지 않습니다. 모든 데이터는
            이용자의 브라우저 내에서만 처리되며, 브라우저 데이터를 삭제하면 완전히 제거됩니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">5. 이용자의 권리</h2>
          <p>
            이용자는 언제든 브라우저의 로컬 스토리지를 삭제하여 모든 데이터를 제거할 수
            있습니다. 추가 문의사항은 아래 연락처로 문의해주세요.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">6. 연락처</h2>
          <p>이메일: contact@archetypelist.space</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-text-primary">7. 변경사항</h2>
          <p>
            본 개인정보처리방침은 관련 법령 또는 서비스 변경에 따라 수정될 수 있으며,
            변경 시 본 페이지에 공지합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
