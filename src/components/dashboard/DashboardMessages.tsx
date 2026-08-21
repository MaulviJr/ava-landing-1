import { ContentHeader } from './ContentHeader';
import { messages } from './dashboardData';

export function DashboardMessages({
  refreshing,
  onRefresh,
}: {
  refreshing: boolean;
  onRefresh: () => void;
}) {
  return (
    <div className="space-y-4">
      <ContentHeader
        title="Messages"
        subtitle="Anything Ava couldn't fully resolve on its own."
        onRefresh={onRefresh}
        refreshing={refreshing}
      />

      <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
        {messages.map((m) => (
          <div key={m.id} className="rounded-xl border border-line bg-paper p-4 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold text-ink/50">Escalation from AI call</p>
              <span className="whitespace-nowrap rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600">
                {m.tag}
              </span>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-ink/40">
              <span className="font-medium text-ink/60">{m.caller}</span>
              <span>·</span>
              <span>{m.timestamp}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{m.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
