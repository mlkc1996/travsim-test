"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./../HeroSection.module.scss";
import { useTranslations } from "next-intl";

export type ServicesProps = {
  services: {
    icon: string;
    title: string;
  }[];
};

export const Services = ({ services }: ServicesProps) => {
  const t = useTranslations();

  return (
    <div className={styles["services"]}>
      {services.map(({ icon, title }, index) => (
        <div key={index}>
          <div className={styles["icon-container"]}>
            <Icon icon={icon} />
          </div>
          <span className="text-level-normal-100 text-font-normal">
            {title}
          </span>
        </div>
      ))}
      <button className="text-level-normal-100 text-font-medium">
        {t("check_compat")}
      </button>
    </div>
  );
};
