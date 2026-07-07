import type { Metadata } from 'next';
import { PageHeader } from '@/components/site/page-header';
import { PortfolioGallery } from '@/components/site/portfolio-gallery';
import { CTASection } from '@/components/site/cta-section';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "A curated gallery of portraits, weddings, brand stories, and events from Teemah's Studio in Ibadan, Nigeria.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        crumb="Portfolio"
        eyebrow="Selected Work"
        title={
          <>
            Frames worth
            <span className="block gold-gradient-text">keeping.</span>
          </>
        }
        description="A curated selection of recent work — portraits, weddings, brands, and events. Filter by category to explore."
        image="https://images.pexels.com/photos/1779415/pexels-photo-1779415.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="bg-background py-16 sm:py-24">
        <PortfolioGallery />
      </section>

      <CTASection
        title="Want frames like these?"
        description="Book a session and let's create a gallery you will be proud to share."
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
