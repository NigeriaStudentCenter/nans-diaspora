import { ExternalLink, User } from 'lucide-react';

interface LeaderCardProps {
  name: string;
  title: string;
  chapter: string;
  region: string;
  photo?: string;
  swayUrl: string;
}

export default function LeaderCard({ name, title, chapter, region, photo, swayUrl }: LeaderCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Photo */}
      <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'hsl(var(--primary) / 0.12)' }}
            >
              <User size={36} className="text-primary/50" />
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-foreground text-base leading-snug mb-1">
          {name}
        </h3>
        <p className="text-sm text-primary font-medium mb-1">{title}</p>
        <p className="text-xs text-muted-foreground mb-1">{chapter}</p>
        <span
          className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-4 w-fit"
          style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}
        >
          {region}
        </span>
        <div className="mt-auto">
          <a
            href={swayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Profile
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
