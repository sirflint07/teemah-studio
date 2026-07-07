'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { site } from '@/lib/data';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink-900">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Teemah's Studio interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/50 to-ink-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="flex items-center gap-1 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold-500" />
            ))}
          </span>
          <span className="text-sm font-medium text-white/80">
            Trusted by 500+ clients in Ibadan & beyond
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance"
        >
          Where light meets
          <span className="block gold-gradient-text">story.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
        >
          A premium content creation and photography studio in {site.addressShort}.
          We craft timeless portraits, cinematic films, and refined brand stories —
          composed with intention, delivered with care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link href="/contact" className="btn-gold">
            Book a Session
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-gold-500 hover:text-gold-500"
          >
            View the Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center gap-8 text-white/60"
        >
          <div>
            <p className="font-display text-2xl font-semibold text-white">8 yrs</p>
            <p className="text-xs uppercase tracking-wider">of craft</p>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">500+</p>
            <p className="text-xs uppercase tracking-wider">sessions</p>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">4.9★</p>
            <p className="text-xs uppercase tracking-wider">avg rating</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-gold-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
