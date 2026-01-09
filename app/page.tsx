"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/content/site";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToService = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 1. ファーストビュー */}
        <Section className="bg-gradient-to-b from-slate-50 to-white min-h-[70vh] flex items-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight break-words">
              {siteConfig.hero.catch.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < siteConfig.hero.catch.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-6 break-words px-4">
              {siteConfig.hero.sub.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < siteConfig.hero.sub.split('\n').length - 1 && <br className="hidden sm:inline" />}
                </span>
              ))}
            </p>
            <p className="text-lg text-slate-500 mb-10">
              {siteConfig.hero.supplement}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="px-10 py-4 bg-slate-700 text-white font-semibold text-lg rounded-lg hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
              >
                相談する
              </button>
              <button
                onClick={scrollToService}
                className="px-10 py-4 bg-white text-slate-700 font-semibold text-lg rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                自社サービスを見る
              </button>
            </div>
          </div>
        </Section>

        {/* 2. 思想セクション */}
        <Section title={siteConfig.philosophy.title} className="bg-white">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-50/50 border border-slate-200">
              <p className="text-xl text-slate-700 mb-8 leading-relaxed break-words text-center px-4">
                {siteConfig.philosophy.main.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < siteConfig.philosophy.main.split('\n').length - 1 && <br className="hidden sm:inline" />}
                  </span>
                ))}
              </p>
              <ul className="space-y-4 mb-8">
                {siteConfig.philosophy.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-slate-600"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-400 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-lg leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-slate-600 leading-relaxed text-center break-words px-4">
                {siteConfig.philosophy.closing.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < siteConfig.philosophy.closing.split('\n').length - 1 && <br className="hidden sm:inline" />}
                  </span>
                ))}
              </p>
            </Card>
          </div>
        </Section>

        {/* 3. 事業概要 */}
        <Section id="services" title={siteConfig.services.title} className="bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {siteConfig.services.items.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white"
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 break-words">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg break-words">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-500 mb-2">
                      対応例
                    </p>
                    <ul className="space-y-2">
                      {service.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="text-slate-500 text-sm flex items-start gap-2"
                        >
                          <span className="text-slate-400 mt-1">•</span>
                          <span className="break-words">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* 4. 進め方 */}
        <Section id="process" title={siteConfig.process.title} className="bg-white">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-50/50 border border-slate-200">
              <ol className="space-y-6 mb-8">
                {siteConfig.process.steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-slate-700"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-lg leading-relaxed pt-1 break-words">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-slate-500 text-center italic border-t border-slate-200 pt-6">
                {siteConfig.process.note}
              </p>
            </Card>
          </div>
        </Section>

        {/* 5. 自社サービス（うちプリ！） */}
        <Section
          id="service"
          title={siteConfig.service.title}
          className="bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-50/50 rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 flex flex-col justify-center bg-white">
                  <h3 className="text-4xl font-bold text-slate-800 mb-6 break-words">
                    {siteConfig.service.name}
                  </h3>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed break-words">
                    {siteConfig.service.description}
                  </p>

                  {/* 課題→解き方→形 */}
                  <div className="space-y-4 mb-8 p-6 bg-white rounded-lg border border-slate-200">
                    <div>
                      <span className="text-sm font-semibold text-slate-500">
                        {siteConfig.service.challenge.title}：
                      </span>
                      <span className="text-slate-600 ml-2 break-words">
                        {siteConfig.service.challenge.content}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-500">
                        {siteConfig.service.solution.title}：
                      </span>
                      <span className="text-slate-600 ml-2 break-words">
                        {siteConfig.service.solution.content}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-500">
                        {siteConfig.service.result.title}：
                      </span>
                      <span className="text-slate-600 ml-2 break-words">
                        {siteConfig.service.result.content}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {siteConfig.service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 text-slate-600"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-400 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="flex-1 text-lg leading-relaxed break-words">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-400 mb-6">
                    技術: {siteConfig.service.tech}
                  </p>
                  <Link
                    href={siteConfig.service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-slate-700 text-white font-semibold text-lg rounded-lg hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
                  >
                    サービスを見る →
                  </Link>
                </div>
                <div className="flex flex-col gap-4 p-4 bg-white border-l border-slate-200">
                  <div className="relative aspect-square bg-white">
                    <Image
                      src="/works/uchipri_PC.png"
                      alt={`${siteConfig.service.name} - 画像1`}
                      fill
                      className="object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="relative aspect-square bg-white">
                    <Image
                      src="/works/uchipri_PC2.png"
                      alt={`${siteConfig.service.name} - 画像2`}
                      fill
                      className="object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </Section>

        {/* 6. 自社サービス：タロミル */}
        <Section id="taromiru" className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-50/50 rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 flex flex-col justify-center bg-white">
                  <h3 className="text-4xl font-bold text-slate-800 mb-6 break-words">
                    {siteConfig.taromiru.name}
                  </h3>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed break-words">
                    {siteConfig.taromiru.description}
                  </p>

                  <div className="space-y-4 mb-8 p-6 bg-white rounded-lg border border-slate-200">
                    <div>
                      <span className="text-sm font-semibold text-slate-500">
                        {siteConfig.taromiru.challenge.title}：
                      </span>
                      <span className="text-slate-600 ml-2 break-words">
                        {siteConfig.taromiru.challenge.content}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-500">
                        {siteConfig.taromiru.solution.title}：
                      </span>
                      <span className="text-slate-600 ml-2 break-words">
                        {siteConfig.taromiru.solution.content}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-500">
                        {siteConfig.taromiru.result.title}：
                      </span>
                      <span className="text-slate-600 ml-2 break-words">
                        {siteConfig.taromiru.result.content}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {siteConfig.taromiru.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 text-slate-600"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-400 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="flex-1 text-lg leading-relaxed break-words">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-slate-400 mb-2">
                    技術: {siteConfig.taromiru.tech}
                  </p>
                  <p className="text-sm text-slate-500 mb-6">
                    {siteConfig.taromiru.status}
                  </p>
                  <Link
                    href={siteConfig.taromiru.privacyPath}
                    className="inline-block px-10 py-4 bg-slate-700 text-white font-semibold text-lg rounded-lg hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
                  >
                    プライバシーポリシーを見る
                  </Link>
                </div>
                <div className="flex flex-col gap-4 p-4 bg-white border-l border-slate-200">
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={siteConfig.taromiru.imageUrls[0]}
                      alt={`${siteConfig.taromiru.name} - 画像1`}
                      fill
                      className="object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={siteConfig.taromiru.imageUrls[1]}
                      alt={`${siteConfig.taromiru.name} - 画像2`}
                      fill
                      className="object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>


        {/* 7. よくある相談 */}
        <Section id="consultations" title={siteConfig.consultations.title} className="bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-slate-200">
              <ul className="space-y-4">
                {siteConfig.consultations.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-slate-700 p-4 bg-slate-50/50 rounded-lg hover:bg-slate-100/50 transition-colors"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-400 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-lg leading-relaxed break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        {/* 7. FAQ */}
        <Section id="faq" title={siteConfig.faq.title} className="bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {siteConfig.faq.items.map((item, index) => (
                <Card
                  key={index}
                  className="bg-slate-50/50 border border-slate-200"
                >
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    Q. {item.q}
                  </h4>
                  <p className="text-slate-600 leading-relaxed break-words">
                    A. {item.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* 9. お問い合わせ */}
        <Section id="contact" title={siteConfig.contact.title} className="bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-slate-600 mb-12 text-xl break-words px-4">
              {siteConfig.contact.message.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < siteConfig.contact.message.split('\n').length - 1 && <br className="hidden sm:inline" />}
                </span>
              ))}
            </p>
            <Card className="shadow-md border border-slate-200 bg-white">
              <ContactForm />
            </Card>
          </div>
        </Section>

        {/* 10. 会社概要 */}
        <Section title="会社概要" className="bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-slate-50/50 border border-slate-200">
              <dl className="space-y-8">
                <div>
                  <dt className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                    会社名
                  </dt>
                  <dd className="text-slate-800 text-xl font-medium break-words">
                    {siteConfig.company.name}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                    所在地
                  </dt>
                  <dd className="text-slate-700 text-lg leading-relaxed break-words">
                    {siteConfig.company.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                    事業
                  </dt>
                  <dd className="text-slate-700 text-lg break-words">
                    {siteConfig.company.businesses.join(" / ")}
                  </dd>
                </div>
              </dl>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
