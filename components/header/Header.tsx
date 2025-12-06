"use client";

import { SearchInput } from "../searchInput/SearchInput";
import styles from "./Header.module.scss";
import { useEffect, useRef } from "react";
import { Image } from "@/shared/UI/image/Image";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

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

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <Image
          src={`${process.env.IMAGE_PATH}/logo.png`}
          alt=""
          className={styles.logo}
        />
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
      </div>
      <div className={styles["box-shadow"]}></div>
    </header>
  );
};
