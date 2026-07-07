'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  Camera,
  Video,
  Aperture,
  Sparkles,
  Clapperboard,
  Clock,
  Heart,
  type LucideIcon,
} from 'lucide-react';
import type { ServiceItem } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Video,
  Aperture,
  Sparkles,
  Clapperboard,
  Clock,
  Heart,
};

export function ServiceCard({
  service,
  index = 0,
}: {
  service: ServiceItem;
  index?: number;
}) {
  const Icon = iconMap[service.icon] ?? Camera;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/30 hover:luxury-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/50 bg-ink-900/40 text-gold-500 backdrop-blur-sm">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-display text-2xl font-semibold text-white">
            {service.title}
          </h3>
          <p className="mt-1 text-sm text-white/70">{service.tagline}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between border-t border-ink-900/10 pt-5">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              From
            </span>
            <p className="font-display text-lg font-semibold text-ink-900">
              {service.startingPrice}
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-500"
          >
            Enquire
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
