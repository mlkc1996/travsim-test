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
export const Reason = ({ title, reasons }: any) => {
  return (
    <SectionContainer>
      <h3>{title}</h3>
      <div className={styles.reasonContainer}>
        {reasons?.map?.(({ title, description }: any, index: number) => {
          const { icon } = visuals[index];
          return (
            <Box
              key={index}
              icon={icon}
              title={title}
              description={description}
              className={styles.reason}
            />
          );
        })}
        <div>
          <Image
            src={"/assets/images/reason_section.png"}
            alt="reason image"
            className={styles.image}
          />
        </div>
      </div>
    </SectionContainer>
  );
};
