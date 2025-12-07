"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import { useRouter } from "next/navigation";
import { Activity, useState } from "react";
import styles from "./../Header.module.scss";
import { Image } from "@/shared/UI/image/Image";

const locales = [
  {
    label: "USA",
    value: "US",
  },
  {
    label: "Hong Kong",
    value: "HK",
  },
];

export const ExploreCountry = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
          <span className="text-normal-300 text-font-medium">Explore</span>
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
        {locales.map(({ label, value }) => (
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
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
