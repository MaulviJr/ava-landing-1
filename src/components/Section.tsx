import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** dark band */
  dark?: boolean;
  /** light gray band */
  mist?: boolean;
};

export function Section({
  id,
  children,
  className = '',
  dark = false,
  mist = false,
}: SectionProps) {
  const { ref, visible } = useReveal();
  const bg = dark ? 'bg-ink text-paper' : mist ? 'bg-mist text-ink' : 'bg-paper text-ink';
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`${bg} ${visible ? 'is-visible' : ''} reveal ${className}`}
    >
      {children}
    </section>
  );
}

type EyebrowProps = { children: ReactNode; dark?: boolean };
export function Eyebrow({ children, dark = false }: EyebrowProps) {
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        dark ? 'text-white/60' : 'text-ink/50'
      }`}
    >
      {children}
    </span>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  dark?: boolean;
  align?: 'left' | 'center';
};
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {eyebrow && (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1] lg:text-6xl lg:leading-[1.2] text-balance ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-white/70' : 'text-ink/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}