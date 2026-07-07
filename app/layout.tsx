import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { ScrollToTop } from '@/components/site/scroll-to-top';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://teemahstudio.com'),
  title: {
    default: "Teemah's Studio — Premium Photography & Content Creation in Ibadan",
    template: "%s · Teemah's Studio",
  },
  description:
    "Teemah's Studio is a premium content creation and photography studio in Mokola, Ibadan. We craft timeless portraits, cinematic videography, studio rentals, event coverage, and branded content.",
  keywords: [
    'photography studio Ibadan',
    'content creation Mokola',
    'videography Oyo State',
    'studio rental Ibadan',
    'event coverage Nigeria',
    "Teemah's Studio",
  ],
  openGraph: {
    title: "Teemah's Studio — Premium Photography & Content Creation",
    description:
      'A premium content creation and photography studio in Mokola, Ibadan. Timeless imagery, cinematic video, and refined brand storytelling.',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Teemah's Studio",
    description:
      'Premium photography & content creation studio in Mokola, Ibadan.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
