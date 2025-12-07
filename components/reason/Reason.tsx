import { Box } from "@/shared/UI/box/Box";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Reason.module.scss";
import { Image } from "@/shared/UI/image/Image";

const visuals = [
  {
    icon: "tag-01",
  },
  {
    icon: "marker-pin-04",
  },
  {
    icon: "tool-01",
  },
  {
    icon: "hand-01",
  },
  {
    icon: "layers-two-01",
  },
  {
    icon: "support",
  },
];

export type ReasonProps = {
  title: string;
  reasons: {
    title: string;
    paragraph: string;
  }[];
};

export const Reason = ({ title, reasons }: ReasonProps) => {
  return (
    <SectionContainer className={`${styles.container} container-px-100`}>
      <h3 className="text-level-header text-font-x-bold">{title}</h3>
      <div className={styles.reasonContainer}>
        {reasons?.map?.(({ title, paragraph }: any, index: number) => {
          const { icon } = visuals[index];
          return (
            <Box
              key={index}
              icon={icon}
              title={title}
              description={paragraph}
              className={styles.reason}
            />
          );
        })}
        <Image
          src={`${process.env.IMAGE_PATH}/reason_section.png`}
          alt="reason image"
          className={styles.image}
        />
      </div>
    </SectionContainer>
  );
};
