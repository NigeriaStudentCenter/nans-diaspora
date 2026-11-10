import { Helmet } from '@dr.pogodin/react-helmet';
import { useState } from 'react';
import { ExternalLink, User, Star } from 'lucide-react';
import { hall_of_fame } from 'virtual:content';

const ALL = 'All Regions';

export default function HallOfFamePage() {
  const regions = [ALL, ...Array.from(new Set(hall_of_fame.map((l) => l.region))).sort()];
  const [activeRegion, setActiveRegion] = useState(ALL);

  return (
    <>
      <Helmet>
        <title>Hall of Fame — NANS Diaspora</title>
        <meta name="description" content="Honouring the distinguished individuals who have made an outstanding impact on Nigerian students in the diaspora." />
        <link rel="canonical" href="https://nansdiasporia.org/government/hall-of-fame" />
        <meta property="og:title" content="Hall of Fame — NANS Diaspora" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <h1 className="sr-only">Hall of Fame — NANS Diaspora</h1>

        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">Government</p>
            <div className="flex items-center gap-4 mb-4">
              <Star size={32} className="text-secondary fill-secondary flex-shrink-0" />
              <p className="font-heading font-bold text-3xl md:text-5xl">Hall of Fame</p>
            </div>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl">
              Honouring the distinguished individuals who have made an outstanding and lasting impact on Nigerian students in the diaspora.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <section className="bg-muted border-b border-border px-6 md:px-10 py-4">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-muted-foreground mr-2">Filter by region:</span>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-colors ${activeRegion === region ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-foreground/70 border-border hover:border-primary hover:text-primary'}`}
              >
                {region}
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground">
              {hall_of_fame.filter((l) => activeRegion === ALL || l.region === activeRegion).length} inductee{hall_of_fame.filter((l) => activeRegion === ALL || l.region === activeRegion).length !== 1 ? 's' : ''}
            </span>
          </div>
        </section>

        {/* Grid */}
        <section className="py-12 md:py-16 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hall_of_fame.filter((l) => activeRegion === ALL || l.region === activeRegion).map((inductee) => (
              <div key={inductee.id} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow relative">
                {/* Gold star badge */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--secondary))' }}>
                  <Star size={14} className="text-foreground fill-foreground" />
                </div>

                {/* Photo */}
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  {inductee.photo ? (
                    <img src={inductee.photo} alt={inductee.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--secondary) / 0.15)' }}>
                        <User size={36} className="text-secondary/60" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="font-heading font-bold text-foreground text-base leading-snug mb-1">{inductee.name}</h2>
                  <p className="text-sm font-medium mb-1" style={{ color: 'hsl(var(--secondary))' }}>{inductee.title}</p>
                  <p className="text-xs text-muted-foreground mb-1">{inductee.chapter}</p>
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-4 w-fit" style={{ background: 'hsl(var(--secondary) / 0.15)', color: 'hsl(var(--secondary))' }}>
                    {inductee.region}
                  </span>
                  <div className="mt-auto">
                    <a
                      href={inductee.swayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 border font-semibold text-sm transition-colors"
                      style={{ borderColor: 'hsl(var(--secondary))', color: 'hsl(var(--secondary))' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'hsl(var(--secondary))';
                        (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(var(--foreground))';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                        (e.currentTarget as HTMLAnchorElement).style.color = 'hsl(var(--secondary))';
                      }}
                    >
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
