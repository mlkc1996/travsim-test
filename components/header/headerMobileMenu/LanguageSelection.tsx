"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import { useRouter } from "next/navigation";
import { Activity, useState } from "react";
import styles from "./../Header.module.scss";
import { LocaleOptions } from "@/shared/settings/options";
import { useTranslations } from "next-intl";

export type LanguageSelectionProps = {
  onNavigate: () => void;
};

export const LanguageSelection = ({ onNavigate }: LanguageSelectionProps) => {
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
    onNavigate?.();
  };

  return (
    <div
      className="flex flex-col w-full cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <Icon icon="translate-01" />
          <span className="text-level-normal-300 text-font-medium">
            {t("language")}
          </span>
        </div>
        <button className="text-normal-300 text-font-medium">
          <Activity mode={open ? "visible" : "hidden"}>
            <Icon icon={"minus"} className="icon-md" />
          </Activity>
          <Activity mode={open ? "hidden" : "visible"}>
            <Icon icon={"plus"} className="icon-md" />
          </Activity>
        </button>
      </div>

      <ul className={`${styles.selection} ${open ? styles.open : ""}`}>
        {LocaleOptions.map(({ label, value }) => {
          return (
            <li key={value}>
              <button
                className="text-level-normal-300 text-font-normal"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(value);
                }}
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
