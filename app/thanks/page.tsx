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
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {siteConfig.thanks.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {siteConfig.thanks.message}
              </p>
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
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

