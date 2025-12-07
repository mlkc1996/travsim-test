"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./../Header.module.scss";
import { LoginButton } from "../login/LoginButton";
import { ExploreCountryDropdown } from "./ExploreCountryDropdown";
import { LanguageSelectionDropdown } from "./LanguageSelectionDropdown";
import { useTranslations } from "next-intl";

export const HeaderButtons = () => {
  const t = useTranslations();

  return (
    <div className={styles.HeaderButtons}>
      <div>
        <ExploreCountryDropdown />
        {/* <button className="text-level-normal-100 text-font-normal">
          Explore
        </button> */}
        <button className="text-level-normal-100 text-font-normal">
          {t("help")}
        </button>
        <LanguageSelectionDropdown />
        <div className={styles.divider}></div>
        <button>
          <Icon icon="currency-dollar-circle" />
        </button>
      </div>
      <LoginButton />
    </div>
  );
};
