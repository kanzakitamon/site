import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { siteConfig } from "@/content/site";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Section title={siteConfig.privacy.title} className="bg-white">
          <div className="max-w-3xl mx-auto">
            <Card>
              <div className="space-y-8">
                {siteConfig.privacy.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

