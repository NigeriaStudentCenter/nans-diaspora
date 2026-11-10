import { Helmet } from '@dr.pogodin/react-helmet';
import { useState } from 'react';
import { ExternalLink, User } from 'lucide-react';
import { senate } from 'virtual:content';

const ALL = 'All Regions';

export default function SenatePage() {
  const regions = [ALL, ...Array.from(new Set(senate.map((l) => l.region))).sort()];
  const [activeRegion, setActiveRegion] = useState(ALL);

  return (
    <>
      <Helmet>
        <title>Senate — NANS Diaspora</title>
        <meta name="description" content="The legislative body of NANS Diaspora — senators representing zones and chapters worldwide." />
        <link rel="canonical" href="https://nansdiasporia.org/government/senate" />
        <meta property="og:title" content="Senate — NANS Diaspora" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <h1 className="sr-only">Senate — NANS Diaspora</h1>

        <section className="bg-primary text-primary-foreground py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">Government</p>
            <p className="font-heading font-bold text-3xl md:text-5xl mb-4">Senate</p>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl">The legislative body of NANS Diaspora — senators representing zones and chapters, providing oversight and governance.</p>
          </div>
        </section>

        <section className="bg-muted border-b border-border px-6 md:px-10 py-4">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-muted-foreground mr-2">Filter by region:</span>
            {regions.map((region) => (
              <button key={region} onClick={() => setActiveRegion(region)} className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-colors ${activeRegion === region ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-foreground/70 border-border hover:border-primary hover:text-primary'}`}>{region}</button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground">{senate.filter((l) => activeRegion === ALL || l.region === activeRegion).length} member{senate.filter((l) => activeRegion === ALL || l.region === activeRegion).length !== 1 ? 's' : ''}</span>
          </div>
        </section>

        <section className="py-12 md:py-16 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {senate.filter((l) => activeRegion === ALL || l.region === activeRegion).map((leader) => (
              <div key={leader.id} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  {leader.photo ? (
                    <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.12)' }}>
                        <User size={36} className="text-primary/50" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="font-heading font-bold text-foreground text-base leading-snug mb-1">{leader.name}</h2>
                  <p className="text-sm text-primary font-medium mb-1">{leader.title}</p>
                  <p className="text-xs text-muted-foreground mb-1">{leader.chapter}</p>
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-4 w-fit" style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>{leader.region}</span>
                  <div className="mt-auto">
                    <a href={leader.swayUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                      View Profile <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
