import { SectionShell } from '../ui/section-shell';
import { GoldButton } from '../ui/gold-button';
import { Reveal } from '../ui/reveal';
import { siteContent } from '../../data/site-content';

const { bookingCta } = siteContent;

export function BookingCtaSection() {
  return (
    <SectionShell
      id="booking"
      className="relative bg-[#000010] py-32 md:py-48 overflow-hidden"
    >
      {/* Background gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(208,160,48,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Horizontal gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0A030]/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <Reveal>
          <p className="text-[#D0A030] text-xs font-medium tracking-[0.3em] uppercase">
            {bookingCta.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <h2 className="text-5xl md:text-6xl font-serif text-[#F0EAD8] leading-tight">
            {bookingCta.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="text-[#8898A8] text-base leading-relaxed max-w-md">
            {bookingCta.body}
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <GoldButton to="/kontakt">{bookingCta.cta}</GoldButton>
        </Reveal>
      </div>
    </SectionShell>
  );
}
