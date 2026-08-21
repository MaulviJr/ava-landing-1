import { Quote } from 'lucide-react';
import { Section, SectionHeader } from './Section';

export function Proof() {
  return (
    <Section className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="What early clients are saying"
          title="Results from the first calls"
        />

        <div className="mt-12 rounded-2xl border border-line bg-mist/40 p-8 text-center shadow-soft sm:p-12">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-paper shadow-soft">
            <Quote className="h-5 w-5 text-ink/50" />
          </span>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink sm:text-xl">
            Ava answered <span className="text-ink">38 after-hours calls</span> in her first week
            live — calls that would have gone straight to voicemail.
          </p>
          <p className="mt-4 text-sm text-ink/50">Pilot clinic · week one dashboard</p>
        </div>

        <p className="mt-8 text-center text-sm text-ink/45">
          Currently onboarding our first pilot clients — check back soon for more real results.
        </p>
      </div>
    </Section>
  );
}
