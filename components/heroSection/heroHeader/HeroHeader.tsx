"use client";
import { Image } from "@/shared/UI/image/Image";
import styles from "./../HeroSection.module.scss";

export type HeroHeaderProps = {
  title: string;
  level: string;
  rating: number;
  ratingTextContent: string;
};

export const HeroHeader = ({
  rating,
  title,
  level,
  ratingTextContent,
}: HeroHeaderProps) => {
  return (
    <header className={`flex flex-col gap-[16px]`}>
      <h3 className="text-level-header-200 text-font-x-bold">{title}</h3>
      <div className={`flex items-center gap-[19px] ${styles.reviews}`}>
        <span className="text-level-normal-100 text-font-x-bold">{level}</span>
        <div className="flex gap-[2px]">
          {Array(rating)
            .fill(null)
            .map((_, index) => (
              <Image
                className={styles.ratings}
                key={index}
                width={22.5}
                height={22.5}
                src={`${process.env.IMAGE_PATH}/rating-star.png`}
                alt={"rating"}
              />
            ))}
        </div>
        <span
          className="text-level-normal-100 text-font-normal"
          dangerouslySetInnerHTML={{ __html: ratingTextContent }}
        ></span>
        <Image
          width={87}
          height={22.5}
          src={`${process.env.IMAGE_PATH}/trust-pilot.png`}
          className={styles.pilot}
          alt={"trust pilot"}
        />
      </div>
    </header>
  );
};
