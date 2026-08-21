import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { ContentHeader } from './ContentHeader';
import { appointments } from './dashboardData';

export function DashboardAppointments({
  refreshing,
  onRefresh,
}: {
  refreshing: boolean;
  onRefresh: () => void;
}) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return appointments;
    return appointments.filter(
      (a) => a.client.toLowerCase().includes(q) || a.confirmation.includes(q)
    );
  }, [query]);

  return (
    <div className="space-y-4">
      <ContentHeader
        title="Appointments"
        subtitle={`${appointments.length} booked through Ava or manually.`}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink/35" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or confirmation code"
          className="w-full rounded-lg border border-line bg-paper py-2 pl-9 pr-3 text-xs text-ink placeholder:text-ink/35 focus:outline-none focus:ring-1 focus:ring-ink/20 sm:text-sm"
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-paper shadow-soft">
        <div className="hidden grid-cols-[1.1fr_1.2fr_1fr_0.7fr_0.9fr] gap-2 border-b border-line bg-mist/40 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-ink/45 sm:grid">
          <span>Client</span>
          <span>Service</span>
          <span>When</span>
          <span>Confirmation</span>
          <span>Source</span>
        </div>

        <div className="max-h-64 divide-y divide-line/70 overflow-y-auto">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-center text-xs text-ink/40">
              No appointments match your search.
            </p>
          )}

          {filtered.map((a) => (
            <div
              key={a.id}
              className="flex flex-col gap-1 px-4 py-3 text-xs sm:grid sm:grid-cols-[1.1fr_1.2fr_1fr_0.7fr_0.9fr] sm:items-center sm:gap-2 sm:text-sm"
            >
              <div className="flex items-center justify-between gap-2 sm:contents">
                <span className="font-medium text-ink">{a.client}</span>
                <span className="whitespace-nowrap rounded-full bg-rose-50 px-2 py-0.5 text-[9px] font-semibold text-rose-600 sm:hidden">
                  {a.source}
                </span>
              </div>
              <span className="text-ink/60">{a.service}</span>
              <span className="text-ink/50">
                {a.when} · {a.time}
              </span>
              <span className="text-ink/50">{a.confirmation}</span>
              <span className="hidden sm:inline-flex">
                <span className="w-fit whitespace-nowrap rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600">
                  {a.source}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
