import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ChevronLeft } from 'lucide-react';
import { constitution } from 'virtual:content';
export default function ConstitutionPage() {
  const site = 'https://nansdiasporia.org';
  const title = 'Constitution — NANS Diaspora';
  const description = 'The governing constitution of the National Association of Nigerian Students – Diaspora.';
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/about/constitution`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/about/constitution`} />
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
            <h1 className="font-heading font-bold text-3xl md:text-5xl mb-3">{constitution.title}</h1>
            <p className="text-primary-foreground/80">{constitution.subtitle}</p>
            <p className="text-xs text-primary-foreground/60 mt-3">Last amended: {constitution.lastAmended}</p>
          </div>
        </section>

        {/* Sections */}
        <section className="py-16 px-6 md:px-10 bg-background">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            {constitution.sections.map(section => <article key={section.id} className="border-l-4 border-primary pl-6">
                <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">Article {section.number}</p>
                <h2 className="font-heading font-bold text-xl text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </article>)}
          </div>
        </section>
      </main>
    </>;
}
