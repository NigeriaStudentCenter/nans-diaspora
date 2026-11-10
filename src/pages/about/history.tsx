import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { history } from 'virtual:content';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
};
export default function HistoryPage() {
  const site = 'https://nansdiasporia.org';
  const title = 'Our History — NANS Diaspora';
  const description = 'Four decades of representing Nigerian students across the globe. Explore the history of NANS Diaspora.';
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/about/history`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/about/history`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/about" className="inline-flex items-center gap-1 text-xs text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
              <ChevronLeft size={14} /> Back to About Us
            </Link>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">About Us</p>
            <h1 className="font-heading font-bold text-3xl md:text-5xl mb-3">{history.title}</h1>
            <p className="text-primary-foreground/80 text-lg">{history.subtitle}</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-6 md:px-10 bg-muted border-b border-border">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-base">{history.intro}</p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-20 px-6 md:px-10 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[2.25rem] top-0 bottom-0 w-0.5 bg-border" />

              <div className="flex flex-col gap-10">
                {history.milestones.map((milestone, i) => <motion.div key={milestone.id} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: '-40px'
              }} variants={fadeUp} className="flex gap-6 items-start">
                    {/* Year badge */}
                    <div className="shrink-0 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center text-sm font-black text-primary-foreground z-10" style={{
                  background: i === 0 ? 'hsl(var(--secondary))' : 'hsl(var(--primary))',
                  color: i === 0 ? 'hsl(var(--foreground))' : 'hsl(var(--primary-foreground))'
                }}>
                      {milestone.year}
                    </div>
                    <div className="pt-3">
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>;
}
