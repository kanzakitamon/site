"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border bg-white transition-colors ${
              isOpen ? "border-brand/30 shadow-[0_8px_30px_rgba(37,99,235,0.08)]" : "border-slate-200"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-3 text-base sm:text-lg font-semibold text-slate-900">
                <span className="text-brand font-bold">Q</span>
                {item.q}
              </span>
              <span
                className={`grid place-items-center h-7 w-7 flex-shrink-0 rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-brand bg-brand text-white"
                    : "border-slate-300 text-slate-500"
                }`}
                aria-hidden
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pl-12 text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
