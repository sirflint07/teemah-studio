'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/site/motion';
import { stats } from '@/lib/data';

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Studio editorial shoot"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 overflow-hidden rounded-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Portrait session"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-gold-500/20 bg-white px-6 py-4 text-center shadow-xl"
              >
                <p className="font-display text-3xl font-semibold text-ink-900">8</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Years of craft
                </p>
              </motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
                <span className="h-px w-6 bg-gold-500/60" />
                The Studio
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-4xl md:text-5xl text-balance">
                A studio built for the moments that matter.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Teemah&apos;s Studio is a creative home in the heart of Mokola, Ibadan —
                a space where photographers, creators, and brands come to make
                something lasting. We pair professional equipment with a calm,
                considered approach, so every session feels effortless and every
                frame feels like you.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                From editorial portraits to wedding films, from studio rentals to
                monthly content, we exist to help you tell your story with light,
                intention, and craft.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors hover:text-gold-500"
              >
                More about the studio
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.25 + i * 0.05}>
                  <div>
                    <p className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
