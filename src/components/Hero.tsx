import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PhoneWidget } from './PhoneWidget';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-28 sm:pt-32">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        {/* left */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-medium text-ink/70 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live for appointment-based businesses
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[3.75rem] text-balance">
            Ava — The AI Calling Agent
          </h1>

          <div className="mt-6 space-y-1.5 text-lg text-ink/70 sm:text-xl">
            <p>Works for you 24/7</p>
            <p>Without any breaks or sick leaves</p>
            <p>Costs much less than a human call receptionist</p>
          </div>

          <p className="mt-5 max-w-md text-base font-medium text-ink">
            Won't lose your bookings or lie to your customers.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#trial"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:gap-3 hover:shadow-lift"
            >
              Try Ava free for 3 days
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-mist"
            >
              See Ava in Action
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-xs text-ink/50">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-ink/70" />
              No credit card to start
            </span>
            <span className="h-3 w-px bg-line" />
            <span>3-day free trial</span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="hidden sm:inline">$0 setup for first 10</span>
          </div>
        </div>

        {/* right */}
        <div className="animate-fade-in [animation-delay:200ms]">
          <PhoneWidget />
        </div>
      </div>

      {/* divider */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="h-px w-full bg-line" />
      </div>
    </section>
  );
}
