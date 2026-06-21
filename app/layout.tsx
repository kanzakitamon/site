import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const description =
  "合同会社Adtunityは、アプリ開発・受託開発・SESを手がける開発会社です。企画の整理から開発・公開後の改善運用までを一貫して支援します。";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omonch.jp"),
  title: {
    default: `${siteConfig.company.name}｜アプリ開発・受託開発・SES`,
    template: `%s｜${siteConfig.company.name}`,
  },
  description,
  keywords: [
    "アプリ開発",
    "受託開発",
    "SES",
    "システム開発",
    "Adtunity",
    "合同会社Adtunity",
  ],
  openGraph: {
    title: `${siteConfig.company.name}｜アプリ開発・受託開発・SES`,
    description,
    url: "https://www.omonch.jp",
    siteName: siteConfig.company.name,
    locale: "ja_JP",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.company.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.name}｜アプリ開発・受託開発・SES`,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    url: "https://www.omonch.jp",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address,
      addressCountry: "JP",
    },
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
