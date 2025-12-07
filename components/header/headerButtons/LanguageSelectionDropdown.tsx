"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from "@radix-ui/react-popover";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { LocaleOptions } from "@/shared/settings/options";

export const LanguageSelectionDropdown = () => {
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
    <Popover>
      <PopoverTrigger asChild>
        <button className="text-level-normal-100 text-font-normal">
          <Icon icon="translate-01" />
        </button>
      </PopoverTrigger>
      <PopoverContent sideOffset={0}>
        <PopoverArrow
          style={{
            fill: "#d9d9d9",
          }}
        />
        <div
          style={{
            border: "1px solid #d9d9d9",
            padding: "8px 12px",
            borderRadius: "15px",
            background: "#fff",
          }}
        >
          {LocaleOptions.map(({ label, value }, index) => (
            <div
              key={value}
              style={{
                padding: "4px 0",
                borderBottom:
                  index + 1 == LocaleOptions.length ? "" : "1px solid #d9d9d9",
              }}
            >
              <button
                className="flex items-center gap-[8px] text-level-normal-100 text-font-normal"
                onClick={() => onClick(value)}
              >
                {t(label)}
              </button>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
