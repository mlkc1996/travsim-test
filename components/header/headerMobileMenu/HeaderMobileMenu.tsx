"use client";

import { SearchInput } from "@/components/searchInput/SearchInput";
import styles from "./../Header.module.scss";
import { LoginButton } from "../login/LoginButton";
import { Icon } from "@/shared/UI/icon/Icon";

export const HeaderMobileMenu = ({ ref }: any) => {
  return (
    <div className={styles.HeaderMobileMenu}>
      <SearchInput ref={ref} className={styles.search} />
      <nav>
        <div>
          <span>Explore</span>
        </div>
        <div>
          <span>Help</span>
        </div>
        <div>
          <Icon icon="translate-01" />
          <span className="text-normal">Language</span>
        </div>
        <div>
          <Icon icon="currency-dollar-circle" />
          <span>Currency</span>
        </div>
        <div>
          <LoginButton />
        </div>
      </nav>
    </div>
  );
};
