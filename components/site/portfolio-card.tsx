'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { PortfolioItem } from '@/lib/data';
import { cn } from '@/lib/utils';

export function PortfolioCard({
  item,
  index = 0,
}: {
  item: PortfolioItem;
  index?: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-ink-100',
        item.span === 'tall' && 'row-span-2',
        item.span === 'wide' && 'sm:col-span-2'
      )}
    >
      <div
        className={cn(
          'relative w-full overflow-hidden',
          item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'
        )}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-block rounded-full bg-gold-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-900">
            {item.category}
          </span>
          <h3 className="mt-3 font-display text-xl font-semibold text-white">
            {item.title}
          </h3>
        </figcaption>
      </div>
    </motion.figure>
  );
}
