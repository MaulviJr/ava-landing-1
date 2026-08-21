import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  Calculator,
  LayoutDashboard,
  Gift,
  ShieldCheck,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';
import { Section, SectionHeader } from './Section';
import { OwnerDashboardPreview } from './dashboard/OwnerDashboardPreview';
/* ---------- Cost calculator ---------- */
/* Unchanged — reused exactly as-is inside Reason 01. */
function CostCalculator() {
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(18);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'scale'>('growth');

  const plans = {
    starter: {
      name: 'Starter',
      price: 147,
      minutes: 300,
      overage: 0.45,
    },
    growth: {
      name: 'Growth',
      price: 397,
      minutes: 800,
      overage: 0.35,
    },
    scale: {
      name: 'Scale',
      price: 797,
      minutes: 2000,
      overage: 0.25,
    },
  };

  const plan = plans[selectedPlan];

  // 5 days/week × 52 weeks ÷ 12 months
  const humanMonthlyCost = Math.round(
    hoursPerDay * hourlyRate * 5 * (52 / 12)
  );

  const monthlySavings = Math.max(0, humanMonthlyCost - plan.price);

  const savingsPercentage =
    humanMonthlyCost > 0
      ? Math.round((monthlySavings / humanMonthlyCost) * 100)
      : 0;

  const fmt = (n: number) =>
    n.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

  return (
    <div className="rounded-2xl border border-line bg-paper p-6 shadow-soft sm:p-7">
      {/* Header */}
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5">
          <Calculator className="h-4.5 w-4.5 text-ink/70" />
        </span>

        <p className="text-sm font-semibold text-ink">
          See how much you could save with Ava.
        </p>
      </div>

      {/* Inputs */}
      <div className="mt-6 space-y-5">
        <Slider
          label="Hours of phone coverage per day"
          value={hoursPerDay}
          min={6}
          max={12}
          onChange={setHoursPerDay}
          suffix=" hrs"
        />

        <Slider
  label="Human receptionist hourly rate"
  value={hourlyRate}
  min={15}
  max={25}
  step={1}
  onChange={setHourlyRate}
  prefix="$"
  suffix="/hr"
/>
      </div>

      {/* Ava Plan Selector */}
      <div className="mt-7">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-ink/70">
            Choose an Ava plan
          </label>

          <span className="text-xs text-ink/40">
            {plan.minutes.toLocaleString()} included min
          </span>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2">
          {(
            Object.entries(plans) as [
              'starter' | 'growth' | 'scale',
              (typeof plans)['starter']
            ][]
          ).map(([key, currentPlan]) => {
            const isSelected = selectedPlan === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedPlan(key)}
                className={`relative rounded-xl border p-3 text-left transition-all ${
                  isSelected
                    ? 'border-ink bg-ink text-paper shadow-sm'
                    : 'border-line bg-paper text-ink hover:border-ink/30'
                }`}
              >
                {key === 'growth' && (
                  <span
                    className={`absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                      isSelected
                        ? 'bg-paper text-ink'
                        : 'bg-ink text-paper'
                    }`}
                  >
                    Most Popular
                  </span>
                )}

                <p
                  className={`text-xs font-semibold ${
                    isSelected ? 'text-paper' : 'text-ink'
                  }`}
                >
                  {currentPlan.name}
                </p>

                <p
                  className={`mt-1 text-lg font-semibold tracking-tight ${
                    isSelected ? 'text-paper' : 'text-ink'
                  }`}
                >
                  ${currentPlan.price}
                  <span
                    className={`text-[10px] font-normal ${
                      isSelected ? 'text-white/60' : 'text-ink/40'
                    }`}
                  >
                    /mo
                  </span>
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Stats */}
      <div className="mt-7 grid grid-cols-2 gap-3">
        <Stat
          label="Human receptionist"
          value={fmt(humanMonthlyCost)}
          tone="bad"
        />

        <Stat
          label={`Ava ${plan.name}`}
          value={fmt(plan.price)}
          tone="muted"
        />
      </div>

      {/* Savings */}
      <div className="mt-3 rounded-xl bg-ink p-5 text-paper">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-white/60">
            Your estimated savings
          </span>

          <span className="text-xs text-white/50">
            {savingsPercentage}% less
          </span>
        </div>

        <p className="mt-2 text-2xl font-semibold tracking-tight">
          {fmt(monthlySavings)}
          <span className="text-base font-normal text-white/60">
            {' '}
            saved / mo
          </span>
        </p>

        <div className="mt-3 flex items-center justify-between text-xs text-white/50">
          <span>
            Human: {fmt(humanMonthlyCost)}
          </span>

          <span>
            Ava: {fmt(plan.price)}
          </span>
        </div>

        <a
          href="#trial"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all hover:gap-2.5"
        >
          Start the 3-day trial
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Disclaimer */}
      <p className="mt-4 text-[11px] leading-relaxed text-ink/40">
        Estimates based on 5 days of coverage per week. Human receptionist
        costs may vary by location, experience, benefits, and employment type.
        Ava pricing excludes applicable overage charges.
      </p>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  prefix = '',
  suffix = '',
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink/70">{label}</label>
        <span className="text-sm font-semibold text-ink">
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none"
        style={{
          background: `linear-gradient(to right, #0A0A0A ${pct}%, #E5E5E5 ${pct}%)`,
        }}
      />
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'muted' | 'bad';
}) {
  return (
    <div className="rounded-xl border border-line bg-mist/40 p-4">
      <p className="text-[11px] font-medium uppercase tracking-wider text-ink/45">{label}</p>
      <p
        className={`mt-1 text-xl font-semibold tracking-tight ${
          tone === 'bad' ? 'text-ink' : 'text-ink/70'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

/* ---------- Reason 02 visual: reserved space for the future dashboard ---------- */
function OwnerCommandCenterPlaceholder() {
  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-line bg-paper/60 p-8 text-center shadow-soft sm:aspect-[16/10]">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper shadow-soft">
        <LayoutDashboard className="h-6 w-6 text-ink/40" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink/60">Owner Command Center</p>
        <p className="mt-1 text-xs text-ink/40">Your live dashboard preview is coming soon</p>
      </div>
    </div>
  );
}

/* ---------- Reason 03 visual ---------- */
function TrialCard() {
  const items = [
    'No credit card required',
    'No commitment, cancel anytime',
    'Put Ava on your real line',
    'See real calls, bookings, and results',
  ];
  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-7 shadow-soft sm:p-8">
      <div className="flex items-start gap-4">
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100/80">
          <Gift className="h-6 w-6 text-emerald-700" />
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white ring-2 ring-paper">
            3
          </span>
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-ink">3-day free trial</h3>
          <ul className="mt-3 space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink/65">
                <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#trial"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-all hover:gap-3 hover:shadow-lift sm:w-auto"
      >
        Start your 3-day free trial
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

/* ---------- Reason 04 visual: White-glove, done-for-you onboarding ---------- */
function OnboardingCard() {
  const items = [
    'Fully done-for-you configuration',
    "Built around your business's real details",
    '1-on-1 live onboarding call',
    'Tested and confirmed before going live',
  ];
  return (
    <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-7 shadow-soft sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-100/80">
          <Sparkles className="h-6 w-6 text-sky-700" />
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-ink">
            White-glove, done-for-you onboarding
          </h3>
          <ul className="mt-3 space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink/65">
                <Check className="h-4 w-4 shrink-0 text-sky-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold text-sky-700">
            Direct support, whenever you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reason 05 visual ---------- */
function TrustCard() {
  const items = [
    'Real-time info from your sources',
    'Checks your real calendar',
    "Honest when it doesn't know",
    'Seamless handoff to your team',
  ];
  return (
    <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-7 shadow-soft sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-violet-100/80">
          <ShieldCheck className="h-6 w-6 text-violet-700" />
        </span>
        <div className="flex-1">
          <ul className="space-y-2.5">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink/75">
                <Check className="h-4 w-4 shrink-0 text-violet-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold text-violet-700">
            Built to protect your reputation.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Scroll progress dots ---------- */
function StepDots({
  active,
  total,
  dark = false,
}: {
  active: number;
  total: number;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 flex items-center justify-center gap-1.5 sm:mb-14">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold transition-colors duration-300 ${
              i === active
                ? dark
                  ? 'bg-paper text-ink'
                  : 'bg-ink text-paper'
                : dark
                ? 'border border-white/15 text-white/35'
                : 'border border-line text-ink/35'
            }`}
          >
            {i + 1}
          </span>
          {i < total - 1 && (
            <span className={`mx-1.5 h-px w-6 ${dark ? 'bg-white/15' : 'bg-line'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- Numbered tag (01 / 02 / 03 / 04 / 05) ---------- */
function NumberBadge({ n, dark = false }: { n: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold shadow-soft ${
        dark
          ? 'border-white/15 bg-white/5 text-white/70'
          : 'border-line bg-paper text-ink/60'
      }`}
    >
      {n}
    </span>
  );
}

/* ---------- One reason: number + headline + copy (left), visual (right) ---------- */
/* ---------- One reason: number + headline + copy (left), visual (right) ---------- */
/* Pass `centered` to stack headline/copy above a full-width, centered
   visual instead — used for Reason 02 so the dashboard widget gets full
   width and undivided attention rather than sharing a column. */
function ReasonBlock({
  number,
  headline,
  copy,
  visual,
  refCallback,
  dark = false,
  centered = false,
}: {
  number: string;
  headline: string;
  copy: string;
  visual: ReactNode;
  refCallback: (el: HTMLDivElement | null) => void;
  dark?: boolean;
  centered?: boolean;
}) {
  if (centered) {
    return (
      <div ref={refCallback} className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <NumberBadge n={number} dark={dark} />
          </div>
          <h3
            className={`mt-5 text-2xl font-semibold tracking-tight sm:text-5xl ${
              dark ? 'text-white' : 'text-ink'
            }`}
          >
            {headline}
          </h3>
          <p
            className={`mt-4 text-base leading-relaxed ${
              dark ? 'text-white/65' : 'text-ink/60'
            }`}
          >
            {copy}
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-4xl sm:mt-12">{visual}</div>
      </div>
    );
  }

  return (
    <div ref={refCallback} className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <NumberBadge n={number} dark={dark} />
          <h3
            className={`mt-5 text-2xl font-semibold tracking-tight sm:text-5xl ${
              dark ? 'text-white' : 'text-ink'
            }`}
          >
            {headline}
          </h3>
          <p
            className={`mt-4 max-w-sm text-base leading-relaxed ${
              dark ? 'text-white/65' : 'text-ink/60'
            }`}
          >
            {copy}
          </p>
        </div>
        <div>{visual}</div>
      </div>
    </div>
  );
}

/**
 * Tracks which reason is currently "in focus."
 *
 * Deliberately NOT ratio-based (IntersectionObserver's intersectionRatio),
 * because reasons have very different heights (a tall calculator vs. a
 * short trial card) — a short section can read as ~100% visible while
 * still overlapping the section the user is actually looking at, which
 * causes the indicator to jump ahead/behind at section boundaries.
 *
 * Instead: on every scroll frame, find each section's real position via
 * getBoundingClientRect and pick whichever one's vertical center is
 * closest to a fixed focus line in the viewport. This is a direct
 * measurement of actual section position vs. actual viewport position —
 * no ratios, no timers, no arbitrary offsets — so it stays correct
 * scrolling up, down, fast, slow, or landing mid-section on refresh.
 */
function useSectionTracker(count: number) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>(Array(count).fill(null));
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const focusRatio = 0.45; // focus line: 45% down the viewport

    const computeActive = () => {
      rafRef.current = null;
      const focusY = window.innerHeight * focusRatio;

      let closestIdx = 0;
      let closestDist = Infinity;

      refs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - focusY);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = idx;
        }
      });

      setActive((prev) => (prev === closestIdx ? prev : closestIdx));
    };

    const requestUpdate = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(computeActive);
      }
    };

    // Run once immediately so a mid-scroll page refresh lands on the
    // correct number right away, not just after the next scroll event.
    computeActive();

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [count]);

  return { active, refs };
}

export function WhyAva() {
  const total = 5;
  const { active, refs } = useSectionTracker(total);

  const refCallbacks = useMemo(
    () =>
      Array.from({ length: total }, (_, i) => (el: HTMLDivElement | null) => {
        refs.current[i] = el;
      }),
    [refs]
  );

  return (
    <>
      {/* Header + Reason 01 */}
      <Section id="why" className="pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader
            eyebrow="Why Choose Ava"
            title="Five Reasons To Choose And Stick With Ava"
            subtitle="These are some real good reasons..."
            
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <StepDots active={active} total={total} />
          <ReasonBlock
            number="01"
            headline="Ava is light on your pocket."
            copy="Compare Ava to a human receptionist and see the savings for yourself."
            visual={<CostCalculator />}
            refCallback={refCallbacks[0]}
          />
        </div>
      </Section>

      {/* Reason 02 */}
      <Section mist className="py-20 sm:py-24">
        <StepDots active={active} total={total} />
        <ReasonBlock
          number="02"
          headline="Your calls. Your control."
          copy="Track calls, bookings, messages, and escalations — all from your Owner Command Center. Below is a sample of how it will look when it goes live, with your real business data."
          visual={<OwnerDashboardPreview />}
          refCallback={refCallbacks[1]}
          centered
        />
      </Section>

      {/* Reason 03 */}
      <Section className="py-20 sm:py-24">
        <StepDots active={active} total={total} />
        <ReasonBlock
          number="03"
          headline="Try it free for 3 days"
          copy="No credit card. No commitment. Put Ava on your line for three full days and watch what it catches."
          visual={<TrialCard />}
          refCallback={refCallbacks[2]}
        />
      </Section>

      {/* Reason 04 */}
      <Section className="py-20 sm:py-24">
        <StepDots active={active} total={total} />
        <ReasonBlock
          number="04"
          headline="We set it up for you."
          copy="No figuring it out on your own. Ava is configured around your business, confirmed with you on a live call, and tested before it ever answers a real one."
          visual={<OnboardingCard />}
          refCallback={refCallbacks[3]}
        />
      </Section>

      {/* Reason 05 — dark, closing anchor */}
      <Section className="pb-24 pt-20 sm:pb-28 sm:pt-24">
        <StepDots active={active} total={total} />
        <ReasonBlock
          number="05"
          headline="Never makes things up"
          copy="Ava looks up your real hours, pricing, and policies live on every call. It checks your real calendar before offering a slot. If it doesn't know, it hands off to a real person — instead of bluffing."
          visual={<TrustCard />}
          refCallback={refCallbacks[4]}
          
        />
      </Section>
    </>
  );
}