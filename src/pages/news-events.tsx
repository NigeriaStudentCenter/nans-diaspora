import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { news_events } from 'virtual:content';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
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
const articleImages = ['/airo-assets/images/pages/news-events/medical-dental-outreach', '/airo-assets/images/pages/news-events/generalissimo-award-abike', '/airo-assets/images/pages/news-events/minister-of-education-engagement', '/airo-assets/images/pages/home/news-1', '/airo-assets/images/pages/home/news-2', '/airo-assets/images/pages/home/news-3', '/airo-assets/images/pages/home/initiative', '/airo-assets/images/pages/home/hero', '/airo-assets/images/pages/about/hero'];
export default function NewsEventsPage() {
  const site = 'https://nansdiasporia.org';
  const title = 'News & Events — NANS Diaspora';
  const description = 'Stay informed with the latest news, updates, and events from NANS Diaspora.';
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/news-events`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/news-events`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">Updates</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-3">{news_events.hero.title}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">{news_events.hero.subtitle}</p>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-12 md:py-16 px-6 md:px-10 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Featured Event</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="bg-background border border-border rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="overflow-hidden">
                <img src="/airo-assets/images/pages/home/initiative" alt={news_events.featured.title} className="w-full h-full object-cover min-h-[240px]" loading="lazy" width={900} height={600} />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 mb-4 w-fit" style={{
                background: 'hsl(var(--secondary))',
                color: 'hsl(var(--foreground))'
              }}>
                  {news_events.featured.category}
                </span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
                  {news_events.featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{news_events.featured.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {news_events.featured.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {news_events.featured.location}</span>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors w-fit">
                  {news_events.featured.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 px-6 md:px-10 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Upcoming Events</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {news_events.upcomingEvents.map(event => <div key={event.id} className="bg-muted border border-border rounded-lg p-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 mb-3" style={{
                background: 'hsl(var(--primary) / 0.1)',
                color: 'hsl(var(--primary))'
              }}>
                    {event.type}
                  </span>
                  <h3 className="font-heading font-bold text-foreground text-sm leading-snug mb-3">{event.title}</h3>
                  <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar size={11} /> {event.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={11} /> {event.location}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-16 md:py-20 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Latest News</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news_events.articles.map((article, i) => <motion.article key={article.id} variants={fadeUp} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="overflow-hidden aspect-[16/9]">
                    <img src={articleImages[i % articleImages.length]} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={600} height={400} />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 mb-3" style={{
                  background: 'hsl(var(--primary) / 0.1)',
                  color: 'hsl(var(--primary))'
                }}>
                      {article.category}
                    </span>
                    <h3 className="font-heading font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <time dateTime={article.date}>{article.date}</time>
                      <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                    </div>
                  </div>
                </motion.article>)}
            </motion.div>
          </div>
        </section>
      </main>
    </>;
}
