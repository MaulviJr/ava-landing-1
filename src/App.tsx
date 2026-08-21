import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { WhyAva } from '@/components/WhyAva';
import { WhatAvaDoes } from '@/components/WhatAvaDoes';
import { Glimpse } from '@/components/Glimpse';
import { Setup } from '@/components/Setup';
import { Comparison } from '@/components/Comparison';
import { Pricing } from '@/components/Pricing';
import { Proof } from '@/components/Proof';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <WhyAva />
        {/* <WhatAvaDoes /> */}
        <Glimpse />
        <Setup />
        <Comparison />
        <Pricing />
        <Proof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
