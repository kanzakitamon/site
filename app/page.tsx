"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/content/site";
import { ArrowRight, CheckIcon, ExternalIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

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
                    onClick={() => goTo("works")}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-ink shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 sm:w-auto"
                  >
                    {siteConfig.hero.primaryCta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => goTo("contact")}
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
                        {s.unit && (
                          <span className="ml-1 text-base font-medium text-slate-400">
                            {s.unit}
                          </span>
                        )}
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
        </section>

        {/* ============ WORKS（中心） ============ */}
        <Section
          id="works"
          eyebrow={siteConfig.works.eyebrow}
          title={siteConfig.works.title}
          lead={siteConfig.works.lead}
          className="bg-slate-50"
        >
          <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12">
            {siteConfig.works.items.map((work, i) => (
              <WorkCard key={work.name} data={work} index={i} reverse={i % 2 === 1} />
            ))}
          </div>
        </Section>

        {/* ============ CONSULTATIONS ============ */}
        <Section
          id="consultations"
          eyebrow={siteConfig.consultations.eyebrow}
          title={siteConfig.consultations.title}
          lead={siteConfig.consultations.lead}
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
  tagline: string;
  description: string;
  points: string[];
  tech: string;
  status?: string;
  url: string;
  cover: string;
}

function WorkCard({
  data,
  index,
  reverse = false,
}: {
  data: WorkData;
  index: number;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* cover */}
          <div
            className={`relative aspect-[1200/630] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 lg:aspect-auto lg:min-h-[22rem] ${
              reverse ? "lg:order-2" : ""
            }`}
          >
            <Image
              src={data.cover}
              alt={`${data.name} のサービス画面`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>

          {/* text */}
          <div className={`p-8 sm:p-10 lg:p-12 ${reverse ? "lg:order-1" : ""}`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                {data.category}
              </span>
              {data.status && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {data.status}
                </span>
              )}
            </div>

            <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              {data.name}
            </h3>
            <p className="mt-2 text-lg font-medium text-slate-700">
              {data.tagline}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              {data.description}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {data.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-slate-400">技術：{data.tech}</p>

            <div className="mt-6">
              <Link
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
              >
                サービスを見る
                <ExternalIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
