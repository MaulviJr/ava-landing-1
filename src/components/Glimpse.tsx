import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Section, SectionHeader } from './Section';

const EDITED_DEMO_EMBED_URL = 'https://www.youtube.com/embed/YdKzOzjAzQw';
const UNCUT_CALL_URL = 'https://youtube.com/shorts/-s3ieGPwyK8?feature=share';

export function Glimpse() {
  return (
    <Section id="works" dark className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          dark
          eyebrow="A Glimpse of How Ava Works"
          title="See Ava in action"
          subtitle="A quick look at how Ava sounds on a call — then hear the full, unedited version for yourself below."
        />

        <div className="mt-12 flex justify-center">
          <div className="relative aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-lift sm:max-w-[320px]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={EDITED_DEMO_EMBED_URL}
              title="Ava demo — a look at how Ava works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center">
          <a
            href={UNCUT_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            Watch the full, unedited call
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <p className="flex items-center gap-1.5 text-xs text-white/45">
            <ShieldCheck className="h-3.5 w-3.5" />
            Recorded with the caller's permission
          </p>
        </div>
      </div>
    </Section>
  );
}