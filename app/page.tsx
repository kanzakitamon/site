"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/content/site";
import {
  MobileIcon,
  SystemIcon,
  TeamIcon,
  ArrowRight,
  CheckIcon,
  ExternalIcon,
} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

const serviceIcons = [MobileIcon, SystemIcon, TeamIcon];

export default function Home() {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const heroLines = siteConfig.hero.catch.split("\n");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] glow-brand opacity-70" aria-hidden />
          <div className="pointer-events-none absolute top-20 -right-24 h-[26rem] w-[26rem] glow-accent opacity-50 animate-float" aria-hidden />

          <div className="relative container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {siteConfig.hero.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 text-4xl font-bold leading-[1.18] tracking-tight sm:text-6xl lg:text-7xl">
                  {heroLines.map((line, i) => (
                    <span key={i} className="block">
                      {i === heroLines.length - 1 ? (
                        <span className="text-gradient">{line}</span>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {siteConfig.hero.sub}
                </p>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-3 text-sm text-slate-400">
                  {siteConfig.hero.supplement}
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    onClick={() => goTo("contact")}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-ink shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 sm:w-auto"
                  >
                    {siteConfig.hero.primaryCta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => goTo("works")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
                  >
                    {siteConfig.hero.secondaryCta}
                  </button>
                </div>
              </Reveal>

              {/* stats */}
              <Reveal delay={380}>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
                  {siteConfig.stats.map((s) => (
                    <div key={s.label} className="bg-ink/40 px-6 py-7 text-center backdrop-blur ring-hairline">
                      <dt className="text-3xl font-bold text-white">
                        {s.value}
                        <span className="ml-1 text-base font-medium text-slate-400">
                          {s.unit}
                        </span>
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-slate-400">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>

          {/* bottom fade to white */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden />
        </section>

        {/* ============ PHILOSOPHY ============ */}
        <Section
          eyebrow={siteConfig.philosophy.eyebrow}
          title={siteConfig.philosophy.title}
          className="bg-white"
        >
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
              {siteConfig.philosophy.main}
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {siteConfig.philosophy.points.map((point, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/10 to-indigo-100 text-lg font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-7 py-6 text-center">
              <p className="leading-relaxed text-slate-700">
                {siteConfig.philosophy.closing}
              </p>
            </div>
          </Reveal>
        </Section>

        {/* ============ SERVICES ============ */}
        <Section
          id="services"
          eyebrow={siteConfig.services.eyebrow}
          title={siteConfig.services.title}
          lead={siteConfig.services.lead}
          className="bg-slate-50"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {siteConfig.services.items.map((service, i) => {
              const Icon = serviceIcons[i] ?? MobileIcon;
              return (
                <Reveal key={i} delay={i * 90}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.10)]">
                    <span className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand to-accent transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-indigo-600 text-white shadow-md shadow-brand/20">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        対応例
                      </p>
                      <ul className="space-y-2.5">
                        {service.examples.map((ex, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* ============ PROCESS ============ */}
        <Section
          id="process"
          eyebrow={siteConfig.process.eyebrow}
          title={siteConfig.process.title}
          className="bg-white"
        >
          <div className="mx-auto max-w-3xl">
            <ol className="relative space-y-2">
              {/* connecting line */}
              <span className="absolute left-[1.45rem] top-3 bottom-3 w-px bg-gradient-to-b from-brand/40 via-slate-200 to-transparent" aria-hidden />
              {siteConfig.process.steps.map((step, i) => (
                <li key={i}>
                  <Reveal delay={i * 70} className="relative flex gap-5 pb-2">
                    <span className="relative z-10 grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-sm font-bold text-brand shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 rounded-2xl border border-slate-200 bg-white px-6 py-4 transition-colors hover:border-brand/30">
                      <h3 className="font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal className="mt-8">
              <p className="rounded-2xl bg-slate-50 px-6 py-5 text-center text-sm leading-relaxed text-slate-600">
                {siteConfig.process.note}
              </p>
            </Reveal>
          </div>
        </Section>

        {/* ============ WORKS ============ */}
        <Section
          id="works"
          eyebrow="Works"
          title="実績"
          lead="自社サービスを起点に、企画から運用までの一連を自分たちで運用しています。"
          className="bg-slate-50"
        >
          <div className="mx-auto max-w-6xl space-y-8">
            <WorkCard
              data={siteConfig.service}
              cta={{ label: "サービスを見る", href: siteConfig.service.url, external: true }}
            />
            <WorkCard
              data={siteConfig.taromiru}
              cta={{
                label: "プライバシーポリシーを見る",
                href: siteConfig.taromiru.privacyPath,
                external: false,
              }}
              reverse
            />
          </div>
        </Section>

        {/* ============ CONSULTATIONS ============ */}
        <Section
          id="consultations"
          eyebrow={siteConfig.consultations.eyebrow}
          title={siteConfig.consultations.title}
          className="bg-white"
        >
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {siteConfig.consultations.items.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand/30 hover:bg-slate-50">
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                    {i + 1}
                  </span>
                  <p className="pt-1 leading-relaxed text-slate-700">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <button
              onClick={() => goTo("contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand"
            >
              この内容で相談する
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </Section>

        {/* ============ FAQ ============ */}
        <Section
          id="faq"
          eyebrow={siteConfig.faq.eyebrow}
          title={siteConfig.faq.title}
          className="bg-slate-50"
        >
          <Faq items={siteConfig.faq.items} />
        </Section>

        {/* ============ CONTACT ============ */}
        <Section
          id="contact"
          eyebrow={siteConfig.contact.eyebrow}
          title={siteConfig.contact.title}
          lead={siteConfig.contact.message}
          className="bg-white"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <div className="h-full rounded-2xl bg-ink p-8 text-white">
                <h3 className="text-xl font-bold">{siteConfig.company.name}</h3>
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      所在地
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-slate-200">
                      {siteConfig.company.address}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      事業
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {siteConfig.company.businesses.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200"
                        >
                          {b}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Work showcase card ---------------- */

interface WorkData {
  name: string;
  category: string;
  description: string;
  challenge: { title: string; content: string };
  solution: { title: string; content: string };
  result: { title: string; content: string };
  features: string[];
  tech: string;
  status?: string;
  imageUrls: string[];
}

function WorkCard({
  data,
  cta,
  reverse = false,
}: {
  data: WorkData;
  cta: { label: string; href: string; external: boolean };
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}>
          {/* text */}
          <div className="p-8 sm:p-10 lg:p-12 [direction:ltr]">
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {data.category}
            </span>
            <h3 className="mt-4 text-3xl font-bold text-slate-900">{data.name}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{data.description}</p>

            <div className="mt-7 space-y-3">
              {[data.challenge, data.solution, data.result].map((row, i) => (
                <div key={i} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3">
                  <span className="mt-0.5 flex-shrink-0 text-xs font-bold uppercase tracking-wide text-brand">
                    {row.title}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-700">
                    {row.content}
                  </span>
                </div>
              ))}
            </div>

            <ul className="mt-7 space-y-2.5">
              {data.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span>技術：{data.tech}</span>
              {data.status && (
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 font-medium text-amber-700">
                  {data.status}
                </span>
              )}
            </div>

            <div className="mt-7">
              <Link
                href={cta.href}
                {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
              >
                {cta.label}
                {cta.external ? (
                  <ExternalIcon className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </Link>
            </div>
          </div>

          {/* images */}
          <div className="flex flex-col gap-4 bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 [direction:ltr]">
            {data.imageUrls.slice(0, 2).map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <Image
                  src={src}
                  alt={`${data.name} スクリーンショット${i + 1}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
