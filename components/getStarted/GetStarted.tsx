import { Box } from "@/shared/UI/box/Box";
import styles from "./GetStarted.module.scss";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";

const visuals = [
  { icon: "shopping-bag-02", image: "getStarted0.png" },
  { icon: "download-02", image: "getStarted1.png" },
  { icon: "data", image: "getStarted2.png" },
];
const data = {
  title: "How To get Started with United States eSIM",
  steps: [
    {
      icon: "",
      title: "Choose Your eSIM Package",
      paragraph:
        "Select a United States eSIM package that fits your travel needs. You’ll find various secure payment methods to finalize your purchase with ease.",
      image: "https://content.travsim.fr/api/media/file/1763711730264.png",
    },
    {
      icon: "",
      title: "Install Your eSIM",
      paragraph:
        "Once you've purchased your eSIM for United States Vacation, check your email for a smart link. This link leads you to the app store for a guided installation process, making it simple to set up.",
      image: "https://content.travsim.fr/api/media/file/1763711814005.png",
    },
    {
      icon: "",
      title: "Start Using Data",
      paragraph:
        "After installing your eSIM, you can immediately start using your data. Enjoy sharing your holiday moments, connecting with friends and family, and streaming your favorite shows effortlessly.",
      image: "https://content.travsim.fr/api/media/file/1763711843266.png",
    },
  ],
};

export const GetStarted = ({
  title = data.title,
  subtitle,
  instructions = data.steps,
}: any) => {
  return (
    <SectionContainer className={`${styles.container} container-px-100`}>
      <h3 className="w-full text-left text-level-header text-font-x-bold">
        {title}
      </h3>
      {subtitle && (
        <p className="text-level-normal-200 text-font-normal">{subtitle}</p>
      )}
      <div className={styles.instructions}>
        {instructions.map(({ title, paragraph }: any, index: number) => {
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
