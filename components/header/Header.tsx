"use client";

import { SearchInput } from "../searchInput/SearchInput";
import styles from "./Header.module.scss";
import { useEffect, useRef, useState } from "react";
import { Image } from "@/shared/UI/image/Image";
import { HeaderButtons } from "./headerButtons/HeaderButtons";
import { Icon } from "@/shared/UI/icon/Icon";
import { HeaderMobileMenu } from "./headerMobileMenu/HeaderMobileMenu";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const sticky = header.offsetTop;

    const handler = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add(styles["sticky"]);
      } else {
        header.classList.remove(styles["sticky"]);
      }
    };

    handler();

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const openClass = open ? `${styles.open}` : "";

  return (
    <header className={`${styles.header} ${openClass} `} ref={headerRef}>
      {/* <div className={styles["box-shadow"]}></div> */}
      <div className={`${styles.container} ${openClass}`}>
        <Image
          src={`${process.env.IMAGE_PATH}/logo.png`}
          style={{
            objectFit: "fill",
          }}
          alt=""
          className={styles.logo}
        />
        <SearchInput ref={inputRef} className={`shrink ${styles.search}`} />
        <HeaderButtons />

        <button
          className={styles.hamburgerMenu}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <Icon icon={open ? "x-close" : "hamburger-menu"} />
        </button>
      </div>
      {open && <HeaderMobileMenu ref={inputRef} />}
    </header>
  );
};
