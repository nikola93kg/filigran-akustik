import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {subtitle && (
        <p className="text-[#D0A030] text-xs font-medium tracking-[0.3em] uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-[#F0EAD8] leading-tight">
        {title}
      </h2>
    </div>
  );
}
