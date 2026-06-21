"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

const navLinks = [
  { label: "実績", id: "works" },
  { label: "ご相談例", id: "consultations" },
  { label: "FAQ", id: "faq" },
  { label: "お問い合わせ", id: "contact" },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-ink text-slate-300">
      {/* glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] glow-brand opacity-40" />

      <div className="relative container mx-auto px-5 sm:px-6 lg:px-8">
        {/* tagline */}
        <div className="border-b border-white/10 py-14 text-center">
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-200">
            感謝と敬意を持って人と接し、
            <br className="hidden sm:block" />
            豊かで温かなつながりを大切にします。
          </p>
        </div>

        {/* main */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2">
          <div>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2.5"
              aria-label="トップへ"
            >
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-indigo-600 text-white font-black text-lg">
                A
              </span>
              <span className="text-xl font-bold text-white">Adtunity</span>
            </button>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-md">
              {siteConfig.company.name}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-400 max-w-md">
              {siteConfig.company.address}
            </p>
            <p className="mt-4 flex flex-wrap gap-2">
              {siteConfig.company.businesses.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {b}
                </span>
              ))}
            </p>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              サイトマップ
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  個人情報の取り扱い
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.company.name}
          </p>
          <p className="text-xs text-slate-500">{siteConfig.company.nameEn}</p>
        </div>
      </div>
    </footer>
  );
}
