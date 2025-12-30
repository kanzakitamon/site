"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white">
      {/* 上部メッセージセクション */}
      <div className="bg-stone-50 py-12 border-b border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-700 text-lg leading-relaxed max-w-3xl mx-auto">
            私たちは、感謝と敬意を持って人と接し、豊かで温かなコミュニティを築きます。
          </p>
        </div>
      </div>

      {/* メインフッター */}
      <div className="bg-slate-800 text-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* 左側：会社情報 */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {siteConfig.company.name}
                </h3>
              </div>
              <div className="text-slate-300 space-y-1 text-sm leading-relaxed">
                <p>{siteConfig.company.address}</p>
              </div>
            </div>

            {/* 右側：ナビゲーションリンク */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={scrollToTop}
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
                    >
                      TOP
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
                    >
                      {siteConfig.services.title}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("process")}
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
                    >
                      {siteConfig.process.title}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("service")}
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
                    >
                      {siteConfig.service.title}
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection("consultations")}
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
                    >
                      {siteConfig.consultations.title}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("faq")}
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
                    >
                      {siteConfig.faq.title}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
                    >
                      {siteConfig.contact.title}
                    </button>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
                    >
                      個人情報の取り扱い
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 下部：コピーライト */}
          <div className="border-t border-slate-700 pt-8">
            <div className="text-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} by {siteConfig.company.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
