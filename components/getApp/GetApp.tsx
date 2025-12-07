"use client";

import Link from "next/link";
import { Image } from "@/shared/UI/image/Image";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./GetApp.module.scss";
import { useTranslations } from "next-intl";

export const GetApp = () => {
  const t = useTranslations("GetApp");
  return (
    <SectionContainer
      orientation="row"
      className={`${styles.container} container-px-200`}
    >
      <Image
        className={styles.image}
        fill
        src={`${process.env.IMAGE_PATH}/mobile_app.png`}
        alt={"mobile app"}
      />
      <div className="flex flex-col  md:gap-[5rem] gap-[12px]">
        <div className="flex flex-col md:gap-[2.2rem] gap-[6px]">
          <h3 className="text-level-header text-font-x-bold">{t("title")}</h3>
          <p className="text-level-normal-100 text-font-normal">
            {t("description")}
          </p>
        </div>
        <div className="flex gap-[9.45px] items-center">
          <Link href={"#"}>
            <Image
              width={126}
              height={42}
              src={`${process.env.IMAGE_PATH}/app_store.png`}
              alt={"App Store"}
            />
          </Link>
          <Link href={"#"}>
            <div>
              <Image
                width={126}
                height={42}
                src={`${process.env.IMAGE_PATH}/play_store.png`}
                alt={"Play Store"}
              />
            </div>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};
