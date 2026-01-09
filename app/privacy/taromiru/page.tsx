import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";

const policySections = [
  {
    title: "1. 事業者情報",
    content:
      "本アプリ「タロミル - 悩みを文章で鑑定」は合同会社Adtunityが提供します。",
  },
  {
    title: "2. 取得する情報",
    content:
      "入力された相談文、端末情報（OS種別・バージョン等）、広告識別子（Google Advertising ID）、アプリ利用時のログ情報を取得する場合があります。",
  },
  {
    title: "3. 利用目的",
    content:
      "鑑定結果の生成・提供、品質改善、問い合わせ対応、不正防止、広告配信の最適化のために利用します。",
  },
  {
    title: "4. 広告配信について",
    content:
      "本アプリではGoogle AdMobを利用し、広告の表示・計測のために端末の広告識別子等が利用されることがあります。",
  },
  {
    title: "5. 外部送信・第三者提供",
    content:
      "広告配信のため、Google Mobile Ads SDKを通じてGoogleへ必要な情報が送信される場合があります。法令に基づく場合を除き、第三者へ個人情報を提供しません。",
  },
  {
    title: "6. 保存期間",
    content:
      "取得した情報は、利用目的の達成に必要な期間に限り保存し、その後適切に削除します。",
  },
  {
    title: "7. 安全管理",
    content:
      "取得した情報は適切な安全管理措置を講じ、漏えい・改ざん・不正アクセスの防止に努めます。",
  },
  {
    title: "8. お問い合わせ",
    content:
      "本ポリシーに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。",
  },
  {
    title: "9. 改定",
    content:
      "本ポリシーは必要に応じて改定することがあります。改定後は本ページにて告知します。",
  },
  {
    title: "最終更新日",
    content: "2026年1月9日",
  },
];

export default function TaromiruPrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Section title="タロミル プライバシーポリシー" className="bg-white">
          <div className="max-w-3xl mx-auto">
            <Card>
              <div className="space-y-8">
                {policySections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
