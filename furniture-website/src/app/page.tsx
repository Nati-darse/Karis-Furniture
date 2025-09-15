import Image from "next/image";

import Hero from '@/components/Hero';
import IntroText from '@/components/IntroText';
import FeaturedProjects from '@/components/FeaturedProjects';
import ValueProps from '@/components/ValueProps';
import CTA from '@/components/CTA';

export default function Home() {
  return (
   
    <div className="flex flex-col">
      <Hero />
      <IntroText />
      <FeaturedProjects />
      <ValueProps />
      <CTA />
      {/*more sections here later (Testimonials, Process, etc.) */}
    </div>
  );
}

       


