import { Check, Star } from 'lucide-react';
import { Section, SectionHeader } from './Section';

const plans = [
  {
    name: 'Starter',
    price: 147,
    minutes: 300,
    overage: '$0.45/min',
    audience: 'Solo owners, low call volume, testing the waters.',
    featured: false,
  },
  {
    name: 'Growth',
    price: 397,
    minutes: 800,
    overage: '$0.35/min',
    audience: "Businesses that can't afford a missed call — most of our customers.",
    featured: true,
  },
  {
    name: 'Scale',
    price: 797,
    minutes: 2000,
    overage: '$0.25/min',
    audience: 'Multi-location / high call volume.',
    featured: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" mist className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple plans that scale with your calls"
          subtitle="Every plan includes the full Ava system — the only difference is minutes."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                p.featured
                  ? 'border-ink bg-ink text-paper shadow-lift lg:-translate-y-3'
                  : 'border-line bg-paper text-ink shadow-soft hover:shadow-lift'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-ink shadow-soft">
                  <Star className="h-3.5 w-3.5 fill-ink" />
                  Most popular
                </span>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className={`text-lg font-semibold ${p.featured ? 'text-white' : 'text-ink'}`}>
                  {p.name}
                </h3>
              </div>

              <div className="mt-5 flex items-end gap-1">
                <span className={`text-4xl font-semibold tracking-tight ${p.featured ? 'text-white' : 'text-ink'}`}>
                  ${p.price}
                </span>
                <span className={`mb-1 text-sm ${p.featured ? 'text-white/55' : 'text-ink/45'}`}>
                  /mo
                </span>
              </div>

              <div className={`mt-5 grid gap-3 border-t pt-5 ${p.featured ? 'border-white/15' : 'border-line'}`}>
                <Row featured={p.featured} label="Included minutes" value={`${p.minutes} min`} />
                <Row featured={p.featured} label="Overage rate" value={p.overage} />
                <Row featured={p.featured} label="Setup" value="$0 for first 10" highlight />
              </div>

              <p className={`mt-5 text-sm leading-relaxed ${p.featured ? 'text-white/65' : 'text-ink/55'}`}>
                {p.audience}
              </p>

              <a
                href="#trial"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  p.featured
                    ? 'bg-paper text-ink hover:scale-[1.02]'
                    : 'bg-ink text-paper hover:shadow-lift'
                }`}
              >
                Start 3-day trial
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink/55">
          <span className="font-semibold text-ink">$0 setup for the first 10 customers</span> ·
          $300 setup after. No credit card to start the trial.
        </p>
      </div>
    </Section>
  );
}

function Row({
  label,
  value,
  featured,
  highlight,
}: {
  label: string;
  value: string;
  featured: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={`flex items-center gap-2 text-sm ${featured ? 'text-white/70' : 'text-ink/60'}`}>
        <Check className={`h-4 w-4 ${highlight ? 'text-emerald-600' : featured ? 'text-white/60' : 'text-ink/40'}`} />
        {label}
      </span>
      <span className={`text-sm font-semibold ${featured ? 'text-white' : 'text-ink'}`}>{value}</span>
    </div>
  );
}
