import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Section, SectionHeader } from './Section';

const faqs = [
  {
    q: 'Does Ava replace my receptionist entirely, or work alongside them?',
    a: "Both. Most owners use Ava to cover what their staff can't — after-hours calls, overflow when the front desk is busy, and calls that would otherwise hit voicemail. During business hours Ava and your receptionist can split the load however you prefer.",
  },
  {
    q: "What happens if Ava doesn't know the answer to something?",
    a: "Ava never guesses. If a question is outside what it can verify — your real hours, pricing, policies, or calendar — it takes a message and escalates to a real person. The caller gets a honest 'let me have someone follow up' instead of a confident wrong answer.",
  },
  {
    q: 'Can I try it before paying?',
    a: 'Yes. You get a 3-day free trial with no credit card and no commitment. Ava runs on your line for three full days so you can see exactly what it catches before you pay a cent.',
  },
  {
    q: 'Is my business data shared with anyone else?',
    a: "No. Each client's configuration — hours, services, pricing, calendar — is fully isolated to your account. Your data is never shared across customers or used to train a shared model.",
  },
  {
    q: 'What happens to the $0 setup offer once the first 10 spots are gone?',
    a: 'Setup returns to the standard $300. We track this honestly — the counter on this page reflects real sign-ups. Once the first 10 are taken, the next batch moves to a reduced setup fee rather than disappearing entirely.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow="FAQ" title="Questions owners ask before signing up" />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="text-base font-medium text-ink sm:text-lg">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line transition-colors ${
                      isOpen ? 'bg-ink text-paper' : 'text-ink/60'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-sm leading-relaxed text-ink/65">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink/55">
          Still have a question?{' '}
          <a href="#trial" className="font-semibold text-ink underline-offset-4 hover:underline">
            Start the trial
          </a>{' '}
          and ask it on the onboarding call.
        </p>
      </div>
    </Section>
  );
}
