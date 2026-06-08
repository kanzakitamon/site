import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";

const policySections = [
  {
    title: "1. 事業者情報",
    content:
      "本アプリ「タロット占い - 悩みを文章で鑑定」は合同会社Adtunityが提供します。",
  },
  {
    title: "2. 取得する情報",
    content:
      "入力された相談文、端末情報（OS種別・バージョン等）、広告識別子（Google Advertising ID）、アプリ利用時のログ情報を取得する場合があります。本アプリはアカウント登録を必要とせず、氏名・住所・電話番号などの個人を直接特定する情報は取得しません。",
  },
  {
    title: "3. 利用目的",
    content:
      "鑑定結果の生成・提供、品質改善、問い合わせ対応、不正防止、広告配信の最適化のために利用します。",
  },
  {
    title: "4. 相談文の取り扱い（AI処理サービスへの送信）",
    content:
      "入力された相談文と引いたカードの情報は、鑑定文を生成する目的に限り、外部のAI処理サービス（OpenAI）へ送信されます。当社のサーバーは相談文を保存せず、生成処理の中継のみを行います。鑑定の品質確保のため、相談内容に氏名・連絡先などの個人を特定できる情報を入力しないようご案内しています。",
  },
  {
    title: "5. 鑑定履歴の保存場所",
    content:
      "鑑定履歴（相談文・引いたカード・鑑定結果）および利用回数などのデータは、利用者の端末内にのみ保存され、外部へ送信しません。アプリをアンインストールすると、これらのデータは削除されます。",
  },
  {
    title: "6. 広告配信について",
    content:
      "本アプリではGoogle AdMobを利用し、広告の表示・計測のために端末の広告識別子等が利用されることがあります。",
  },
  {
    title: "7. プッシュ通知",
    content:
      "「今日の1枚」をお知らせするためのローカル通知を送信する場合があります。通知はアプリの設定画面、または端末の設定からいつでも無効にできます。",
  },
  {
    title: "8. 外部送信・第三者提供",
    content:
      "前述のOpenAI（鑑定文の生成）およびGoogle（AdMobによる広告配信）以外へ、法令に基づく場合を除き、第三者へ個人情報を提供しません。",
  },
  {
    title: "9. 保存期間",
    content:
      "取得した情報は、利用目的の達成に必要な期間に限り保存し、その後適切に削除します。",
  },
  {
    title: "10. 安全管理",
    content:
      "サーバーとの通信は暗号化（HTTPS）により保護されます。取得した情報は適切な安全管理措置を講じ、漏えい・改ざん・不正アクセスの防止に努めます。",
  },
  {
    title: "11. 子どもの利用について",
    content:
      "本アプリは13歳未満の子どもを対象としていません。13歳未満の方は保護者の同意のもとでご利用ください。",
  },
  {
    title: "12. お問い合わせ",
    content:
      "本ポリシーに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。",
  },
  {
    title: "13. 改定",
    content:
      "本ポリシーは必要に応じて改定することがあります。改定後は本ページにて告知します。",
  },
  {
    title: "最終更新日",
    content: "2026年6月8日",
  },
];

export default function TarotPrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Section
          title="タロット占い - 悩みを文章で鑑定 プライバシーポリシー"
          className="bg-white"
        >
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
