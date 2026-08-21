import { ContentHeader } from './ContentHeader';
import { overviewStats, overviewAppointments } from './dashboardData';

export function DashboardOverview({
  onViewAll,
  refreshing,
  onRefresh,
}: {
  onViewAll: () => void;
  refreshing: boolean;
  onRefresh: () => void;
}) {
  return (
    <div className="space-y-5 sm:space-y-6">
      <ContentHeader
        title="Overview"
        subtitle="Everything Ava has handled, at a glance."
        onRefresh={onRefresh}
        refreshing={refreshing}
      />

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
        {overviewStats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-line bg-paper p-3 shadow-soft sm:p-4"
          >
            <p className="text-[9px] font-medium uppercase tracking-wider text-ink/45 sm:text-[10px]">
              {s.label}
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-ink sm:text-2xl">
              {s.value}
            </p>
            {s.hint && <p className="mt-0.5 text-[9px] text-ink/40 sm:text-[10px]">{s.hint}</p>}
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-paper shadow-soft">
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <p className="text-sm font-semibold text-ink">Appointments</p>
          <button
            type="button"
            onClick={onViewAll}
            className="text-xs font-semibold text-ink/60 transition-colors hover:text-ink"
          >
            View all
          </button>
        </div>
        <div className="divide-y divide-line/70">
          {overviewAppointments.map((a) => (
            <div key={a.id} className="flex items-center justify-between gap-3 px-4 py-2.5 sm:py-3">
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-ink sm:text-sm">{a.title}</p>
                <p className="mt-0.5 text-[10px] text-ink/45 sm:text-xs">{a.when}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="hidden text-xs text-ink/40 sm:block">{a.phone}</span>
                <span className="whitespace-nowrap rounded-full bg-rose-50 px-2 py-0.5 text-[9px] font-semibold text-rose-600 sm:text-[10px]">
                  {a.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
