import { SectionShell } from '../ui/section-shell';
import { SectionHeading } from '../ui/section-heading';
import { GoldButton } from '../ui/gold-button';
import { Reveal } from '../ui/reveal';
import { siteContent } from '../../data/site-content';

const { bandStory } = siteContent;

export function BandStorySection() {
  return (
    <SectionShell
      id="bend"
      className="bg-[#001020] py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text */}
        <div>
          <Reveal>
            <SectionHeading subtitle={bandStory.subtitle} title={bandStory.headline} />
          </Reveal>

          <div className="space-y-5">
            {bandStory.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <p className="text-[#8898A8] text-base leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-3">
              {bandStory.eventTypes.map((type) => (
                <span
                  key={type}
                  className="border border-[#D0A030]/30 text-[#D0A030] text-xs tracking-widest uppercase px-4 py-2"
                >
                  {type}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-10">
              <GoldButton to="/bend" variant="outline">
                O bendu
              </GoldButton>
            </div>
          </Reveal>
        </div>

        {/* Visual block */}
        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, #102030 0%, #001020 40%, #000510 100%)',
              }}
            />
            {/* Gold accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D0A030] to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0A030] to-transparent opacity-40" />
            {/* Decorative text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[120px] font-serif text-[#D0A030]/5 select-none leading-none"
                aria-hidden="true"
              >
                FA
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
