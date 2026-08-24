import type { MotionValue } from 'framer-motion';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { PointerEvent } from 'react';
import { useRef } from 'react';
import { siteContent } from '../../data/site-content';
import { SectionHeading } from '../ui/section-heading';
import { SectionShell } from '../ui/section-shell';
import { Reveal } from '../ui/reveal';

const { parallax } = siteContent.bandPage;

const spring = {
  stiffness: 72,
  damping: 24,
  mass: 0.8,
};

interface MemberSectionConfig {
  accent: string;
  instrumentLabel: string;
  align: 'left' | 'right';
  imageY: [number, number];
  backdropY: [number, number];
  pointerX: number;
  pointerY: number;
  rotate: number;
  objectPosition: string;
}

const memberSections: MemberSectionConfig[] = [
  {
    accent: '01',
    instrumentLabel: 'Saksofon / klarinet',
    align: 'right',
    imageY: [-96, 84],
    backdropY: [52, -58],
    pointerX: -24,
    pointerY: 16,
    rotate: 3,
    objectPosition: '50% 50%',
  },
  {
    accent: '02',
    instrumentLabel: 'Violina / vokal',
    align: 'left',
    imageY: [-78, 96],
    backdropY: [64, -46],
    pointerX: 26,
    pointerY: 18,
    rotate: -3.5,
    objectPosition: '50% 50%',
  },
  {
    accent: '03',
    instrumentLabel: 'Akustična gitara',
    align: 'right',
    imageY: [-88, 70],
    backdropY: [46, -64],
    pointerX: -20,
    pointerY: -16,
    rotate: 2,
    objectPosition: '52% 50%',
  },
  {
    accent: '04',
    instrumentLabel: 'Bas gitara',
    align: 'left',
    imageY: [-68, 104],
    backdropY: [58, -54],
    pointerX: 30,
    pointerY: 14,
    rotate: -2,
    objectPosition: '52% 50%',
  },
  {
    accent: '05',
    instrumentLabel: 'Perkusije / kahon',
    align: 'right',
    imageY: [-82, 90],
    backdropY: [48, -68],
    pointerX: -28,
    pointerY: 22,
    rotate: 3.5,
    objectPosition: '50% 50%',
  },
];

type BandMember = (typeof parallax.members)[number];

export function BandParallaxSection() {
  return (
    <div className="relative overflow-hidden bg-[#000010]">
      <SectionShell className="relative bg-[#000010] py-20 md:py-24">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D0A030]/25 to-transparent" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'linear-gradient(135deg, rgba(16,32,48,0.35) 0%, transparent 44%, rgba(208,160,48,0.05) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionHeading
              subtitle={parallax.subtitle}
              title={parallax.headline}
              centered
              className="mb-7"
            />
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#8898A8]">
              {parallax.body}
            </p>
          </Reveal>
        </div>
      </SectionShell>

      {parallax.members.map((member, index) => {
        const config = memberSections[index % memberSections.length];

        return (
          <BandMemberParallaxSection
            key={member.name}
            member={member}
            config={config}
            index={index}
          />
        );
      })}
    </div>
  );
}

interface BandMemberParallaxSectionProps {
  member: BandMember;
  config: MemberSectionConfig;
  index: number;
}

function BandMemberParallaxSection({
  member,
  config,
  index,
}: BandMemberParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const prefersReduced = useReducedMotion();
  const reduced = Boolean(prefersReduced);
  const reversed = config.align === 'left';
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const textY = useSpring(
    useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [32, -28]),
    spring,
  );

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    if (!rect.width || !rect.height) {
      return;
    }

    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <SectionShell
      className={`relative overflow-hidden py-20 md:py-28 ${
        index % 2 === 0 ? 'bg-[#000010]' : 'bg-[#001020]'
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D0A030]/20 to-transparent"
      />

      <div
        ref={sectionRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative z-10 mx-auto grid min-h-[78svh] max-w-7xl grid-cols-1 items-center gap-12 touch-pan-y lg:grid-cols-2 lg:gap-20"
      >
        <motion.div
          className={reversed ? 'lg:order-2' : undefined}
          style={{ y: textY }}
        >
          <Reveal>
            <p className="text-sm font-medium uppercase text-[#D0A030]">
              Član {config.accent}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="mt-5 max-w-xl font-serif text-4xl leading-tight text-[#F0EAD8] md:text-6xl">
              {member.name}
            </h3>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#8898A8]">
              {member.role}
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8 inline-flex border-l border-[#D0A030]/45 py-2 pl-5">
              <p className="text-sm font-medium text-[#F0EAD8]">
                {config.instrumentLabel}
              </p>
            </div>
          </Reveal>
        </motion.div>

        <MemberVisual
          member={member}
          config={config}
          mouseX={mouseX}
          mouseY={mouseY}
          scrollYProgress={scrollYProgress}
          reduced={reduced}
        />
      </div>
    </SectionShell>
  );
}

interface MotionContext {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  reduced: boolean;
}

interface MemberVisualProps extends MotionContext {
  member: BandMember;
  config: MemberSectionConfig;
}

function MemberVisual({
  member,
  config,
  mouseX,
  mouseY,
  scrollYProgress,
  reduced,
}: MemberVisualProps) {
  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : config.imageY),
    spring,
  );
  const pointerX = useSpring(
    useTransform(mouseX, (value) => (reduced ? 0 : value * config.pointerX)),
    spring,
  );
  const pointerY = useSpring(
    useTransform(mouseY, (value) => (reduced ? 0 : value * config.pointerY)),
    spring,
  );
  const rotate = useSpring(
    useTransform(mouseX, (value) => (reduced ? 0 : config.rotate + value * 1.2)),
    spring,
  );

  return (
    <div className={config.align === 'left' ? 'lg:order-1' : undefined}>
      <div className="relative mx-auto min-h-[520px] w-full max-w-[560px] sm:min-h-[620px]">
        <MemberDepthBackdrop
          member={member}
          config={config}
          mouseX={mouseX}
          mouseY={mouseY}
          scrollYProgress={scrollYProgress}
          reduced={reduced}
        />

        <div className="absolute left-1/2 top-1/2 z-20 aspect-[4/5] w-[78%] max-w-[430px] -translate-x-1/2 -translate-y-1/2">
          <motion.figure
            className="relative h-full w-full overflow-hidden rounded-[6px] border border-[#D0A030]/20 bg-[#102030] shadow-[0_32px_90px_rgba(0,0,16,0.62)]"
            style={{ x: pointerX, y: imageY, rotate }}
            aria-label={`${member.name}, ${member.role}`}
          >
            <motion.div className="h-full w-full" style={{ y: pointerY }}>
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                  decoding="async"
                  className="h-[112%] w-full object-cover grayscale-[12%]"
                  style={{ objectPosition: config.objectPosition }}
                />
              ) : (
                <MemberPhotoFallback member={member} />
              )}
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#000010] via-[#000010]/46 to-transparent" />
          </motion.figure>
        </div>
      </div>
    </div>
  );
}

function MemberDepthBackdrop({
  member,
  config,
  mouseX,
  mouseY,
  scrollYProgress,
  reduced,
}: MemberVisualProps) {
  const backdropY = useSpring(
    useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : config.backdropY),
    spring,
  );
  const pointerX = useSpring(
    useTransform(mouseX, (value) => (reduced ? 0 : value * -12)),
    spring,
  );
  const pointerY = useSpring(
    useTransform(mouseY, (value) => (reduced ? 0 : value * -10)),
    spring,
  );

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0"
      style={{ x: pointerX, y: pointerY }}
    >
      <motion.div
        className="absolute left-[8%] top-[10%] h-[76%] w-[78%] border border-[#D0A030]/12"
        style={{ y: backdropY }}
      />
      <div className="absolute left-[2%] top-[18%] h-px w-[88%] bg-gradient-to-r from-[#D0A030]/35 via-[#F0EAD8]/10 to-transparent" />
      <div className="absolute bottom-[17%] right-[3%] h-px w-[80%] bg-gradient-to-l from-[#D0A030]/30 via-[#F0EAD8]/10 to-transparent" />
      <div className="absolute bottom-[6%] left-[18%] h-[78%] w-px bg-gradient-to-b from-transparent via-[#D0A030]/20 to-transparent" />
      <div className="absolute right-[12%] top-[8%] h-[62%] w-px bg-gradient-to-b from-[#F0EAD8]/10 via-[#D0A030]/20 to-transparent" />
      <span
        className={`absolute top-1/2 -translate-y-1/2 select-none font-serif text-8xl leading-none text-[#D0A030]/[0.055] md:text-[10rem] ${
          config.align === 'left' ? 'left-2' : 'right-2'
        }`}
      >
        {member.initials}
      </span>
    </motion.div>
  );
}

function MemberPhotoFallback({ member }: { member: BandMember }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#102030]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(145deg, rgba(208,160,48,0.2) 0%, rgba(16,32,48,0.45) 42%, rgba(0,0,16,0.94) 100%)',
        }}
      />
      <div className="absolute -left-12 top-1/4 h-px w-[130%] rotate-[-18deg] bg-[#D0A030]/25" />
      <div className="absolute -right-10 top-1/2 h-px w-[115%] rotate-[24deg] bg-[#F0EAD8]/10" />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-8xl leading-none text-[#F0EAD8]/12 md:text-[10rem]"
      >
        {member.initials}
      </span>
    </div>
  );
}
