import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "フリ請 プライバシーポリシー｜合同会社Adtunity",
  description:
    "フリ請（エンジニア自動請求書作成ツール）のプライバシーポリシー。データは端末内にのみ保存され、当社サーバーには送信・収集されません。",
};

const policySections = [
  {
    title: "1. 事業者情報",
    content:
      "本アプリ「フリ請 - エンジニア自動請求書作成ツール」は合同会社Adtunityが提供します。",
  },
  {
    title: "2. データの保存場所",
    content:
      "本アプリが扱う自社情報・取引先・契約・請求などのデータは、原則として利用者の端末内にのみ保存され、当社のサーバーには送信・収集されません。",
  },
  {
    title: "3. 取得・利用する情報",
    content:
      "本アプリは、利用者が入力した情報（氏名・屋号・連絡先・口座情報・取引先情報・稼働時間等）を、請求書・作業報告書の作成およびメール文面の生成のために端末内で利用します。当社がこれらを取得・閲覧することはありません。",
  },
  {
    title: "4. 第三者提供",
    content:
      "当社は、上記データを第三者に提供しません。メールの送信は、端末のメールアプリ等を通じて利用者自身が行います。",
  },
  {
    title: "5. 課金情報",
    content:
      "サブスクリプションの購入・管理は App Store / Google Play を通じて行われ、決済情報は各プラットフォームが取り扱います。当社が決済情報を取得することはありません。",
  },
  {
    title: "6. 通知",
    content:
      "請求作成リマインド等の通知は、端末内でスケジュールされるローカル通知です。通知のために情報を外部送信することはありません。",
  },
  {
    title: "7. バックアップ",
    content:
      "利用者がエクスポート機能で出力したバックアップファイルの保管・管理は、利用者の責任で行ってください。",
  },
  {
    title: "8. 安全管理",
    content:
      "データは端末内に保存されます。端末の紛失・盗難等に備え、画面ロック等の端末側のセキュリティ機能のご利用を推奨します。",
  },
  {
    title: "9. お問い合わせ",
    content:
      "本ポリシーに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。",
  },
  {
    title: "10. 改定",
    content:
      "本ポリシーは必要に応じて改定することがあります。改定後は本ページにて告知します。",
  },
  {
    title: "最終更新日",
    content: "2026年6月6日",
  },
];

export default function FriseiPrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Section title="フリ請 プライバシーポリシー" className="bg-white">
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
