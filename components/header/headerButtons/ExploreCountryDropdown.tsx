"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from "@radix-ui/react-popover";
import { Image } from "@/shared/UI/image/Image";
import { useRouter } from "next/navigation";
import { RegionOptions } from "@/shared/settings/options";
import { useTranslations } from "next-intl";

export const ExploreCountryDropdown = () => {
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
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="text-level-normal-100 text-font-normal"
          style={{
            width: "max-content",
          }}
        >
          {t("explore")}
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
          {RegionOptions.map(({ label, value }, index) => (
            <div
              key={value}
              style={{
                padding: "4px 0",
                borderBottom:
                  index + 1 == RegionOptions.length ? "" : "1px solid #d9d9d9",
              }}
            >
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
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
