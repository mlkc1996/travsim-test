import { Box } from "@/shared/UI/box/Box";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Features.module.scss";

type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

const visuals = [
  { icon: "bar-chart" },
  { icon: "zap-fast" },
  { icon: "signal" },
  { icon: "data" },
  { icon: "download-04" },
  { icon: "file" },
];

export type FeaturesProps = {
  title: string;
  features: FeatureType[];
};

export const Features = ({ title, features }: FeaturesProps) => {
  return (
    <SectionContainer>
      {title}
      <div className={styles.featureContainer}>
        {features.map((feature, index) => (
          <Box
            className={styles.feature}
            icon={visuals[index].icon}
            description={feature.description}
            title={feature.title}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
