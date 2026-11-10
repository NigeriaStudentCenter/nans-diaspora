import { Helmet } from '@dr.pogodin/react-helmet';
import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Twitter, Facebook, Instagram, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contact } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const socialIcons: Record<string, React.ElementType> = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
};

export default function ContactPage() {
  const site = 'https://nansdiasporia.org';
  const title = 'Contact Us — NANS Diaspora';
  const description = 'Get in touch with NANS Diaspora — general enquiries, membership, media, and partnership opportunities.';

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypotRef.current?.value) return; // bot trap

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const enquiryType = data.get('enquiry-type') as string;
    const message = data.get('message') as string;

    if (!name || !email || !message) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      // Static hosting (GitHub Pages) has no /api, so submissions go to FormSubmit.
      const res = await fetch('https://formsubmit.co/ajax/info@nansdiaspora.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Contact Us — NANS Diaspora',
          _template: 'table',
          _captcha: 'false',
          name,
          email,
          'Enquiry Type': enquiryType,
          message,
        }),
      });
      const json = await res.json();
      if (json.success === true || json.success === 'true') {
        setStatus('success');
        form.reset();
      } else {
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/contact`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/contact`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">Get in Touch</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-3">{contact.hero.title}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">{contact.hero.subtitle}</p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 md:py-20 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {/* Email contacts */}
              <motion.div variants={fadeUp} className="mb-10">
                <h2 className="font-heading font-bold text-xl text-foreground mb-5">Email Contacts</h2>
                <div className="flex flex-col gap-4">
                  {contact.contacts.map((c) => (
                    <div key={c.id} className="flex items-start gap-3 p-4 bg-muted rounded-lg border border-border">
                      <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{c.role}</p>
                        <a href={`mailto:${c.email}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {c.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social */}
              <motion.div variants={fadeUp} className="mb-10">
                <h2 className="font-heading font-bold text-xl text-foreground mb-5">Follow Us</h2>
                <div className="flex gap-4">
                  {Object.entries(contact.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    if (!Icon) return null;
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={platform}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Sponsorship */}
              <motion.div variants={fadeUp} className="bg-muted border border-border rounded-lg p-6">
                <div className="w-8 h-1 bg-secondary mb-4 rounded-full" />
                <h2 className="font-heading font-bold text-lg text-foreground mb-3">{contact.sponsorship.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{contact.sponsorship.description}</p>
                <a
                  href="mailto:partnerships@nansdiaspora.org"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  partnerships@nansdiaspora.org
                </a>
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-xl text-foreground mb-6">Send a Message</h2>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle size={48} className="text-primary" />
                  <h3 className="font-heading font-bold text-xl text-foreground">Message Sent</h3>
                  <p className="text-muted-foreground max-w-sm">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  <button onClick={() => setStatus('idle')} className="mt-4 text-sm font-semibold text-primary hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_gotcha"
                    ref={honeypotRef}
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ position: 'absolute', left: '-9999px' }}
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-1.5">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1.5">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiry-type" className="block text-xs font-semibold text-foreground mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiry-type"
                      name="enquiry-type"
                      className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Membership & Chapters">Membership & Chapters</option>
                      <option value="Media & Press">Media & Press</option>
                      <option value="Partnership & Sponsorship">Partnership & Sponsorship</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1.5">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded px-4 py-3">
                      <AlertCircle size={15} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={15} className="animate-spin" /> Sending…</>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
