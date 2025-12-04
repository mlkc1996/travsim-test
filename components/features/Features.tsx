import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";

type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

export type FeaturesProps = {
  title: string;
  features: FeatureType[];
};

const Feature = () => {
  return (
    <div>
      <i></i>
    </div>
  );
};

export const Features = ({ title, features }: FeaturesProps) => {
  return (
    <SectionContainer>
      {title}
      <div>
        {features.map(({ icon, title, description }) => (
          <></>
        ))}
      </div>
    </SectionContainer>
  );
};
