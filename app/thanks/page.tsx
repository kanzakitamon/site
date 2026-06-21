import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Section className="bg-white">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5l5 5 11-12" />
                </svg>
              </span>
              <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {siteConfig.thanks.title}
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                {siteConfig.thanks.message}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-brand"
              >
                トップへ戻る
              </Link>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

