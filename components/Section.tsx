import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              {title}
            </h2>
            <div className="w-20 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

