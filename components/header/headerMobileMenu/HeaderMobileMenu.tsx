"use client";

import { SearchInput } from "@/components/searchInput/SearchInput";
import styles from "./../Header.module.scss";
import { LoginButton } from "../login/LoginButton";
import { Icon } from "@/shared/UI/icon/Icon";
import { useState } from "react";
import { LanguageSelection } from "./LanguageSelection";
import { ExploreCountry } from "./ExploreCountry";

export const HeaderMobileMenu = ({ ref, open }: any) => {
  return (
    <ul className={`${styles.HeaderMobileMenu} ${open ? styles.open : ""}`}>
      <li className={`${styles["nav"]} ${styles["borderBottom"]}`}>
        <ExploreCountry />
      </li>
      <li className={`${styles["nav"]} ${styles["borderBottom"]}`}>
        <span className="text-normal-300 text-font-medium">Help</span>
      </li>
      <li className={`${styles["nav"]} ${styles["borderBottom"]}`}>
        <LanguageSelection />
      </li>
      <li className={`${styles["nav"]} ${styles["borderBottom"]}`}>
        <Icon icon="currency-dollar-circle" />
      </li>
      <li className={`${styles["nav"]}`}>
        <SearchInput ref={ref} className={styles.search} />
      </li>
      <li className={`${styles["nav"]}`}>
        <LoginButton />
      </li>
    </ul>
  );
};
