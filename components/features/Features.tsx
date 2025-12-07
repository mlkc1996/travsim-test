import { Box } from "@/shared/UI/box/Box";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Features.module.scss";

type FeatureType = {
  icon: string;
  title: string;
  paragraph: string;
};

export type FeaturesProps = {
  title: string;
  features: FeatureType[];
};

export const Features = ({ title, features }: FeaturesProps) => {
  return (
    <SectionContainer className={`${styles.container} container-px-100`}>
      <h3 className="text-level-header w-full text-left text-font-x-bold">
        {title}
      </h3>
      <div className={styles.featureContainer}>
        {features?.map(({ icon, title, paragraph }, index) => (
          <Box
            key={index}
            className={styles.feature}
            icon={icon}
            description={paragraph}
            title={title}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
