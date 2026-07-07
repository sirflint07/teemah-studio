'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase-client';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name,
        email,
        phone: phone || null,
        service: service || null,
        message,
      });

      if (error) throw error;

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or reach us on WhatsApp.'
      );
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-500/5 p-10 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
          Message received
        </h3>
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out. We will get back to you within 24 hours.
          For urgent enquiries, message us on WhatsApp.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field>
          <Label htmlFor="name" className="text-ink-800">
            Full name <span className="text-gold-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="mt-2 border-ink-900/15 bg-white focus-visible:ring-gold-500"
          />
        </Field>
        <Field>
          <Label htmlFor="email" className="text-ink-800">
            Email <span className="text-gold-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="mt-2 border-ink-900/15 bg-white focus-visible:ring-gold-500"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field>
          <Label htmlFor="phone" className="text-ink-800">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234 ..."
            className="mt-2 border-ink-900/15 bg-white focus-visible:ring-gold-500"
          />
        </Field>
        <Field>
          <Label htmlFor="service" className="text-ink-800">
            Service of interest
          </Label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={cn(
              'mt-2 flex h-10 w-full rounded-md border border-ink-900/15 bg-white px-3 py-2 text-sm',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2'
            )}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / Not sure yet</option>
          </select>
        </Field>
      </div>

      <Field>
        <Label htmlFor="message" className="text-ink-800">
          Your message <span className="text-gold-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, dates, and what you're hoping to create..."
          className="mt-2 resize-none border-ink-900/15 bg-white focus-visible:ring-gold-500"
        />
      </Field>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gold w-full disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
