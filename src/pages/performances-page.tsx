import { SectionShell } from '../components/ui/section-shell';
import { SectionHeading } from '../components/ui/section-heading';
import { GoldButton } from '../components/ui/gold-button';
import { Reveal } from '../components/ui/reveal';
import { siteContent } from '../data/site-content';

const { nastupiPage } = siteContent;

export function PerformancesPage() {
  return (
    <main>
      {/* Page hero */}
      <SectionShell className="relative flex min-h-[40vh] flex-col justify-end bg-[#000010] pt-32 pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 20% 60%, rgba(208,160,48,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0A030]/20 to-transparent" />
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <SectionHeading
              subtitle={nastupiPage.hero.subtitle}
              title={nastupiPage.hero.headline}
            />
          </Reveal>
        </div>
      </SectionShell>

      {/* Performances list */}
      <SectionShell className="bg-[#001020] py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D0A030]/10 border border-[#D0A030]/10">
            {nastupiPage.allPerformances.map((item, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <div className="bg-[#001020] p-8 flex flex-col gap-4 h-full hover:bg-[#102030] transition-colors duration-300">
                  <span className="text-[#D0A030] text-xs tracking-widest uppercase">
                    {item.type}
                  </span>
                  <h3 className="text-[#F0EAD8] text-xl font-serif">{item.title}</h3>
                  <div className="mt-auto flex items-center justify-between text-[#8898A8] text-sm">
                    <span>{item.location}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="text-[#8898A8] text-sm">
                Zainteresovani ste za nastup na vašem događaju?
              </p>
              <GoldButton to="/kontakt">{nastupiPage.cta}</GoldButton>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </main>
  );
}
