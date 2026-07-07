import type { Metadata } from 'next';
import { PageHeader } from '@/components/site/page-header';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal, StaggerGroup, StaggerItem, fadeUp } from '@/components/site/motion';
import { CTASection } from '@/components/site/cta-section';
import { stats, process } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Teemah's Studio is a premium content creation and photography studio in Mokola, Ibadan — built on craft, intention, and a calm, considered experience.",
};

const values = [
  'Intentional, editorial-grade imagery',
  'A calm, directed experience on set',
  'Professional equipment and lighting',
  'On-time delivery, every time',
  'A space designed for creators',
  'Stories told with light and care',
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="Our Story"
        title={
          <>
            Crafted in Ibadan,
            <span className="block gold-gradient-text">made to last.</span>
          </>
        }
        description="We are a premium content creation and photography studio in Mokola, Ibadan — dedicated to helping people and brands tell their stories with intention, light, and craft."
        image="https://images.pexels.com/photos/2294406/pexels-photo-2294406.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Story */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <Reveal>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Teemah at work"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="absolute -bottom-6 -right-4 hidden overflow-hidden rounded-2xl border-4 border-background sm:block">
                  <img
                    src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Studio detail"
                    loading="lazy"
                    className="aspect-square w-40 object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
                  <span className="h-px w-6 bg-gold-500/60" />
                  Who We Are
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-4xl text-balance">
                  A studio with a quiet obsession for light and detail.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Teemah&apos;s Studio began with a simple belief: that a photograph,
                  made well, can hold a moment for a lifetime. What started as a
                  single camera and a love for light has grown into a full creative
                  studio in the heart of Mokola, Ibadan — serving individuals,
                  couples, and brands across Oyo State and beyond.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Today, we offer photography, videography, studio rental, event
                  coverage, and content creation — all under one roof, all held to
                  the same standard of craft. We believe the experience matters as
                  much as the image, so we keep the process calm, clear, and
                  considered from first message to final gallery.
                </p>
              </Reveal>

              <StaggerGroup className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.08}>
                {values.map((value) => (
                  <StaggerItem key={value} variants={fadeUp} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" />
                    <span className="text-sm text-ink-700">{value}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4" stagger={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label} variants={fadeUp} className="text-center">
                <p className="font-display text-4xl font-semibold text-gold-500 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="A simple, considered process"
            description="Four steps from first conversation to final delivery — designed to be effortless for you."
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
        title="Ready to tell your story?"
        description="Whether it is a portrait, a wedding, or a month of content — we would love to help you make it."
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
