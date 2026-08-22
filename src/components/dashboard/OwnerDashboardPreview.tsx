import { useState } from 'react';
import { DashboardSidebar, type DashboardTab } from './DashboardSidebar';
import { DashboardOverview } from './DashboardOverview';
import { DashboardAppointments } from './DashboardAppointments';
import { DashboardMessages } from './DashboardMessages';
import { DashboardCallSummary } from './DashboardCallSummary';

/**
 * A navigable preview of the real Owner Command Center dashboard.
 * Fully interactive: switch tabs, search appointments, hit refresh —
 * this is what a customer's staff would actually click through.
 *
 * Mobile: sidebar collapses into a horizontal scrollable tab strip on
 * top, content below with its own scroll region.
 * Tablet/desktop (sm+): classic side-by-side app layout.
 */
export function OwnerDashboardPreview() {
  const [tab, setTab] = useState<DashboardTab>('overview');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    if (refreshing) return;
    setRefreshing(true);
    window.setTimeout(() => setRefreshing(false), 700);
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line bg-paper shadow-lift">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-mist/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="ml-2 truncate rounded-md bg-paper px-3 py-1 text-[10px] text-ink/40 shadow-soft sm:text-[11px]">
          ava/dashboard
        </span>
      </div>

      <div className="flex flex-col sm:h-[520px] sm:flex-row">
        <DashboardSidebar active={tab} onChange={setTab} />

        <div className="max-h-[420px] flex-1 overflow-y-auto bg-mist/10 p-3.5 sm:max-h-none sm:p-6">
          {tab === 'overview' && (
            <DashboardOverview
              onViewAll={() => setTab('appointments')}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          )}
          {tab === 'appointments' && (
            <DashboardAppointments refreshing={refreshing} onRefresh={handleRefresh} />
          )}
          {tab === 'messages' && (
            <DashboardMessages refreshing={refreshing} onRefresh={handleRefresh} />
          )}
          {tab === 'summary' && (
            <DashboardCallSummary refreshing={refreshing} onRefresh={handleRefresh} />
          )}
        </div>
      </div>
    </div>
  );
}