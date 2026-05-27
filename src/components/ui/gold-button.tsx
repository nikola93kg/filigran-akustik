import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

interface GoldButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'outline';
}

export function GoldButton({
  to,
  href,
  onClick,
  children,
  className,
  variant = 'solid',
}: GoldButtonProps) {
  const base =
    'inline-flex items-center justify-center px-8 py-3 font-medium tracking-widest uppercase text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0A030]';
  const styles = {
    solid: 'bg-[#D0A030] text-[#000010] hover:bg-[#E8C050]',
    outline:
      'border border-[#D0A030] text-[#D0A030] hover:bg-[#D0A030] hover:text-[#000010]',
  };
  const classes = cn(base, styles[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
