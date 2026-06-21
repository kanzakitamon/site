import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
