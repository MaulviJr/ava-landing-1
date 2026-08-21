import { useEffect, useState } from 'react';
import { Phone, PhoneCall, CalendarCheck, MessageSquare, Check } from 'lucide-react';

const businesses = ['Dental Clinics', 'Salons', 'Gyms', 'Med Spas', 'Chiropractors', 'Wellness Studios'];
const pains = [
  'Missed calls',
  'Lost bookings',
  'Voicemail no one checks',
  'Calls outside business hours',
  'Receptionist already on another call',
];

export function PhoneWidget() {
  const [bizIndex, setBizIndex] = useState(0);
  const [painIndex, setPainIndex] = useState(0);

  useEffect(() => {
    const bizTimer = setInterval(
      () => setBizIndex((i) => (i + 1) % businesses.length),
      2200
    );
    const painTimer = setInterval(
      () => setPainIndex((i) => (i + 1) % pains.length),
      1800
    );
    return () => {
      clearInterval(bizTimer);
      clearInterval(painTimer);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 rounded-[4rem] bg-ink/5 blur-2xl" />

      {/* physical side buttons */}
      <span className="absolute -left-[3px] top-24 h-7 w-[3px] rounded-l-sm bg-ink/20" />
      <span className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l-sm bg-ink/20" />
      <span className="absolute -left-[3px] top-52 h-12 w-[3px] rounded-l-sm bg-ink/20" />
      <span className="absolute -right-[3px] top-40 h-16 w-[3px] rounded-r-sm bg-ink/20" />

      {/* phone frame — dark bezel, locked to iPhone-like proportions */}
      <div className="relative aspect-[9/18.2] w-full rounded-[3rem] border-4 border-ink bg-ink p-2 shadow-lift">
        {/* screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-mist/60">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />

          {/* content */}
          <div className="flex h-full flex-col px-4 pb-5 pt-11">
            {/* status row */}
            <div className="flex items-center justify-between text-[11px] font-medium text-ink/45">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-ink/30" />
                Ava
              </span>
            </div>

            {/* live call card */}
            <div className="mt-5 rounded-2xl border border-line bg-paper p-4 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-500/70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                    Live call
                  </span>
                </div>
                <PhoneCall className="h-4 w-4 text-ink/40" />
              </div>

              <p className="mt-3 text-sm font-medium text-ink">
                "Hi, I'd like to book an appointment for next week."
              </p>

              {/* typing bubble */}
              <div className="mt-3 flex items-center gap-1.5 rounded-xl bg-mist/70 px-3 py-2">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ink/40 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ink/40 [animation-delay:200ms]" />
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ink/40 [animation-delay:400ms]" />
                <span className="ml-1 text-xs text-ink/45">Ava is responding…</span>
              </div>
            </div>

            {/* rotating business line */}
            <div className="mt-4 overflow-hidden rounded-xl border border-line bg-paper px-4 py-3">
              <p className="text-[11px] font-medium uppercase tracking-wider text-ink/40">
                Ava works for
              </p>
              <div className="relative mt-1.5 h-7 overflow-hidden">
                {businesses.map((b, i) => (
                  <div
                    key={b}
                    className="absolute inset-0 flex items-center transition-all duration-500"
                    style={{
                      transform: `translateY(${(i - bizIndex) * 100}%)`,
                      opacity: i === bizIndex ? 1 : 0,
                    }}
                  >
                    <span className="text-base font-semibold text-ink">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* booked row */}
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5">
                <CalendarCheck className="h-4 w-4 text-ink/70" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-ink">Booked · Tue 2:30 PM</p>
                <p className="text-[11px] text-ink/45">Confirmation #AV-4471</p>
              </div>
              <Check className="h-4 w-4 text-emerald-600" />
            </div>

            {/* pain point ticker */}
            <div className="mt-5 flex items-center gap-2 text-xs text-ink/50">
              <MessageSquare className="h-3.5 w-3.5 shrink-0" />
              <div className="relative h-4 flex-1 overflow-hidden">
                {pains.map((p, i) => (
                  <div
                    key={p}
                    className="absolute inset-0 flex items-center transition-all duration-500"
                    style={{
                      transform: `translateY(${(i - painIndex) * 100}%)`,
                      opacity: i === painIndex ? 1 : 0,
                    }}
                  >
                    <span className="truncate">{p}.</span>
                  </div>
                ))}
              </div>
            </div>

            {/* fills remaining space above the home indicator */}
            <div className="flex-1" />

            <div className="flex items-center justify-center gap-1.5 pt-3 text-[10px] font-medium text-ink/30">
              <Phone className="h-3 w-3" />
              Powered by Ava
            </div>
          </div>

          {/* home indicator */}
          <div className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-ink/20" />
        </div>
      </div>
    </div>
  );
}