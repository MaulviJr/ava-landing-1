import { RefreshCw } from 'lucide-react';

export function ContentHeader({
  title,
  subtitle,
  onRefresh,
  refreshing,
}: {
  title: string;
  subtitle: string;
  onRefresh: () => void;
  refreshing: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <h4 className="text-base font-semibold text-ink sm:text-xl">{title}</h4>
        <p className="mt-1 truncate text-[11px] text-ink/50 sm:text-sm">{subtitle}</p>
      </div>
      <button
        type="button"
        onClick={onRefresh}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-paper px-2.5 py-1.5 text-[11px] font-semibold text-ink/70 shadow-soft transition-colors hover:text-ink sm:px-3 sm:text-xs"
      >
        <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? 'animate-spin' : ''}`} />
        <span className="hidden sm:inline">Refresh</span>
      </button>
    </div>
  );
}
