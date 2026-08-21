import { LayoutDashboard, CalendarCheck, MessageSquare, FileText, type LucideIcon } from 'lucide-react';

export type DashboardTab = 'overview' | 'appointments' | 'messages' | 'summary';

const navItems: { id: DashboardTab; label: string; icon: LucideIcon }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'appointments', label: 'Appointments', icon: CalendarCheck },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'summary', label: 'Call Summary', icon: FileText },
];

export function DashboardSidebar({
  active,
  onChange,
}: {
  active: DashboardTab;
  onChange: (tab: DashboardTab) => void;
}) {
  return (
    <div className="flex shrink-0 flex-col border-b border-line bg-mist/30 p-3 sm:w-48 sm:border-b-0 sm:border-r sm:p-4">
      <div className="mb-3 sm:mb-6">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-rose-600/70 sm:text-[10px]">
          Aesthetics MedSpa
        </p>
        <p className="mt-0.5 text-xs font-semibold text-ink sm:text-sm">Staff Dashboard</p>
      </div>

      {/* Horizontal scrollable tab strip on mobile, vertical list from sm up */}
      <nav className="no-scrollbar flex gap-1.5 overflow-x-auto pb-0.5 sm:flex-col sm:gap-1 sm:overflow-visible sm:pb-0">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-left text-[11px] font-medium transition-colors sm:gap-2 sm:px-3 sm:text-sm ${
                isActive
                  ? 'border border-line bg-paper text-ink shadow-soft'
                  : 'border border-transparent text-ink/55 hover:text-ink'
              }`}
            >
              <item.icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}