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

const data = {
  title: "Why Choose us for yor United States eSIM",
  reasons: [
    {
      title: "Clear simple pricing",
      paragraph:
        "Our plans are fully prepaid with no roaming fees or hidden charges. No overages. Transparent pricing always.",
    },
    {
      title: "Apps are easy to use",
      paragraph:
        "Our apps put you in the driving seat. Install your eSIM, check your data balance, manage plans, and contact support—all in just a few taps.",
    },
    {
      title: "One eSIM, Multiple Trips lorem",
      paragraph:
        "Install our eSIM once and reuse it for future trips—just purchase a data package for your next destination from the app.",
    },

    {
      title: "Compatibility",
      paragraph:
        "Our eSIM works with a wide range of iOS and Android eSIM devices that support eSIM. See list of compatible devices.",
    },
    {
      title: "Fully customisable",
      paragraph:
        "You can customise your eSIM plan to suit your needs. Recharge or extend your plan anytime from our apps.",
    },
    {
      title: "24/7 Support",
      paragraph:
        "You can get help with the app anytime. You can view FAQ sections, review guides or contact support.",
    },
  ],
};

export const Reason = ({ title = data.title, reasons = data.reasons }: any) => {
  return (
    <SectionContainer className={styles.container}>
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
          src={`${process.env.IMAGE_PATH}/reason_section.png"`}
          alt="reason image"
          className={styles.image}
        />
      </div>
    </SectionContainer>
  );
};
