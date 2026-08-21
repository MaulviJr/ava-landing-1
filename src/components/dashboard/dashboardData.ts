export type OverviewStat = {
  label: string;
  value: string;
  hint?: string;
};

export const overviewStats: OverviewStat[] = [
  { label: 'Total calls', value: '47', hint: '47 web · 0 phone' },
  { label: 'Call minutes', value: '103' },
  { label: 'Appointments', value: '17' },
  { label: 'Messages', value: '11' },
];

export type OverviewAppointment = {
  id: string;
  title: string;
  when: string;
  phone: string;
  source: string;
};

/** Compact list shown on the Overview tab. */
export const overviewAppointments: OverviewAppointment[] = [
  { id: 'o1', title: 'Sermat Savi · HydraFacial', when: 'Mon, Aug 17 at 14:00', phone: '0553453710', source: 'AI agent' },
  { id: 'o2', title: 'Farahal Abbas · Laser Hair Removal', when: 'Thu, Aug 20 at 10:00', phone: '03302630913', source: 'AI agent' },
  { id: 'o3', title: 'Farhad Abbas · Laser Hair Removal', when: 'Thu, Aug 13 at 10:00', phone: '0002630913', source: 'AI agent' },
  { id: 'o4', title: 'Eva · Laser Hair Removal', when: 'Wed, Aug 12 at 14:00', phone: '112233', source: 'AI agent' },
  { id: 'o5', title: 'Farha Abbas · Botox & Dermal Fillers', when: 'Wed, Aug 12 at 12:00', phone: '03302630913', source: 'AI agent' },
  { id: 'o6', title: 'Mohammed Raza · Chemical Peel', when: 'Wed, Aug 12 at 10:00', phone: '5162188276', source: 'AI agent' },
];

export type Appointment = {
  id: string;
  client: string;
  service: string;
  when: string;
  time: string;
  phone: string;
  confirmation: string;
  source: string;
};

/** Full table shown on the Appointments tab. */
export const appointments: Appointment[] = [
  { id: '1', client: 'Javeria', service: 'Botox & Dermal Fillers', when: 'Sat, Aug 1', time: '13:00', phone: '0325322343216', confirmation: '5350', source: 'AI agent' },
  { id: '2', client: 'Abdul Hadid', service: 'Laser Hair Removal', when: 'Mon, Aug 3', time: '10:00', phone: '03011310006', confirmation: '6029', source: 'AI agent' },
  { id: '3', client: 'Matthew Albert', service: 'Laser Hair Removal', when: 'Mon, Aug 3', time: '12:00', phone: '034392614', confirmation: '5162', source: 'AI agent' },
  { id: '4', client: 'Hamza', service: 'HydraFacial', when: 'Mon, Aug 3', time: '14:00', phone: '03323317886', confirmation: '3392', source: 'AI agent' },
  { id: '5', client: 'Abdulhadi', service: 'Laser Hair Removal', when: 'Tue, Aug 4', time: '10:00', phone: '03011310006', confirmation: '5079', source: 'AI agent' },
  { id: '6', client: 'Alexa', service: 'Laser Hair Removal', when: 'Tue, Aug 4', time: '14:00', phone: '9442607', confirmation: '8977', source: 'AI agent' },
  { id: '7', client: 'Carti', service: 'Consultation / HydraFacial', when: 'Wed, Aug 5', time: '10:00', phone: '6048241709', confirmation: '7154', source: 'AI agent' },
  { id: '8', client: 'Abdulhadi', service: 'Laser Hair Removal', when: 'Wed, Aug 5', time: '12:00', phone: '03011310071', confirmation: '4008', source: 'AI agent' },
];

export type MessageItem = {
  id: string;
  caller: string;
  timestamp: string;
  tag: string;
  summary: string;
};

/** Escalations Ava couldn't fully resolve on its own. */
export const messages: MessageItem[] = [
  {
    id: 'm1',
    caller: 'Unknown',
    timestamp: '8/11/2026, 5:01:04 PM',
    tag: 'AI agent',
    summary: 'Escalation requested: Caller requested to speak with a human agent.',
  },
  {
    id: 'm2',
    caller: 'Unknown',
    timestamp: '8/10/2026, 10:22:56 PM',
    tag: 'AI agent',
    summary:
      'Escalation requested: Caller has questions and wants to book an appointment, prefers to speak with a team member directly.',
  },
];

export type CallSummaryItem = {
  id: string;
  type: string;
  timestamp: string;
  duration: string;
  status: string;
  endReason: string;
  summary: string;
};

/** AI-generated summary of every call. */
export const callSummaries: CallSummaryItem[] = [
  {
    id: 'c1',
    type: 'Web call',
    timestamp: '8/15/2026, 8:17:24 AM',
    duration: '2:20',
    status: 'ended',
    endReason: 'Customer Ended Call',
    summary:
      "The user called Aesthetics Medspa to inquire about their location, the fastest route, the number of physicians, and the typical duration of service sessions. The AI provided the address and recommended using GPS for directions, but could not offer specific details on staff or session length, instead offering to arrange a callback with a provider. The user agreed to a callback, but the call ended before they provided their contact information.",
  },
  {
    id: 'c2',
    type: 'Web call',
    timestamp: '8/15/2026, 8:12:29 AM',
    duration: '2:19',
    status: 'ended',
    endReason: 'Customer Ended Call',
    summary:
      'The user called Aesthetics Medspa to book an appointment and inquired about their services and pricing. They ultimately decided to book a HydraFacial for Monday, November 17th at 2 PM. The AI confirmed the appointment for Sermat Savi, providing a confirmation code.',
  },
];
