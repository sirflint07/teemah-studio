'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const count = testimonials.length;

  const go = React.useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [count]);

  const active = testimonials[index];

  return (
    <section className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by clients across Nigeria"
          description="We measure our work by the people who trust us with their moments."
        />

        <div className="relative mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white p-8 shadow-sm sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-gold-500/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative"
              >
                <div className="flex items-center gap-1 text-gold-500">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-500" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed text-ink-900 sm:text-2xl md:text-3xl text-balance">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 font-display text-lg font-semibold text-gold-500">
                    {active.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">{active.name}</p>
                    <p className="text-sm text-muted-foreground">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition-all hover:border-gold-500 hover:text-gold-500"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-gold-500' : 'w-2 bg-ink-900/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition-all hover:border-gold-500 hover:text-gold-500"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
