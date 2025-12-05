"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import { SearchInput } from "../searchInput/SearchInput";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Icon icon={"logo"} />
      <SearchInput />
      <div>
        <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <button></button>
      </div>
    </header>
  );
};
