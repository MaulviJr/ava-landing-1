import { useState } from 'react';
import {
  PhoneCall,
  CalendarCheck,
  FileText,
  Zap,
  LayoutDashboard,
  Sparkles,
  Plus,
  Minus,
} from 'lucide-react';
import { Section, SectionHeader } from './Section';

type Pillar = {
  icon: typeof PhoneCall;
  promise: string;
  payoff: string;
  points: string[];
};

const pillars: Pillar[] = [
  {
    icon: PhoneCall,
    promise: 'Never Miss a Call',
    payoff: 'The 24/7 Never-Miss-A-Call System',
    points: [
      'After-hours call answering — no more voicemail black hole',
      'Natural back-and-forth conversation, not a scripted menu tree',
      "Every missed/after-hours caller's name, number, and need captured automatically",
      'Background noise filtering and smart interruption handling so calls feel natural',
    ],
  },
  {
    icon: CalendarCheck,
    promise: 'Never Lose the Booking',
    payoff: 'The Zero-Double-Booking Scheduling Engine',
    points: [
      'Real-time calendar availability checks — never books a taken slot',
      'Correct date/time logic — never books the wrong day or year',
      'Spoken confirmation code read back on every booking',
      'Auto-retry if a booking fails to save — nothing silently lost',
      'Reschedule or correct any booking by confirmation code or phone number',
    ],
  },
  {
    icon: FileText,
    promise: 'Never Lose the Information',
    payoff: 'The Total Call Capture System',
    points: [
      'Every unresolved request logged for staff follow-up automatically',
      'Automatic escalation to a real person for complaints or anything sensitive',
      'No fake names, placeholder numbers, or invented data — ever',
      'AI-generated summary of every single call',
    ],
  },
  {
    icon: Zap,
    promise: 'Never Make Customers Wait',
    payoff: 'The Instant Answer Engine',
    points: [
      'Live lookups for hours, pricing, and policies — never guessed',
      'No hold music, no "let me transfer you," no repeating yourself',
      'Same accurate answer every time, regardless of who\'s "on shift"',
    ],
  },
  {
    icon: LayoutDashboard,
    promise: 'Never Wonder What Happened',
    payoff: 'The Owner Command Center',
    points: [
      'Private, password-protected dashboard',
      'Full call history with AI summaries',
      'Live view of every booking taken',
      'Every escalation and message waiting in one place',
      'Stays fast and responsive even as call volume grows',
    ],
  },
  {
    icon: Sparkles,
    promise: 'The Setup Itself',
    payoff: 'White-Glove Done-For-You Onboarding',
    points: [
      'Fully done-for-you configuration, built from a proven template for your business type',
      '1-on-1 live onboarding call to confirm every detail before going live',
      'Monthly recap showing exactly what Ava caught that you would have missed',
      'Direct line to me, 24-hour reply guarantee',
    ],
  },
];

export function WhatAvaDoes() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="does" dark className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          dark
          eyebrow="What Ava Actually Does"
          title={
            <>
              Six systems that turn <span className="text-white/60">"24/7 AI receptionist"</span>{' '}
              from a claim into something concrete
            </>
          }
          subtitle="Each one is a promise, a payoff, and proof. Tap any pillar to dig in."
        />

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {pillars.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={p.promise} className="group">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 py-6 text-left transition-colors"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'border-white/0 bg-paper text-ink'
                        : 'border-white/15 bg-white/5 text-white/70 group-hover:border-white/30'
                    }`}
                  >
                    <p.icon className="h-5 w-5" />
                  </span>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{p.promise}</h3>
                    <p className="mt-0.5 text-sm text-white/50">{p.payoff}</p>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="grid gap-3 pb-7 pl-16 sm:grid-cols-2">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
