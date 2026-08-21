import { Wrench, Power, CalendarCheck } from 'lucide-react';
import { Section, SectionHeader } from './Section';

const steps = [
  {
    icon: Wrench,
    title: 'We configure it for you',
    body: 'Tell us your hours, services, and pricing — we build the rest from a proven template for your business type.',
  },
  {
    icon: Power,
    title: 'It starts working',
    body: 'Live on your number in days, not weeks. A 1-on-1 onboarding call confirms every detail before going live.',
  },
  {
    icon: CalendarCheck,
    title: 'You get the bookings',
    body: 'Every appointment checked against your real calendar, confirmed with a spoken code, and logged automatically.',
  },
];

export function Setup() {
  return (
    <Section id="setup" mist className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="How We Set It Up"
          title="Three steps. Zero technical work on your end."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-line bg-paper p-6 shadow-soft transition-all hover:shadow-lift"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/35">
                Step {i + 1}
              </span>
              <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.body}</p>

              {i < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-line md:block" />
              )}
            </div>
          ))}
        </div>

        {/* founding offer */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-paper shadow-soft">
          <div className="grid items-center gap-6 p-7 sm:p-9 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                Founding customer offer
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                <span className="text-ink/35 line-through">$300</span> setup →{' '}
                <span className="text-ink">$0</span> for the first 10 customers
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
                Be one of our first 10 customers and get your entire setup done for free — Be quick so that you don't regret later!
              </p>
            </div>

            <div className="rounded-xl bg-ink p-6 text-paper">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/55">
                    Spots taken
                  </p>
                  <p className="mt-1 text-3xl font-semibold tracking-tight">0 / 10</p>
                </div>
                <div className="h-2 w-24 rounded-full bg-white/15">
                  <div className="h-2 w-2/5 rounded-full bg-paper" />
                </div>
              </div>
              <a
                href="#trial"
                className="mt-5 flex w-full items-center justify-center rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Claim a spot
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
