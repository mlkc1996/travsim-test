import { Box } from "@/shared/UI/box/Box";
import styles from "./GetStarted.module.scss";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";

const visuals = [
  { icon: "shopping-bag-02", image: "getStarted0.png" },
  { icon: "download-02", image: "getStarted1.png" },
  { icon: "data", image: "getStarted2.png" },
];

export type GetStartedProps = {
  title: string;
  subtitle?: string;
  steps: {
    icon: string;
    title: string;
    paragraph: string;
    image: string;
  }[];
};

export const GetStarted = ({ title, subtitle, steps }: GetStartedProps) => {
  return (
    <SectionContainer className={`${styles.container} container-px-100`}>
      <h3 className="w-full text-left text-level-header text-font-x-bold">
        {title}
      </h3>
      {subtitle && (
        <p className="text-level-normal-200 text-font-normal-100">{subtitle}</p>
      )}
      <div className={styles.instructions}>
        {steps?.map?.(({ title, paragraph }: any, index: number) => {
          const { icon, image } = visuals[index];
          return (
            <Box
              key={index}
              className={styles.instruction}
              icon={icon}
              description={paragraph}
              title={title}
              image={{
                src: `${process.env.IMAGE_PATH}/${image}`,
                alt: `instruction-${index + 1}`,
              }}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};
