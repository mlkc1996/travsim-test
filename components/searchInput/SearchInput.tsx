"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./SearchInput.module.scss";
import { RefObject } from "react";

export type SearchInputProps = {
  placeholder?: string;
  className?: string;
  ref?: RefObject<HTMLInputElement | null>;
};

export const SearchInput = ({
  placeholder = "",
  className = "",
  ref,
}: SearchInputProps) => {
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
