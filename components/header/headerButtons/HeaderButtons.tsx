"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./../Header.module.scss";
import { useState } from "react";
import { LoginButton } from "../login/LoginButton";

export const HeaderButtons = () => {
  return (
    <div className={styles.HeaderButtons}>
      <div>
        <button className="text-level-normal-100 text-font-normal">
          Explore
        </button>
        <button className="text-level-normal-100 text-font-normal">Help</button>
        <button>
          <Icon icon="translate-01" />
        </button>
        <div className={styles.divider}></div>
        <button>
          <Icon icon="currency-dollar-circle" />
        </button>
      </div>
      <LoginButton />
    </div>
  );
};
