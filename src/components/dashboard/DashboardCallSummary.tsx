import { ContentHeader } from './ContentHeader';
import { callSummaries } from './dashboardData';

export function DashboardCallSummary({
  refreshing,
  onRefresh,
}: {
  refreshing: boolean;
  onRefresh: () => void;
}) {
  return (
    <div className="space-y-4">
      <ContentHeader
        title="Call Summary"
        subtitle="AI-generated summary of every call."
        onRefresh={onRefresh}
        refreshing={refreshing}
      />

      <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
        {callSummaries.map((c) => (
          <div key={c.id} className="rounded-xl border border-line bg-paper p-4 shadow-soft">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink/50">
              <span className="font-semibold text-ink">{c.type}</span>
              <span>·</span>
              <span>{c.timestamp}</span>
              <span>·</span>
              <span>{c.duration}</span>
              <span className="rounded-full bg-mist px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-ink/50">
                {c.status}
              </span>
              <span className="text-ink/40">{c.endReason}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{c.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
