// サイト全体の文言・会社情報・実績情報を集約

export const siteConfig = {
  company: {
    name: "合同会社Adtunity",
    nameEn: "Adtunity LLC",
    address: "〒103-0022 東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階",
    businesses: ["アプリ開発", "受託開発", "SES"],
    contactEmail: "contact@example.com",
  },
  hero: {
    eyebrow: "Adtunity Portfolio",
    catch: "Adtunityがつくった、\n公開中のプロダクト。",
    sub: "合同会社Adtunityは、アプリやWebサービスを自分たちで企画・開発・運用している開発チームです。受託開発・SESのご相談も承っています。",
    supplement: "気になるサービスは、そのまま触ってみてください。",
    primaryCta: "実績を見る",
    secondaryCta: "お問い合わせ",
  },
  stats: [
    { value: "3", unit: "サービス", label: "自社で公開・運用中" },
    { value: "受託", unit: "対応", label: "アプリ・業務システム開発" },
    { value: "SES", unit: "対応", label: "開発現場への参画" },
  ],
  works: {
    eyebrow: "Works",
    title: "実績",
    lead: "アプリやWebサービスを、自分たちで企画・開発・運用しています。気になるものは実際に触ってみてください。",
    items: [
      {
        name: "うちプリ！",
        category: "Webサービス",
        tagline: "小学生の学習プリントを、すぐに作れる。",
        description:
          "学年と単元を選ぶだけで、印刷してすぐ使える問題と解答のプリントを自動生成。スマホからコンビニ印刷までつなげられます。",
        points: [
          "学年・単元を選ぶだけで自動生成",
          "問題＋解答の2ページPDFを出力",
          "登録不要・作成履歴から再ダウンロード",
          "スマホ→コンビニ印刷を想定した導線",
        ],
        tech: "Next.js / TypeScript / PDF生成",
        status: "公開中（2026/7/31まで無料）",
        url: "https://www.rakupri.com",
        cover: "https://www.rakupri.com/og-image.png",
      },
      {
        name: "こども個性マップ診断",
        category: "Webサービス / 診断",
        tagline: "わが子の「好き」と「得意」を、見える化する。",
        description:
          "観察質問と実技チェックから、子どもの個性を10タイプで可視化。相性の良い習い事まで提案します。登録不要・端末内で完結します。",
        points: [
          "個性を10分類のマップで表示",
          "12の基礎能力をレーダーで可視化",
          "14種類の習い事との相性を提案",
          "登録不要・完全オフライン動作",
        ],
        tech: "Next.js / TypeScript",
        status: "公開中（基本無料・詳細レポート¥380）",
        url: "https://kodomo.omonch.jp",
        cover: "https://kodomo.omonch.jp/og.png",
      },
      {
        name: "ふたり暮らし負担診断",
        category: "Webサービス / 診断",
        tagline: "ふたりの「負担バランス」を、3分で見える化。",
        description:
          "家事・生活費・育児・価値観の負担バランスと意見の一致度を診断。結果はパートナーにURLで共有でき、話し合いのきっかけになります。",
        points: [
          "約3分・登録不要で診断",
          "負担バランスと一致度を可視化",
          "結果をURLでパートナーに共有",
          "端末内保存でプライバシーに配慮",
        ],
        tech: "Next.js / TypeScript",
        status: "公開中（基本無料・詳細レポート¥480〜）",
        url: "https://futari.omonch.jp",
        cover: "https://futari.omonch.jp/og.png",
      },
    ],
  },
  consultations: {
    eyebrow: "Use Cases",
    title: "こんなご相談をいただきます",
    lead: "自社開発で得た知見を活かして、受託開発・SESのご相談もお受けしています。",
    items: [
      "何を作るべきかという段階から相談したい",
      "最小版だけ先に出して、反応を見たい",
      "既存システムが運用で詰まっている",
      "改修の優先順位が決められない",
      "引き継ぎや保守まで見据えて任せたい",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "よくある質問",
    items: [
      {
        q: "まだ仕様が固まっていなくても大丈夫ですか？",
        a: "大丈夫です。最初に判断の基準と優先順位を整理するところから始めます。",
      },
      {
        q: "小さな改修だけでも依頼できますか？",
        a: "可能です。運用で詰まる箇所を解消するだけでも、十分に価値が出ます。",
      },
      {
        q: "途中で内容が変わったらどうなりますか？",
        a: "変わる前提で進めます。変わったときに破綻しない作り方を選びます。",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "お問い合わせ",
    message: "内容を確認のうえ、順次ご連絡します。検討段階のご相談でも構いません。",
  },
  privacy: {
    title: "個人情報の取り扱い",
    sections: [
      { title: "取得する情報", content: "氏名、会社名、メールアドレス、お問い合わせ内容" },
      { title: "利用目的", content: "お問い合わせへの回答・連絡" },
      { title: "第三者提供", content: "法令等を除き行いません" },
      { title: "保管期間", content: "対応に必要な期間" },
      { title: "管理", content: "適切な安全管理を行います" },
      {
        title: "連絡先",
        content: "合同会社Adtunity（メールアドレスはサイト内に記載）",
      },
    ],
  },
  thanks: {
    title: "送信を受け付けました",
    message: "内容を確認後、ご連絡します。",
  },
};
