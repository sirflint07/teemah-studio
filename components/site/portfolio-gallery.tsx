'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCard } from '@/components/site/portfolio-card';
import { portfolio, portfolioCategories } from '@/lib/data';
import { cn } from '@/lib/utils';

export function PortfolioGallery() {
  const [active, setActive] = React.useState('All');

  const filtered = React.useMemo(
    () =>
      active === 'All'
        ? portfolio
        : portfolio.filter((item) => item.category === active),
    [active]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Filter pills */}
      <div className="hide-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              'whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300',
              active === category
                ? 'border-gold-500 bg-gold-500 text-ink-900'
                : 'border-ink-900/15 bg-white text-ink-600 hover:border-gold-500/50 hover:text-ink-900'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <motion.div
        layout
        className="mt-10 grid auto-rows-[240px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                item.span === 'tall' && 'row-span-2',
                item.span === 'wide' && 'sm:col-span-2'
              )}
            >
              <PortfolioCard item={item} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          No work in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
