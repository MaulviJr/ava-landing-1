import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function FinalCTA() {
  const { ref, visible } = useReveal();
  return (
    <section id="trial" className="bg-paper py-24 sm:py-32">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`mx-auto max-w-4xl px-5 sm:px-8 ${visible ? 'is-visible' : ''} reveal`}
      >
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)',
            }}
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              3-day free trial · no credit card
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
              Try Ava free for 3 days
            </h2>
            <p className="mt-4 text-lg text-white/60">No costs. No commitments.</p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#top"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:gap-3 hover:scale-[1.02]"
              >
                Start your free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#does"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                See what Ava does first
              </a>
            </div>

            <p className="mt-8 text-xs text-white/40">
              Only 6 of 10 founding spots remaining · $0 setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
