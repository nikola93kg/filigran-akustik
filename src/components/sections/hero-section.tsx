import { SectionShell } from '../ui/section-shell';
import { GoldButton } from '../ui/gold-button';
import { NoiseOverlay } from '../ui/noise-overlay';
import { Reveal } from '../ui/reveal';
import { siteContent } from '../../data/site-content';

const { hero } = siteContent;

export function HeroSection() {
  return (
    <SectionShell
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center bg-[#000010] overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(208,160,48,0.07) 0%, transparent 70%)',
        }}
      />
      <NoiseOverlay />

      <div className="relative z-20 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <Reveal>
          <p className="text-[#D0A030] text-xs font-medium tracking-[0.3em] uppercase">
            {hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <h1
            className="text-7xl md:text-9xl text-[#F0EAD8] leading-none"
            style={{ fontFamily: "'Edwardian Script ITC', cursive" }}
          >
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="text-[#8898A8] text-lg leading-relaxed max-w-lg">
            {hero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <GoldButton to="/kontakt">{hero.cta}</GoldButton>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <Reveal delay={0.6}>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[#F0EAD8] text-xs tracking-widest uppercase">Skroluj</span>
          <div className="w-px h-8 bg-[#D0A030]" />
        </div>
      </Reveal>
    </SectionShell>
  );
}
