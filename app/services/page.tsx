import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { ServiceCard } from '@/components/site/service-card';
import { Reveal } from '@/components/site/motion';
import { CTASection } from '@/components/site/cta-section';
import { services, process } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Photography, videography, studio rental, event coverage, and content creation — premium creative services from Teemah's Studio in Mokola, Ibadan.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="What We Offer"
        title={
          <>
            Five disciplines,
            <span className="block gold-gradient-text">one standard of craft.</span>
          </>
        }
        description="From a single portrait to a full season of content, every service is delivered with the same intention, equipment, and care."
        image="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Services grid */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
            <Reveal delay={0.4}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-transparent p-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink-900">
                    Not sure which fits?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Tell us about your project and we will recommend the right
                    service — or build a custom package around your goals.
                  </p>
                </div>
                <Link href="/contact" className="btn-ink mt-6 w-full">
                  Talk to Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Detailed alternating sections */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In Detail"
            title="A closer look at each service"
            description="Everything you need to know before you book — features, deliverables, and what to expect."
          />
          <div className="mt-16 flex flex-col gap-20">
            {services.map((service, i) => (
              <Reveal key={service.slug}>
                <div
                  id={service.slug}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
                      {service.tagline}
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-700">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center gap-6">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Starting from
                        </span>
                        <p className="font-display text-2xl font-semibold text-ink-900">
                          {service.startingPrice}
                        </p>
                      </div>
                      <Link href="/contact" className="btn-outline-gold">
                        Enquire
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From idea to delivered gallery"
            description="A clear, four-step process that keeps you in the loop and keeps the work on standard."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-ink-900/10 bg-white p-7 transition-all duration-500 hover:border-gold-500/30 hover:luxury-shadow">
                  <span className="font-display text-5xl font-semibold text-gold-500/20 transition-colors group-hover:text-gold-500/40">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's scope your project"
        description="Share your vision and we will build the right package — with clear pricing and a clear timeline."
        secondaryLabel="See Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
