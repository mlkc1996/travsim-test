import { BenefitsSection } from "@/components/benefitSection/BenefitSection";
import { Features } from "@/components/features/Features";
import { HeroSection } from "@/components/heroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <Features title={"eSIM for United States features"} features={[]} />
    </>
  );
}
