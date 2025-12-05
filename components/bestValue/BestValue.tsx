import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import Link from "next/link";
import styles from "./BestValue.module.scss";

export type BestValueProps = {
  title: string;
  bestValueText: string;
  ctaText: string;
  href: string;
};

export const BestValue = ({
  title,
  bestValueText,
  ctaText,
  href,
}: BestValueProps) => {
  return (
    <SectionContainer
      containerClassName={styles.background}
      className={styles.container}
    >
      <p className="text-level-normal-200 text-font-normal">{title}</p>
      <h3 className="text-level-header text-font-x-bold">{bestValueText}</h3>
      <Link className={`cta ${styles.cta}`} href={href}>
        {ctaText}
      </Link>
    </SectionContainer>
  );
};
