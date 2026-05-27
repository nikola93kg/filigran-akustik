import { SectionShell } from '../ui/section-shell';
import { SectionHeading } from '../ui/section-heading';
import { Reveal } from '../ui/reveal';
import { siteContent } from '../../data/site-content';

const { gallery } = siteContent;

const galleryBlocks = [
  {
    gradient: 'linear-gradient(135deg, #102030 0%, #001828 100%)',
    gold: '0.08',
    size: 'row-span-2',
  },
  {
    gradient: 'linear-gradient(160deg, #001020 0%, #0a1a28 100%)',
    gold: '0.05',
    size: '',
  },
  {
    gradient: 'linear-gradient(120deg, #000818 0%, #102030 100%)',
    gold: '0.06',
    size: '',
  },
  {
    gradient: 'linear-gradient(150deg, #0a1828 0%, #000810 100%)',
    gold: '0.04',
    size: 'col-span-2',
  },
];

export function GalleryHighlightSection() {
  return (
    <SectionShell id="galerija" className="bg-[#000010] py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            subtitle={gallery.subtitle}
            title={gallery.headline}
            centered
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[200px]">
          {galleryBlocks.map((block, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <div
                className={`relative overflow-hidden h-full ${block.size}`}
                style={{ background: block.gradient }}
              >
                {/* Gold shimmer overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at ${i % 2 === 0 ? '30%' : '70%'} 40%, rgba(208,160,48,${block.gold}) 0%, transparent 60%)`,
                  }}
                />
                <div className="absolute inset-0 border border-white/5" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
