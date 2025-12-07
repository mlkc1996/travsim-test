import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { Image } from "@/shared/UI/image/Image";
import Link from "next/link";
import styles from "./Resources.module.scss";

export type ResourcesProps = {
  title: string;
  resources: { title: string; paragraph: string }[];
};

export const Resources = ({ title, resources }: ResourcesProps) => {
  return (
    <SectionContainer className={`${styles.container} container-px-200`}>
      <h3 className="text-level-header text-font-x-bold text-left w-full">
        {title}
      </h3>
      <div className="flex gap-[3.2rem]">
        {resources?.map?.(
          ({ image, title, paragraph, link }: any, index: number) => {
            return (
              <div key={index} className={styles.resource}>
                <Image
                  className={styles.image}
                  src={`${process.env.IMAGE_PATH}/${image}`}
                  alt={`Resource image ${index}`}
                />
                <div className={styles["resource-inner"]}>
                  <h4 className="text-level-subheader text-font-x-bold">
                    {title}
                  </h4>
                  <p className="text-level-normal-100 text-font-normal">
                    {paragraph}
                  </p>
                  <Link
                    className="text-level-normal-100 text-font-normal"
                    href={link ?? ""}
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </SectionContainer>
  );
};
