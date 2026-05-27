import { SectionShell } from '../components/ui/section-shell';
import { SectionHeading } from '../components/ui/section-heading';
import { Reveal } from '../components/ui/reveal';
import { InquiryForm } from '../components/forms/inquiry-form';
import { siteContent } from '../data/site-content';

const { contactPage } = siteContent;

export function ContactPage() {
  return (
    <main>
      {/* Page hero */}
      <SectionShell className="relative flex min-h-[40vh] flex-col justify-end bg-[#000010] pt-32 pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 60% 40%, rgba(208,160,48,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0A030]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <SectionHeading
              subtitle={contactPage.hero.subtitle}
              title={contactPage.hero.headline}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[#8898A8] text-base leading-relaxed max-w-xl">
              {contactPage.hero.intro}
            </p>
          </Reveal>
        </div>
      </SectionShell>

      {/* Form + contact info */}
      <SectionShell className="bg-[#001020] py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <Reveal>
              <InquiryForm />
            </Reveal>
          </div>

          {/* Contact info sidebar */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-8 pt-2">
              <div className="w-8 h-px bg-[#D0A030]" />
              {contactPage.info.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-[#D0A030] text-xs tracking-widest uppercase">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F0EAD8] text-sm hover:text-[#D0A030] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#F0EAD8] text-sm">{item.value}</span>
                  )}
                </div>
              ))}
              <div className="mt-4 border-l border-[#D0A030]/20 pl-4">
                <p className="text-[#8898A8] text-xs leading-relaxed">
                  Odgovaramo u roku od 24 sata. Za hitne upite, kontaktirajte nas direktno putem Instagrama.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </main>
  );
}
