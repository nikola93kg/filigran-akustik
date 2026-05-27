import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { GoldButton } from '../ui/gold-button';

const navLinks = [
  { to: '/', label: 'Početna', end: true },
  { to: '/bend', label: 'Bend' },
  { to: '/nastupi', label: 'Nastupi' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#000010]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#F0EAD8] font-serif text-lg tracking-widest uppercase hover:text-[#D0A030] transition-colors duration-300"
        >
          Filigran
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  'text-xs tracking-widest uppercase transition-colors duration-300',
                  isActive ? 'text-[#D0A030]' : 'text-[#8898A8] hover:text-[#F0EAD8]'
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <GoldButton to="/kontakt" className="py-2 text-xs">
            Pošalji upit
          </GoldButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#8898A8] hover:text-[#F0EAD8] transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
        >
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-px bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#000010]/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  'text-sm tracking-widest uppercase',
                  isActive ? 'text-[#D0A030]' : 'text-[#8898A8]'
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <GoldButton to="/kontakt" onClick={() => setMenuOpen(false)} className="mt-2 w-full justify-center">
            Pošalji upit
          </GoldButton>
        </div>
      )}
    </header>
  );
}
