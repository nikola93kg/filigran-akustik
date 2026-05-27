import { Link } from 'react-router-dom';
import { SectionShell } from '../ui/section-shell';
import { SectionHeading } from '../ui/section-heading';
import { GoldButton } from '../ui/gold-button';
import { Reveal } from '../ui/reveal';
import { siteContent } from '../../data/site-content';

const { performances } = siteContent;

export function PerformancesPreviewSection() {
  return (
    <SectionShell id="nastupi" className="bg-[#001020] py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            subtitle={performances.subtitle}
            title={performances.headline}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D0A030]/10 border border-[#D0A030]/10">
          {performances.items.map((item, i) => (
            <Reveal key={i} delay={0.1 * i}>
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

        <Reveal delay={0.35}>
          <div className="mt-10 flex justify-center">
            <GoldButton to="/nastupi" variant="outline">
              {performances.cta}
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
