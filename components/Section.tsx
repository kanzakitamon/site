import { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  align?: "center" | "left";
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  align = "center",
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  const isCenter = align === "center";

  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className={`container mx-auto px-5 sm:px-6 lg:px-8 ${containerClassName}`}>
        {(title || eyebrow) && (
          <Reveal
            className={`mb-12 sm:mb-16 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}
          >
            {eyebrow && (
              <span
                className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-brand mb-4 ${
                  isCenter ? "justify-center" : ""
                }`}
              >
                <span className="h-px w-6 bg-brand/50" aria-hidden />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight tracking-tight">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{lead}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
