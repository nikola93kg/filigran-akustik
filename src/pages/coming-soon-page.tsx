import { motion, useReducedMotion } from 'framer-motion';

export function ComingSoonPage() {
  const reduced = useReducedMotion();

  const fade = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
        };

  return (
    <div className="relative min-h-dvh bg-[#000010] flex flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Atmospheric glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(208,160,48,0.07) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 50% 80%, rgba(208,160,48,0.04) 0%, transparent 60%)',
        }}
        animate={reduced ? {} : { opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Band illustration background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/logo.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'min(900px, 90%)',
          opacity: 0.08,
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Top / bottom accent lines */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(208,160,48,0.4), transparent)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(208,160,48,0.2), transparent)' }}
      />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          {...fade(0.05)}
          className="text-[#D0A030] text-[0.75rem] font-normal tracking-[0.3em] uppercase mb-8"
        >
          Akustični bend · Srbija
        </motion.p>

        <motion.h1
          {...fade(0.15)}
          className="text-[#F0EAD8] leading-[1.05]"
          style={{
            fontFamily: "'Edwardian Script ITC', cursive",
            fontSize: 'clamp(4.5rem, 15vw, 11rem)',
          }}
        >
          Filigran akustik
        </motion.h1>

        <motion.div
          {...fade(0.25)}
          aria-hidden
          className="w-16 h-px bg-[#D0A030] opacity-60 my-8"
        />

        <motion.p
          {...fade(0.32)}
          className="font-serif text-[#F0EAD8] italic tracking-widest mb-3"
          style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.65rem)' }}
        >
          Website uskoro
        </motion.p>

        <motion.p
          {...fade(0.4)}
          className="text-[#8898A8] font-light tracking-wide text-base max-w-sm leading-relaxed mb-12"
        >
          Radimo na nečemu posebnom.
          <br />
          Pratite nas na Instagramu za novosti.
        </motion.p>

        <motion.a
          {...fade(0.5)}
          href="https://www.instagram.com/filigran_akustik/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Filigran Akustik na Instagramu"
          className="inline-flex items-center gap-3 px-10 py-4 border border-[#D0A030] text-[#D0A030] text-[0.75rem] font-medium tracking-[0.25em] uppercase transition-colors duration-300 hover:bg-[#D0A030] hover:text-[#000010] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D0A030]"
          whileHover={reduced ? {} : { scale: 1.02 }}
          whileTap={reduced ? {} : { scale: 0.98 }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
          Instagram
        </motion.a>
      </main>

      <p className="absolute bottom-6 text-[0.55rem] tracking-[0.15em] uppercase text-[rgba(136,152,168,0.4)] z-10">
        © 2026 Filigran Akustik
      </p>
    </div>
  );
}
