export const site = {
  name: "Teemah's Studio",
  tagline: 'Where Light Meets Story',
  phone: '+234 803 000 0000',
  phoneHref: 'tel:+2348030000000',
  whatsapp: 'https://wa.me/08021246658',
  email: 'hello@teemahstudio.com',
  address: '12 Adeyemo Road, Mokola, Ibadan, Oyo State, Nigeria',
  addressShort: 'Mokola, Ibadan, Oyo State',
  hours: 'Mon – Sat · 9:00 AM – 7:00 PM',
  mapsEmbedQuery: 'Mokola, Ibadan, Oyo State, Nigeria',
  social: {
    instagram: 'https://instagram.com/teemahsstudio',
    tiktok: 'https://www.tiktok.com/@teemah_contentstudio',
    facebook: 'https://facebook.com/teemahstudio',
    youtube: 'https://youtube.com/@teemahstudio',
  },
};

export type ServiceItem = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  startingPrice: string;
  image: string;
  icon: string;
};

export const services: ServiceItem[] = [
  {
    slug: 'photography',
    title: 'Photography',
    tagline: 'Portraits that outlast the moment',
    description:
      'Editorial portraits, brand headshots, family sessions, and fine-art photography composed with deliberate light and a refined, timeless aesthetic.',
    features: [
      'Editorial & studio portraits',
      'Brand and corporate headshots',
      'Family and maternity sessions',
      'High-resolution retouched gallery',
    ],
    startingPrice: '₦45,000',
    image:
      '/img/photos-4.png',
    icon: 'Camera',
  },
  {
    slug: 'videography',
    title: 'Videography',
    tagline: 'Cinematic frames, lasting feeling',
    description:
      'From concept to color grade, we produce cinematic video — wedding films, brand stories, and social reels engineered to move people and move metrics.',
    features: [
      'Wedding and event films',
      'Brand and product stories',
      'Short-form reels and ads',
      'Cinematic color grading',
    ],
    startingPrice: '₦120,000',
    image:
      'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Video',
  },
  {
    slug: 'studio-rental',
    title: 'Studio Rental',
    tagline: 'A canvas built for creators',
    description:
      'Book our fully equipped Mokola studio by the hour or day. Professional lighting, backdrops, and a clean cyclorama wall — ready for your next shoot.',
    features: [
      'Multiple backdrop setups',
      'Pro strobe and continuous lighting',
      'Cyclorama infinity wall',
      'On-site assistant available',
    ],
    startingPrice: '₦15,000/hr',
    image:
      '/img/photos-1.png',
    icon: 'Aperture',
  },
  {
    slug: 'event-coverage',
    title: 'Event Coverage',
    tagline: 'Every guest, every glance, every beat',
    description:
      'Conferences, weddings, and private celebrations covered end to end — a coordinated team capturing the atmosphere and the details you will want to relive.',
    features: [
      'Weddings and traditional ceremonies',
      'Corporate and brand events',
      'Multi-photographer coverage',
      'Same-day highlight delivery',
    ],
    startingPrice: '₦250,000',
    image:
      'https://images.pexels.com/photos/1275696/pexels-photo-1275696.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Sparkles',
  },
  {
    slug: 'content-creation',
    title: 'Content Creation',
    tagline: 'Scroll-stopping, brand-building',
    description:
      'End-to-end content for brands and creators — concept, shoot, edit, and delivery of a month of polished assets built for Instagram, TikTok, and beyond.',
    features: [
      'Monthly content strategy',
      'Product and lifestyle shoots',
      'Reels and short-form video',
      'Edited and captioned deliverables',
    ],
    startingPrice: '₦180,000/mo',
    image:
      'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Clapperboard',
  },
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: 'tall' | 'wide' | 'normal';
};

export const portfolio: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Golden Hour Portrait',
    category: 'Portrait',
    image:
      'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'tall',
  },
  {
    id: 'p2',
    title: 'Studio Editorial',
    category: 'Fashion',
    image:
      'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'wide',
  },
  {
    id: 'p3',
    title: 'Cinematic Vows',
    category: 'Wedding',
    image:
      'https://images.pexels.com/photos/1779415/pexels-photo-1779415.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
  },
  {
    id: 'p4',
    title: 'Brand Story',
    category: 'Commercial',
    image:
      'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
  },
  {
    id: 'p5',
    title: 'Event Atmosphere',
    category: 'Event',
    image:
      'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'tall',
  },
  {
    id: 'p6',
    title: 'Product Frame',
    category: 'Product',
    image:
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
  },
  {
    id: 'p7',
    title: 'Studio Light',
    category: 'Studio',
    image:
      'https://images.pexels.com/photos/3055079/pexels-photo-3055079.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'wide',
  },
  {
    id: 'p8',
    title: 'Quiet Portrait',
    category: 'Portrait',
    image:
      'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
  },
  {
    id: 'p9',
    title: 'Celebration',
    category: 'Event',
    image:
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
  },
  {
    id: 'p10',
    title: 'Motion Frame',
    category: 'Videography',
    image:
      'https://images.pexels.com/photos/2294406/pexels-photo-2294406.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'tall',
  },
  {
    id: 'p11',
    title: 'Lifestyle Edit',
    category: 'Content',
    image:
      'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'normal',
  },
  {
    id: 'p12',
    title: 'Evening Light',
    category: 'Portrait',
    image:
      'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'wide',
  },
];

export const portfolioCategories = [
  'All',
  'Portrait',
  'Fashion',
  'Wedding',
  'Event',
  'Commercial',
  'Product',
  'Content',
  'Studio',
  'Videography',
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Adaeze Okafor',
    role: 'Founder, Maison Noir',
    quote:
      "Teemah's Studio turned our brand shoot into a campaign. The lighting, the direction, the final gallery — every frame felt intentional and premium.",
    rating: 5,
  },
  {
    name: 'Tunde Bakare',
    role: 'Groom, Ibadan',
    quote:
      'They covered our traditional wedding with such calm and precision. We barely noticed the cameras, yet the photos captured every emotion of the day.',
    rating: 5,
  },
  {
    name: 'Chioma Eze',
    role: 'Content Creator',
    quote:
      'I rent the studio monthly for my reels. The space is clean, the lighting is professional, and the team always helps me get the shot. It is my creative home.',
    rating: 5,
  },
  {
    name: 'Femi Adeyemi',
    role: 'Marketing Lead, Paystack',
    quote:
      'We commissioned a brand film and the result exceeded the brief. Cinematic, on-brand, and delivered ahead of schedule. Teemah is a true professional.',
    rating: 5,
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '500+', label: 'Sessions Delivered' },
  { value: '8', label: 'Years of Craft' },
  { value: '120+', label: 'Events Covered' },
  { value: '4.9', label: 'Average Rating' },
];

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: string;
};

export const whyChoose: WhyChooseItem[] = [
  {
    title: 'Intentional Craft',
    description:
      'Every frame is composed with purpose. We obsess over light, angle, and mood so your images feel considered, not captured.',
    icon: 'Sparkles',
  },
  {
    title: 'Premium Equipment',
    description:
      'Professional cameras, lenses, and lighting — the same gear trusted by editorial and commercial sets worldwide.',
    icon: 'Camera',
  },
  {
    title: 'On-Time Delivery',
    description:
      'Galleries and films delivered when promised, with clear previews and a refined, easy-to-share final product.',
    icon: 'Clock',
  },
  {
    title: 'A Calm Experience',
    description:
      'From first message to final gallery, we keep the process effortless. You direct the vision; we handle the rest.',
    icon: 'Heart',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start with a conversation about your vision, your audience, and the story you want to tell.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'We design the creative direction — mood, lighting, wardrobe, and shot list — before a single frame is taken.',
  },
  {
    number: '03',
    title: 'Capture',
    description:
      'On shoot day, we direct with calm and precision, making sure every detail serves the story.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'You receive a refined, retouched gallery and film — ready to print, post, or campaign with.',
  },
];

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];
