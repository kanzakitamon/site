"use client";

export default function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "事業概要", id: "services" },
    { label: "アプローチ", id: "process" },
    { label: "実績", id: "service" },
    { label: "よくある相談", id: "consultations" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="text-2xl font-bold text-slate-800 cursor-pointer hover:text-slate-600 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            合同会社Adtunity
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors px-3 py-2 rounded-md hover:bg-slate-50"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 text-sm font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-800 transition-colors ml-2"
            >
              お問い合わせ
            </button>
          </nav>
          <button
            onClick={() => scrollToSection("contact")}
            className="md:hidden px-6 py-2 text-sm font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
          >
            お問い合わせ
          </button>
        </div>
      </div>
    </header>
  );
}
