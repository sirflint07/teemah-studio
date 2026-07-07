'use client';

import {
  Sparkles,
  Camera,
  Clock,
  Heart,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { StaggerGroup, StaggerItem, fadeUp } from '@/components/site/motion';
import { whyChoose } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Camera,
  Clock,
  Heart,
};

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why Teemah's"
          title="The difference is in the details"
          description="We hold ourselves to a higher standard — so the work speaks for itself, and so does the experience."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {whyChoose.map((item) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <StaggerItem
                key={item.title}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-gold-500/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 text-gold-500 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500/10">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
