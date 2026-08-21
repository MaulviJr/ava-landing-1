import { Play, ExternalLink, ShieldCheck } from 'lucide-react';
import { Section, SectionHeader } from './Section';

export function Glimpse() {
  return (
    <Section id="works" className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="A Glimpse of How Ava Works"
          title="Hear an actual call, unedited"
          subtitle="No edits, no polished demo reel — just a real call the way a customer experiences it."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-mist/40 shadow-soft">
          <div className="relative aspect-video w-full bg-ink">
            {/* faux video frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="group flex flex-col items-center gap-4"
                aria-label="Play demo call"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper text-ink shadow-lift transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
                  <Play className="ml-1 h-7 w-7 fill-ink sm:h-8 sm:w-8" />
                </span>
                <span className="text-sm font-medium text-white/80">Play demo call · 3:42</span>
              </button>
            </div>

            {/* waveform decoration */}
            <div className="absolute inset-x-0 bottom-0 flex h-12 items-end justify-center gap-1 px-6 pb-4 opacity-40">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-white/60"
                  style={{ height: `${20 + Math.abs(Math.sin(i * 0.6)) * 80}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center gap-2 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            Full uncut demo call
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <p className="flex items-center gap-1.5 text-xs text-ink/45">
            <ShieldCheck className="h-3.5 w-3.5" />
            Recorded with the caller's permission
          </p>
        </div>
      </div>
    </Section>
  );
}
