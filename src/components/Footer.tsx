import { Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink">
            <Phone className="h-4 w-4 text-paper" strokeWidth={2.25} />
          </span>
          <span className="text-[17px] font-semibold tracking-tight text-ink">Ava</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink/55">
          <a href="#why" className="hover:text-ink">Why Ava</a>
          <a href="#does" className="hover:text-ink">What it does</a>
          <a href="#works" className="hover:text-ink">How it works</a>
          <a href="#pricing" className="hover:text-ink">Pricing</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>

        <p className="text-xs text-ink/40">© {new Date().getFullYear()} Ava. Every call answered.</p>
      </div>
    </footer>
  );
}
