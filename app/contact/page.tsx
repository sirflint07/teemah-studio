import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { PageHeader } from '@/components/site/page-header';
import { ContactForm } from '@/components/site/contact-form';
import { Reveal } from '@/components/site/motion';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Book a session or enquire with Teemah's Studio in Mokola, Ibadan. Call, WhatsApp, or send a message — we respond within 24 hours.",
};

const contactCards = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: site.phone,
    href: site.phoneHref,
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: site.whatsapp,
  },
  {
    Icon: Mail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    Icon: Clock,
    label: 'Studio Hours',
    value: site.hours,
  },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.04.86.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.04z" />
    </svg>
  );
}

const socials = [
  { href: site.social.instagram, label: 'Instagram', letter: 'Ig' },
  { href: site.social.tiktok, label: 'TikTok', letter: 'Tk' },
  { href: site.social.facebook, label: 'Facebook', letter: 'Fb' },
  { href: site.social.youtube, label: 'YouTube', letter: 'Yt' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in Touch"
        title={
          <>
            Let&apos;s create
            <span className="block gold-gradient-text">something timeless.</span>
          </>
        }
        description="Tell us about your project and we will respond within 24 hours. For urgent enquiries, call or message us on WhatsApp."
        image="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Quick contact cards */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ Icon, label, value, href }, i) => {
              const content = (
                <div className="group h-full rounded-2xl border border-ink-900/10 bg-white p-6 transition-all duration-500 hover:border-gold-500/30 hover:luxury-shadow">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/30 text-gold-500 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500/10">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 font-medium text-ink-900">{value}</p>
                </div>
              );
              return href ? (
                <Reveal key={label} delay={i * 0.06}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block h-full">
                    {content}
                  </a>
                </Reveal>
              ) : (
                <Reveal key={label} delay={i * 0.06}>
                  {content}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <Reveal>
              <div className="rounded-3xl border border-ink-900/10 bg-white p-6 shadow-sm sm:p-10">
                <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in the form below and we will be in touch shortly.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            {/* Info column */}
            <div className="flex flex-col gap-6">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-ink-900/10 bg-white p-8">
                  <h3 className="font-display text-xl font-semibold text-ink-900">
                    Visit the studio
                  </h3>
                  <div className="mt-5 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                      <span className="text-ink-700">{site.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                      <span className="text-ink-700">{site.hours}</span>
                    </div>
                  </div>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:brightness-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </Reveal>

              {/* Map placeholder */}
              <Reveal delay={0.15}>
                <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-white">
                  <div className="relative aspect-[4/3] w-full bg-ink-100">
                    <iframe
                      title="Studio location map"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        site.mapsEmbedQuery
                      )}&output=embed`}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Socials */}
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink-900/10 bg-white p-8">
                  <h3 className="font-display text-xl font-semibold text-ink-900">
                    Follow the work
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    See latest frames and behind-the-scenes on socials.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    {socials.map(({ href, label, letter }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-sm font-semibold text-ink-700 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-ink-900"
                      >
                        {letter}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
