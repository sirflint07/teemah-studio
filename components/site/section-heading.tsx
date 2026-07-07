import { cn } from '@/lib/utils';
import { Reveal } from '@/components/site/motion';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
            <span className="h-px w-6 bg-gold-500/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl text-balance',
            light ? 'text-white' : 'text-ink-900'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'max-w-2xl text-base leading-relaxed sm:text-lg',
              light ? 'text-white/70' : 'text-muted-foreground'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
