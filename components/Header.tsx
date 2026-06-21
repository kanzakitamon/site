"use client";

import { useEffect, useState } from "react";

const menuItems = [
  { label: "事業内容", id: "services" },
  { label: "進め方", id: "process" },
  { label: "実績", id: "works" },
  { label: "ご相談例", id: "consultations" },
  { label: "FAQ", id: "faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 shadow-[0_1px_20px_rgba(15,23,42,0.06)]"
          : "border-slate-200/50"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <button
            onClick={goTop}
            className="group flex items-center gap-2.5 cursor-pointer"
            aria-label="トップへ"
          >
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-indigo-600 text-white font-black text-lg shadow-sm transition-transform group-hover:scale-105">
              A
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Adtunity
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3.5 py-2 rounded-lg hover:bg-slate-100/70"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => goTo("contact")}
              className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-brand transition-colors shadow-sm"
            >
              お問い合わせ
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-50 grid place-items-center h-11 w-11 -mr-1.5 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            <span className="relative block w-6 h-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur-xl transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ height: open ? "100dvh" : 0 }}
      >
        <nav className="flex flex-col gap-1 px-6 pt-24 pb-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="text-left text-lg font-medium text-slate-800 py-3.5 border-b border-slate-100 transition-colors hover:text-brand"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => goTo("contact")}
            className="mt-6 inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-brand transition-colors"
          >
            お問い合わせ
          </button>
        </nav>
      </div>
    </header>
  );
}
