import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "フリ請 利用規約｜合同会社Adtunity",
  description:
    "フリ請（エンジニア自動請求書作成ツール）の利用規約。",
};

const termsSections = [
  {
    title: "第1条（適用）",
    content:
      "本規約は、アプリ「フリ請 - エンジニア自動請求書作成ツール」（以下「本アプリ」、提供：合同会社Adtunity）の利用に関わる一切に適用されます。",
  },
  {
    title: "第2条（料金・サブスクリプション）",
    content:
      "有料機能は自動更新サブスクリプション（初月無料）として提供されます。無料期間終了の24時間前までに解約されない場合、自動的に更新されます。解約は各ストア（App Store / Google Play）の購読管理から行えます。",
  },
  {
    title: "第3条（データ）",
    content:
      "本アプリのデータは端末内に保存されます。機種変更・端末故障・アプリ削除等によるデータ消失について、当社は責任を負いません。バックアップは利用者の責任で行ってください。",
  },
  {
    title: "第4条（生成物の責任）",
    content:
      "本アプリが生成する請求書・作業報告書・メール文面の内容、金額計算、税務・法令適合性の最終確認は、利用者の責任で行うものとします。",
  },
  {
    title: "第5条（禁止事項）",
    content:
      "法令違反・第三者の権利侵害・本アプリの不正利用を禁止します。",
  },
  {
    title: "第6条（免責）",
    content:
      "当社は、本アプリの利用または利用不能により生じた損害について、適用法令で許容される範囲で責任を負いません。",
  },
  {
    title: "第7条（規約の変更）",
    content:
      "当社は、必要に応じて本規約を変更することがあります。変更後は本ページにて告知します。",
  },
  {
    title: "第8条（お問い合わせ）",
    content:
      "本規約に関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。",
  },
  {
    title: "最終更新日",
    content: "2026年6月6日",
  },
];

export default function FriseiTermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Section title="フリ請 利用規約" className="bg-white">
          <div className="max-w-3xl mx-auto">
            <Card>
              <div className="space-y-8">
                {termsSections.map((section, index) => (
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
