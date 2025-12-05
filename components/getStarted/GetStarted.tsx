import { Box } from "@/shared/UI/box/Box";
import styles from "./GetStarted.module.scss";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";

const visuals = [
  { icon: "shopping-bag-02", image: "getStarted0.png" },
  { icon: "download-02", image: "getStarted1.png" },
  { icon: "data", image: "getStarted2.png" },
];

export const GetStarted = ({ title, subtitle, instructions }: any) => {
  return (
    <SectionContainer className={`${styles.GetStarted}`}>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      <div>
        {instructions.map(({ title, description }: any, index: number) => {
          const { icon, image } = visuals[index];
          return (
            <Box
              className={styles.feature}
              icon={icon}
              description={description}
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
