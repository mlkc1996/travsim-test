"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import { useRouter } from "next/navigation";
import { Activity, useState } from "react";
import styles from "./../Header.module.scss";
import { LocaleOptions } from "@/shared/settings/options";
import { useTranslations } from "next-intl";

export const LanguageSelection = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations();

  const onClick = (newLocale: string) => {
    const { pathname, search } = window.location;
    const [, locale, ...others] = pathname.split("/");
    const newPathname = `/${newLocale}${
      others.length ? `/${others.join("/")}` : ""
    }${search}`;
    router.push(newPathname);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <Icon icon="translate-01" />
          <span className="text-normal-300 text-font-medium">
            {t("language")}
          </span>
        </div>
        <button
          className="text-normal-300 text-font-medium"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Activity mode={open ? "visible" : "hidden"}>
            <Icon icon={"minus"} className="icon-s" />
          </Activity>
          <Activity mode={open ? "hidden" : "visible"}>
            <Icon icon={"plus"} className="icon-s" />
          </Activity>
        </button>
      </div>

      <ul className={`${styles.selection} ${open ? styles.open : ""}`}>
        {LocaleOptions.map(({ label, value }) => {
          return (
            <li key={value}>
              <button
                className="text-level-normal-100 text-font-normal"
                onClick={() => onClick(value)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
