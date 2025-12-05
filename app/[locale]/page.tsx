import { AlsoLike } from "@/components/alsoLike/AlsoLike";
import { BenefitsSection } from "@/components/benefitSection/BenefitSection";
import { BestValue } from "@/components/bestValue/BestValue";
import { Compare } from "@/components/compare/Compare";
import { FAQ } from "@/components/faq/FAQ";
import { Features } from "@/components/features/Features";
import { GetApp } from "@/components/getApp/GetApp";
import { GetStarted } from "@/components/getStarted/GetStarted";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { Reason } from "@/components/reason/Reason";
import { Resources } from "@/components/resources/Resources";
import { Testimonial } from "@/components/testimonial/Testimonial";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <Features />
      <BestValue
        title="BEST VALUE FOR THE USA"
        bestValueText="20GB for 30 days for $24,99"
        ctaText="Get Package"
        href="#"
      />
      <Compare />
      <Reason />
      <GetStarted />
      <AlsoLike
        image={""}
        packageName={"Europe Regional Package"}
        startingPrice={"From $15,99"}
        ctaText={"Get Package"}
        href={"#"}
        title={"You may also like"}
      />
      <FAQ />
      <Testimonial />
      <Resources />
      <GetApp />
    </>
  );
}
