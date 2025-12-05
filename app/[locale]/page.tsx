import { BenefitsSection } from "@/components/benefitSection/BenefitSection";
import { Compare } from "@/components/compare/Compare";
import { FAQ } from "@/components/faq/FAQ";
import { Features } from "@/components/features/Features";
import { GetApp } from "@/components/getApp/GetApp";
import { GetStarted } from "@/components/getStarted/GetStarted";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { Reason } from "@/components/reason/Reason";
import { Resources } from "@/components/resources/Resources";
import { Testimonial } from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <Features title={"eSIM for United States features"} features={[]} />
      <>Best Value</>
      <Compare />
      <Reason />
      <GetStarted />
      <>Also like</>
      <FAQ />
      <Testimonial />
      <Resources />
      <GetApp />
    </>
  );
}
