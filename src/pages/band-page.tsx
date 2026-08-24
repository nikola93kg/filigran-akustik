import { SectionShell } from '../components/ui/section-shell';
import { SectionHeading } from '../components/ui/section-heading';
import { GoldButton } from '../components/ui/gold-button';
import { Reveal } from '../components/ui/reveal';
import { BookingCtaSection } from '../components/sections/booking-cta-section';
import { BandParallaxSection } from '../components/sections/band-parallax-section';
import { siteContent } from '../data/site-content';

const { bandPage } = siteContent;

export function BandPage() {
  return (
    <main>
      {/* Page hero */}
      <SectionShell className="relative flex min-h-[55vh] flex-col justify-end bg-[#000010] pt-32 pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(208,160,48,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0A030]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <SectionHeading subtitle={bandPage.hero.subtitle} title={bandPage.hero.headline} />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[#8898A8] text-lg leading-relaxed max-w-2xl">
              {bandPage.hero.intro}
            </p>
          </Reveal>
        </div>
      </SectionShell>

      <BandParallaxSection />

      {/* Sections */}
      {bandPage.sections.map((section, i) => (
        <SectionShell
          key={i}
          className={`py-24 ${i % 2 === 0 ? 'bg-[#001020]' : 'bg-[#000010]'}`}
        >
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <SectionHeading subtitle={section.subtitle} title={section.headline} />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[#8898A8] text-base leading-relaxed">{section.body}</p>
            </Reveal>
          </div>
        </SectionShell>
      ))}

      {/* Event types grid */}
      <SectionShell className="bg-[#001020] py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeading subtitle="Za koga sviramo" title="Vrste događaja" className="mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D0A030]/10 border border-[#D0A030]/10">
            {bandPage.eventTypes.map((et, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="bg-[#001020] p-8 flex flex-col gap-3 h-full">
                  <h3 className="text-[#D0A030] text-xs tracking-widest uppercase">{et.label}</h3>
                  <p className="text-[#8898A8] text-sm leading-relaxed">{et.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="mt-12 flex justify-center">
              <GoldButton to="/kontakt">{bandPage.cta}</GoldButton>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <BookingCtaSection />
    </main>
  );
}
