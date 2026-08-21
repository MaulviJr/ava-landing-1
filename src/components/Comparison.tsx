import { Check, X, Minus } from 'lucide-react';
import { Section, SectionHeader } from './Section';

type Cell = 'yes' | 'no' | 'some' | 'neutral';
const rows: { label: string; cells: [Cell, Cell, Cell] }[] = [
  { label: 'Available 24/7', cells: ['no', 'no', 'yes'] },
  { label: 'Never calls in sick', cells: ['neutral', 'no', 'yes'] },
  { label: 'Answers instantly', cells: ['no', 'some', 'yes'] },
  { label: 'Never forgets to log a call', cells: ['no', 'some', 'yes'] },
  { label: 'Cost', cells: ['neutral', 'neutral', 'neutral'] },
];

const colValues: Record<Cell, string> = {
  yes: 'Yes',
  no: 'No',
  some: 'Sometimes',
  neutral: '—',
};

const costValues: [string, string, string] = [
  'Free (but costs you bookings)',
  '$2,000+/mo',
  'A fraction of that',
];

function CellIcon({ cell }: { cell: Cell }) {
  if (cell === 'yes') return <Check className="h-4 w-4 text-emerald-600" />;
  if (cell === 'no') return <X className="h-4 w-4 text-ink/30" />;
  if (cell === 'some') return <Minus className="h-4 w-4 text-ink/40" />;
  return null;
}

export function Comparison() {
  return (
    <Section className="py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="The comparison"
          title="Voicemail vs. a human receptionist vs. Ava"
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-line shadow-soft">
          {/* header */}
          <div className="grid grid-cols-4 bg-ink text-paper">
            <div className="p-4 text-xs font-semibold uppercase tracking-wider text-white/55 sm:p-5">
              Capability
            </div>
            {['Voicemail', 'Human Receptionist', 'Ava'].map((h, i) => (
              <div
                key={h}
                className={`p-4 text-sm font-semibold sm:p-5 ${
                  i === 2 ? 'bg-paper/10' : ''
                }`}
              >
                {h}
              </div>
            ))}
          </div>

          {/* rows */}
          {rows.map((row, idx) => (
            <div
              key={row.label}
              className={`grid grid-cols-4 ${
                idx % 2 === 0 ? 'bg-paper' : 'bg-mist/40'
              }`}
            >
              <div className="p-4 text-sm font-medium text-ink/80 sm:p-5">{row.label}</div>
              {row.cells.map((cell, i) => {
                const isCost = row.label === 'Cost';
                return (
                  <div
                    key={i}
                    className={`flex items-center p-4 sm:p-5 ${
                      i === 2 ? 'bg-ink/[0.03]' : ''
                    }`}
                  >
                    {isCost ? (
                      <span
                        className={`text-sm font-semibold ${
                          i === 2 ? 'text-ink' : 'text-ink/60'
                        }`}
                      >
                        {costValues[i]}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <CellIcon cell={cell} />
                        <span
                          className={`text-sm ${
                            cell === 'yes'
                              ? 'font-medium text-ink'
                              : cell === 'some'
                              ? 'text-ink/50'
                              : 'text-ink/40'
                          }`}
                        >
                          {colValues[cell]}
                        </span>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-ink/50">
          The only thing voicemail is free of is cost — it's expensive in every way that matters.
        </p>
      </div>
    </Section>
  );
}
