import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { home } from 'virtual:content';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28
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
      staggerChildren: 0.12
    }
  }
};
const newsImages = ['/airo-assets/images/pages/home/news-1', '/airo-assets/images/pages/home/news-2', '/airo-assets/images/pages/home/news-3'];
export default function HomePage() {
  const site = 'https://nansdiasporia.org';
  const title = "NANS Diaspora — The Voice of Nigerian Students Abroad";
  const description = "NANS Diaspora is the official body representing Nigerian students studying abroad — advocating, connecting, and empowering a generation of global leaders.";
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'NANS Diaspora',
      url: `${site}/`
    }, {
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: 'NANS Diaspora',
      url: `${site}/`,
      description
    }, {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: `${site}/`,
      name: title,
      isPartOf: {
        '@id': `${site}/#website`
      },
      about: {
        '@id': `${site}/#organization`
      },
      datePublished: '1984-01-01',
      dateModified: '2026-07-22'
    }]
  };
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/airo-assets/images/pages/home/hero" alt="Nigerian students abroad" className="w-full h-full object-cover" loading="eager" fetchPriority="high" width={1920} height={1080} />
            <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(105deg, rgba(0,60,0,0.88) 0%, rgba(0,40,0,0.7) 50%, rgba(0,0,0,0.4) 100%)'
          }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 w-full">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-secondary" />
                <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                  Official Body · Est. 1984
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-heading font-black text-white leading-tight mb-6" style={{
              fontSize: 'clamp(2.25rem, 6vw, 4.5rem)'
            }}>
                {home.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                {home.hero.subheading}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/government" className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-foreground font-semibold text-sm hover:bg-secondary/90 transition-colors">
                  {home.hero.cta1} <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-foreground transition-colors">
                  {home.hero.cta2}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="bg-primary text-primary-foreground py-8 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-primary-foreground/20">
            {home.stats.map(stat => <div key={stat.id} className="text-center px-4">
                <div className="font-heading font-black text-3xl md:text-4xl text-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </section>

        {/* ── PRESIDENT SPOTLIGHT ── */}
        <section className="py-20 md:py-28 px-6 md:px-10 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            ease: 'easeOut' as const
          }} className="relative flex justify-center">
              {/* Decorative background block */}
              <div className="absolute bottom-0 left-0 right-0 h-3/4 rounded-lg pointer-events-none" style={{
              background: 'hsl(var(--primary) / 0.06)'
            }} />
              <div className="relative z-10 w-full max-w-sm mx-auto">
                <img src="/airo-assets/images/pages/home/initiative" alt="Engr Nuhu Aminu Nuhu — NANS Diaspora President" className="w-full object-cover object-top rounded-lg shadow-xl" style={{
                aspectRatio: '3/4',
                objectPosition: 'top center'
              }} loading="lazy" width={600} height={800} />
                {/* Name badge + View Profile button */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pt-3 pb-4 rounded-b-lg" style={{
                background: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))'
              }}>
                  <p className="font-heading font-bold text-sm leading-snug">Engr Nuhu Aminu Nuhu</p>
                  <p className="text-xs mt-0.5 mb-3" style={{
                  color: 'hsl(var(--primary-foreground) / 0.7)'
                }}>NANS Diaspora President</p>
                  <a href="https://sway.cloud.microsoft/EClkAXFk3tre0UiY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded cursor-pointer" style={{
                  background: 'hsl(var(--secondary))',
                  color: '#000000',
                  textDecoration: 'none',
                  zIndex: 50,
                  position: 'relative'
                }}>
                    View Profile <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-secondary" />
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {home.initiative.label}
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-heading font-bold text-foreground leading-tight mb-5" style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)'
            }}>
                {home.initiative.title}
              </motion.h2>
              {/* Decorative quote mark */}
              <motion.div variants={fadeUp}>
                <div className="text-6xl font-heading font-black leading-none mb-2" style={{
                color: 'hsl(var(--secondary))'
              }}>"</div>
              </motion.div>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg italic">
                {home.initiative.description}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a href={home.initiative.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">
                  {home.initiative.profileCta} <ExternalLink size={14} />
                </a>
                <Link to="/government" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-colors">
                  {home.initiative.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── LATEST NEWS ── */}
        <section className="py-20 md:py-24 px-6 md:px-10 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                {home.news.sectionLabel}
              </span>
              <div className="flex-1 h-px bg-border" />
              <Link to="/news-events" className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                All News <ArrowRight size={12} />
              </Link>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {home.news.items.map((item, i) => <motion.article key={item.id} variants={fadeUp} className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
                  <Link to="/news-events" className="block">
                    <div className="overflow-hidden aspect-[16/9]">
                      <img src={newsImages[i] ?? newsImages[0]} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={600} height={400} />
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 mb-3" style={{
                    background: 'hsl(var(--primary) / 0.1)',
                    color: 'hsl(var(--primary))'
                  }}>
                        {item.category}
                      </span>
                      <h3 className="font-heading font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.excerpt}</p>
                      <time dateTime={item.date} className="text-xs text-muted-foreground">{item.date}</time>
                    </div>
                  </Link>
                </motion.article>)}
            </motion.div>
          </div>
        </section>

        {/* ── PARTNERS STRIP ── */}
        <section className="py-12 px-6 md:px-10 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase text-center mb-8">
              {home.partners.sectionLabel}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {(home.partners.items as Array<{ id: string; name: string; url?: string }>).map(partner => partner.url ? (
                <a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-border rounded text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-colors text-center cursor-pointer"
                  style={{ textDecoration: 'none' }}
                >
                  {partner.name}
                </a>
              ) : (
                <div key={partner.id} className="px-5 py-3 border border-border rounded text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-colors text-center">
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>;
}
