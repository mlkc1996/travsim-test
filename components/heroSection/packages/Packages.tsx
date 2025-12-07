"use client";

import { useTranslations } from "next-intl";
import styles from "@/components/heroSection/HeroSection.module.scss";
import { Icon } from "@/shared/UI/icon/Icon";

export type PackagesProps = {
  title: string;
  packages: {
    volumn: string;
    days: number;
    price: string;
    isBest?: boolean;
  }[];
};

export const Packages = ({ title, packages: packages }: PackagesProps) => {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <h4 className="text-level-normal-200 text-font-x-bold">{title}</h4>
      <div className={styles.packages}>
        {packages.map((item, index) => {
          return <Package key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export const Package = ({ isBest, volumn, days, price }: any) => {
  const t = useTranslations();

  return (
    <div className={`${isBest ? styles.best : ""} ${styles.package}`}>
      {isBest && (
        <>
          <div className={`${styles["best-value-tag"]} text-font-x-bold`}>
            {t("best_value")}
          </div>
          <div className={`${styles["best-value-bg"]}`}></div>
          <div className={`${styles["best-value-fore-bg"]}`}></div>
        </>
      )}
      <div className={styles["package-stat"]}>
        <div className="flex gap-[8px] items-center">
          <Icon icon={"switch-vertical-01"} />
          <p className="text-level-normal-100 text-font-x-bold">{volumn}</p>
        </div>
        <div className="flex gap-[8px] items-center">
          <Icon icon={"calendar"} />
          <p className="text-level-normal-100 text-font-normal">
            {days} {t("days")}
          </p>
        </div>
      </div>
      <span className="text-font-x-bold text-level-normal-100">{price}</span>
    </div>
  );
};
