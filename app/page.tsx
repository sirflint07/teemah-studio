import { Hero } from '@/components/site/hero';
import { Intro } from '@/components/site/intro';
import { ServicesPreview } from '@/components/site/services-preview';
import { GalleryPreview } from '@/components/site/gallery-preview';
import { WhyChooseUs } from '@/components/site/why-choose-us';
import { Testimonials } from '@/components/site/testimonials';
import { CTASection } from '@/components/site/cta-section';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
