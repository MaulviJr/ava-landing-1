import { useMemo, useState } from 'react';
import { Calculator, LayoutDashboard, Gift, ShieldCheck, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from './Section';

/* ---------- Cost calculator ---------- */
/* ---------- Cost calculator ---------- */
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

/* ---------- Dashboard mock ---------- */
function DashboardMock() {
  const rows = [
    { name: 'Maria S.', action: 'Booked · Cleaning', time: '2:32 PM', tag: 'Booked' },
    { name: 'James L.', action: 'Rescheduled to Thu', time: '1:58 PM', tag: 'Updated' },
    { name: 'Unknown', action: 'After-hours · callback requested', time: '11:47 PM', tag: 'Message' },
    { name: 'Priya K.', action: 'Asked about pricing · answered', time: 'Yesterday', tag: 'Answered' },
  ];
  const tagTone: Record<string, string> = {
    Booked: 'bg-ink text-paper',
    Updated: 'bg-mist text-ink/70 border border-line',
    Message: 'bg-ink/5 text-ink/70 border border-line',
    Answered: 'bg-ink/5 text-ink/70 border border-line',
  };
  return (
    <div className="rounded-2xl border border-line bg-paper p-5 shadow-soft sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5">
            <LayoutDashboard className="h-4.5 w-4.5 text-ink/70" />
          </span>
          <p className="text-sm font-semibold text-ink">Owner Command Center</p>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink/45">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {[
          ['Calls today', '27'],
          ['Booked', '14'],
          ['Messages', '3'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-mist/50 px-3 py-2.5">
            <p className="text-[10px] font-medium uppercase tracking-wider text-ink/45">{k}</p>
            <p className="mt-0.5 text-lg font-semibold text-ink">{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 divide-y divide-line/70">
        {rows.map((r) => (
          <div key={r.name + r.action} className="flex items-center gap-3 py-2.5">
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-ink">{r.name}</p>
              <p className="truncate text-xs text-ink/50">{r.action}</p>
            </div>
            <span className="hidden text-[11px] text-ink/40 sm:block">{r.time}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${tagTone[r.tag]}`}>
              {r.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Benefit cards ---------- */
const benefits = [
  {
    icon: Gift,
    title: '3-day free trial',
    body: 'No credit card. No commitment. Put Ava on your line for three full days and watch what it catches.',
  },
  {
    icon: ShieldCheck,
    title: 'Never makes things up',
    body: "Ava looks up your real hours, pricing, and policies live on every call. It checks your real calendar before offering a slot. If it doesn't know, it hands off to a real person — instead of bluffing.",
  },
];

export function WhyAva() {
  return (
    <Section id="why" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why Choose Ava"
          title="The receptionist that pays for itself"
          subtitle="Four reasons owners switch — and stay — with Ava."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <CostCalculator />
          <div className="flex flex-col gap-6">
            <DashboardMock />
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-line bg-paper p-5 transition-all hover:shadow-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 transition-colors group-hover:bg-ink group-hover:text-paper">
                    <b.icon className="h-4.5 w-4.5 text-ink/70 transition-colors group-hover:text-paper" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
