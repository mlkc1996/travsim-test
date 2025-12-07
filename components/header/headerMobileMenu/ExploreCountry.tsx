"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import { useRouter } from "next/navigation";
import { Activity, useState } from "react";
import styles from "./../Header.module.scss";
import { Image } from "@/shared/UI/image/Image";
import { useTranslations } from "next-intl";
import { RegionOptions } from "@/shared/settings/options";

export const ExploreCountry = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations();

  const onClick = (newRegion: string) => {
    const { pathname, search } = window.location;
    const [, locale, region, ...others] = pathname.split("/");
    const newPathname = `/${locale}/${newRegion}${
      others.length ? `/${others.join("/")}` : ""
    }${search}`;
    router.push(newPathname);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <span className="text-normal-300 text-font-medium">
            {t("explore")}
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
        {RegionOptions.map(({ label, value }) => (
          <li key={value}>
            <button
              className="flex items-center gap-[8px] text-level-normal-100 text-font-normal"
              onClick={() => onClick(value)}
            >
              <Image
                src={`${
                  process.env.IMAGE_PATH
                }/${value.toLowerCase()}-flag.png`}
                alt=""
                width={16}
                height={16}
              />
              {t(label)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
