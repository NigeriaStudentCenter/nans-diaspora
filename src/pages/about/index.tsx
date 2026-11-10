import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { ArrowRight, FileText, Clock } from 'lucide-react';
import { about } from 'virtual:content';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
};
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
export default function AboutPage() {
  const site = 'https://nansdiasporia.org';
  const title = 'About Us — NANS Diaspora';
  const description = 'Learn about NANS Diaspora — our mission, mandate, and overview as the official body representing Nigerian students studying abroad.';
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/about`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/about`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28 px-6 md:px-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <img src="/airo-assets/images/pages/about/hero" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" loading="eager" width={1200} height={600} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">About Us</p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4">{about.hero.title}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">{about.hero.subtitle}</p>
          </div>
        </section>

        {/* Sub-page links */}
        <section className="bg-muted border-b border-border px-6 md:px-10 py-4">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
            <Link to="/about/constitution" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              <FileText size={15} /> Constitution
            </Link>
            <Link to="/about/history" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              <Clock size={15} /> History
            </Link>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-20 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger}>
              <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
                {about.mission.label}
              </motion.span>
              <motion.p variants={fadeUp} className="font-heading font-bold text-foreground leading-snug" style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)'
            }}>
                {about.mission.text}
              </motion.p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <p className="text-muted-foreground leading-relaxed text-base">{about.overview}</p>
            </motion.div>
          </div>
        </section>

        {/* Mandate */}
        <section className="py-16 md:py-20 px-6 md:px-10 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">{about.mandate.label}</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.mandate.items.map(item => <motion.div key={item.id} variants={fadeUp} className="bg-background border border-border rounded-lg p-6">
                  <div className="w-8 h-1 bg-primary mb-4 rounded-full" />
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-10 bg-primary text-primary-foreground text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Ready to get involved?</h2>
            <p className="text-primary-foreground/80 mb-8">Join NANS Diaspora and become part of a global community of Nigerian students.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-foreground font-semibold hover:bg-secondary/90 transition-colors">
              Contact Us <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    </>;
}
