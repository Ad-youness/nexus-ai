import { FeaturedProjects } from "@/components/FeaturedProjects";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <Services />
      <HowItWorks />
      <Solutions />
      <FeaturedProjects />
      <FinalCta />
    </main>
  );
}
