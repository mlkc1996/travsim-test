"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./SearchInput.module.scss";

export const SearchInput = ({
  placeholder = "Where to next?",
  className = "",
  ref,
}: any) => {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <input
        ref={ref}
        placeholder={placeholder}
        className="text-level-normal-100"
      />
      <Icon icon="search-md" />
    </div>
  );
};
