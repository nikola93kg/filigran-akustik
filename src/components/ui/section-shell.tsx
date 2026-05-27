import { cn } from '../../lib/cn';

interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn('relative w-full px-6 py-20 md:px-12 lg:px-24', className)}
    >
      {children}
    </section>
  );
}
