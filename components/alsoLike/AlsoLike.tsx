import { Image } from "@/shared/UI/image/Image";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./AlsoLike.module.scss";
import Link from "next/link";

type AlsoLikeProps = {
  image: string;
  packageName: string;
  startingPrice: string;
  ctaText: string;
  href: string;
  title: string;
};

export const AlsoLike = ({
  image,
  packageName,
  startingPrice,
  ctaText,
  title,
  href,
}: AlsoLikeProps) => {
  return (
    <SectionContainer
      className={`${styles.container} container-px-100`}
      containerClassName={styles.background}
    >
      <Image src={""} alt={""} className={styles.image} />
      <div className={`${styles.package}`}>
        <span className="text-level-normal-200 text-font-normal uppercase">
          {title}
        </span>
        <h3 className="text-level-header text-font-x-bold">{packageName}</h3>
        <span className="text-level-normal-200 text-font-normal">
          {startingPrice}
        </span>
        <Link className={`cta ${styles.cta}`} href={href}>
          {ctaText}
        </Link>
      </div>
    </SectionContainer>
  );
};
