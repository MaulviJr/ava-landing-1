import {
  ArrowRight,
  BadgeDollarSign,
  CalendarDays,
  CirclePlay,
  Clock3,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import { PhoneWidget } from './PhoneWidget';

const highlights = [
  { icon: Clock3, title: 'Works 24/7', body: 'Never misses a call' },
  { icon: CalendarDays, title: 'Books Automatically', body: 'Schedules in real-time' },
  { icon: BadgeDollarSign, title: 'Costs Less', body: 'Than a receptionist' },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-28 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10,10,10,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 0%, black 35%, transparent 100%)',
        }}
      />

      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-5 pb-16 sm:px-8 sm:pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-0 lg:px-10 lg:pb-24">
        <div className="relative z-10 animate-fade-up lg:pr-8 xl:pr-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-medium text-ink/70 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-ink" />
            Live for appointment-based businesses
          </div>

          <h1 className="mt-8 max-w-xl text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[4.5rem]">
            Ava — The AI
            <br />
            Calling Agent
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/60 sm:text-xl">
            Books appointments for you, without any breaks or sick leaves, and is light on your pocket.
          </p>

          <div className="mt-9 grid max-w-lg grid-cols-3 gap-3 border-y border-line py-5 sm:gap-6">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-ink/75">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold leading-tight text-ink sm:text-xs">{title}</p>
                  <p className="mt-1 hidden text-[10px] leading-tight text-ink/45 sm:block">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#trial"
              className="group inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:gap-3 hover:shadow-lift"
            >
              Try Ava free for 3 days
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#works"
              className="group inline-flex items-center gap-2 rounded-xl border border-line bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-mist"
            >
              <CirclePlay className="h-4 w-4 fill-ink/10" />
              <span>
                See Ava in Action
                <span className="ml-2 text-xs font-normal text-ink/45">2 min demo</span>
              </span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink/50">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-ink/60" />
              No credit card required
            </span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              3-day free trial
            </span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <RotateCcw className="h-3.5 w-3.5" />
              Cancel anytime
            </span>
          </div>
        </div>

        <div className="animate-fade-in [animation-delay:200ms] lg:-mr-4 xl:-mr-8">
          <PhoneWidget />
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="h-px w-full bg-line" />
      </div>
    </section>
  );
}
