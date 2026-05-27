import { Link } from 'react-router-dom';

const INSTAGRAM_URL = 'https://www.instagram.com/filigranakustik/';

export function SiteFooter() {
  return (
    <footer className="bg-[#000010] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <Link
          to="/"
          className="font-serif text-[#F0EAD8] text-base tracking-widest uppercase hover:text-[#D0A030] transition-colors duration-300"
        >
          Filigran Akustik
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-6 text-xs tracking-widest uppercase">
          <Link to="/bend" className="text-[#8898A8] hover:text-[#D0A030] transition-colors">
            Bend
          </Link>
          <Link to="/nastupi" className="text-[#8898A8] hover:text-[#D0A030] transition-colors">
            Nastupi
          </Link>
          <Link to="/kontakt" className="text-[#8898A8] hover:text-[#D0A030] transition-colors">
            Kontakt
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D0A030] hover:text-[#E8C050] transition-colors"
          >
            Instagram ↗
          </a>
        </nav>

        <p className="text-[#8898A8] text-xs">
          © {new Date().getFullYear()} Filigran Akustik
        </p>
      </div>
    </footer>
  );
}
