import { GetContent } from "@/api/content";
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
import withLoading from "@/shared/hoc/withLoading";
import withError from "@/shared/hoc/withError";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; regionCode: string }>;
};

const HeroSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "HeroSection",
        locale,
        regionCode
      );

      return <HeroSection {...data} />;
    }
  )
);

const BenefitsSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "BenefitsSection",
        locale,
        regionCode
      );
      return <BenefitsSection {...data} />;
    }
  )
);

const FeaturesSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "FeaturesSection",
        locale,
        regionCode
      );
      return <Features {...data} />;
    }
  )
);

const BestValueSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "BestValue",
        locale,
        regionCode
      );
      return <BestValue {...data} />;
    }
  )
);

const CompareSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "HowWeCompare",
        locale,
        regionCode
      );
      return <Compare {...data} />;
    }
  )
);

const ReasonsSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "ReasonsSection",
        locale,
        regionCode
      );
      return <Reason {...data} />;
    }
  )
);

const GetStartedSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "HowToGetStarted",
        locale,
        regionCode
      );
      return <GetStarted {...data} />;
    }
  )
);

const AlsoLikeSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "AlsoLikeSection",
        locale,
        regionCode
      );
      return <AlsoLike {...data} />;
    }
  )
);

const FAQSectionSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "FrequentlyAskedQuestions",
        locale,
        regionCode
      );
      return <FAQ {...data} />;
    }
  )
);

const TestimonialsSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "TestimonialsSection",
        locale,
        regionCode
      );
      return <Testimonial {...data} />;
    }
  )
);

const ResourcesSectionComponent = withError(
  withLoading(
    async ({ locale, regionCode }: { locale: string; regionCode: string }) => {
      const { success, data } = await GetContent(
        "ResourcesSection",
        locale,
        regionCode
      );
      return <Resources {...data} />;
    }
  )
);

export default async function Home({ params }: Props) {
  const props = await params;

  return (
    <>
      <HeroSectionComponent {...props} />
      <BenefitsSectionComponent {...props} />
      <FeaturesSectionComponent {...props} />
      <BestValueSectionComponent {...props} />
      <CompareSectionComponent {...props} />
      <ReasonsSectionComponent {...props} />
      <GetStartedSectionComponent {...props} />
      <AlsoLikeSectionComponent {...props} />
      <FAQSectionSectionComponent {...props} />
      <TestimonialsSectionComponent {...props} />
      <ResourcesSectionComponent {...props} />
      <GetApp />
    </>
  );
}
