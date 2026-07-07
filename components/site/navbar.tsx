'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Aperture } from 'lucide-react';
import { navLinks, site } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-ink-900/10 bg-white/80 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 text-gold-500 transition-colors group-hover:border-gold-500">
            <Aperture className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className={cn('font-display text-lg font-semibold tracking-tight', scrolled ? 'text-ink-900' : 'text-slate-100')}>
            Teemah&apos;s <span className="text-gold-500">.</span>Studio
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-ink-900'
                      : 'text-ink-500 hover:text-gold-400',
                      scrolled ? '' : 'text-slate-100'
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-gold-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-gold !px-5 !py-2.5 !text-xs">
            Book a Session
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className={cn("h-6 w-6", scrolled ? 'text-ink-900' : 'text-slate-100')} /> : <Menu className={cn("h-6 w-6", scrolled ? 'text-ink-900' : 'text-slate-100')} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden"
          >
            <div className="mx-4 mb-4 rounded-2xl border border-ink-900/10 bg-white p-4 shadow-xl">
              <ul className="flex flex-col">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors',
                          active
                            ? 'bg-gold-500/10 text-ink-900'
                            : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/contact"
                className="btn-gold mt-3 w-full"
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
