import { useState } from 'react';
import LeaderCard from './LeaderCard';

interface Leader {
  id: string;
  name: string;
  title: string;
  chapter: string;
  region: string;
  photo?: string;
  swayUrl: string;
}

interface LeaderGridProps {
  leaders: Leader[];
  title: string;
  subtitle: string;
}

const ALL_REGIONS = 'All Regions';

export default function LeaderGrid({ leaders, title, subtitle }: LeaderGridProps) {
  const regions = [ALL_REGIONS, ...Array.from(new Set(leaders.map((l) => l.region))).sort()];
  const [activeRegion, setActiveRegion] = useState(ALL_REGIONS);

  const filtered = activeRegion === ALL_REGIONS
    ? leaders
    : leaders.filter((l) => l.region === activeRegion);

  return (
    <main>
      {/* Page header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">
            Government
          </p>
          <h1 className="font-heading font-bold text-3xl md:text-5xl mb-4">{title}</h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl">{subtitle}</p>
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
              className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
                activeRegion === region
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-foreground/70 border-border hover:border-primary hover:text-primary'
              }`}
            >
              {region}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">{filtered.length} member{filtered.length !== 1 ? 's' : ''}</span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-background">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">No members found for this region.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((leader) => (
                <LeaderCard
                  key={leader.id}
                  name={leader.name}
                  title={leader.title}
                  chapter={leader.chapter}
                  region={leader.region}
                  photo={leader.photo}
                  swayUrl={leader.swayUrl}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
