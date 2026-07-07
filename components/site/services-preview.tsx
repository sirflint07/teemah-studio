'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { ServiceCard } from '@/components/site/service-card';
import { Reveal } from '@/components/site/motion';
import { services } from '@/lib/data';

export function ServicesPreview() {
  const preview = services.slice(0, 3);
  return (
    <section className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services crafted around your story"
          description="Five disciplines, one standard of craft. Explore the ways we can help you create."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link href="/services" className="btn-outline-gold">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
