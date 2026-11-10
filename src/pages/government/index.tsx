import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ArrowRight, Users, Star } from 'lucide-react';
import { government } from 'virtual:content';
export default function GovernmentPage() {
  const site = 'https://nansdiasporia.org';
  const title = 'Government — NANS Diaspora';
  const description = 'Meet the elected leaders and representatives of NANS Diaspora — Chapter Presidents, Executives, Pioneers, and Senate.';
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/government`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/government`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">Leadership</p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4">{government.hero.title}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">{government.hero.subtitle}</p>
          </div>
        </section>

        {/* Sub-page cards */}
        <section className="py-16 md:py-20 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {government.subpages.map(page => <Link key={page.id} to={page.path} className="group bg-card border border-border rounded-lg p-8 hover:border-primary hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{
              background: page.id === 'g5' ? 'hsl(var(--secondary) / 0.15)' : 'hsl(var(--primary) / 0.1)'
            }}>
                  {page.id === 'g5' ? <Star size={22} className="text-secondary fill-secondary" /> : <Users size={22} className="text-primary" />}
                </div>
                <h2 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {page.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{page.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View Members <ArrowRight size={14} />
                </span>
              </Link>)}
          </div>
        </section>
      </main>
    </>;
}
