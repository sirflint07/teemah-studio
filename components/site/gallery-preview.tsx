'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { PortfolioCard } from '@/components/site/portfolio-card';
import { Reveal } from '@/components/site/motion';
import { portfolio } from '@/lib/data';

export function GalleryPreview() {
  const items = portfolio.slice(0, 6);
  return (
    <section className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected Work"
            title="A glimpse of the gallery"
            description="Portraits, weddings, brands, and events — a small selection of recent frames."
          />
          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors hover:text-gold-500"
            >
              See full portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {items.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
