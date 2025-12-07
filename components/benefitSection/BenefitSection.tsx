"use client";

import { Box } from "@/shared/UI/box/Box";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { useState } from "react";
import { Image } from "@/shared/UI/image/Image";
import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./BenefitSection.module.scss";

const AppIconsContainer = ({ apps, isActive, className }: any) => {
  return (
    <div
      className={`flex flex-col gap-[8px] mt-auto ${styles.iconsContainer} ${className}`}
      style={{ marginTop: "auto" }}
    >
      {apps.map(({ iconId, iconUrl, text }: any, index: number) => {
        if (iconUrl || text) {
          return (
            <div
              key={`${iconId}-${index}`}
              className="flex items-center gap-[10px]"
            >
              <div className={`${styles["icon-wrapper"]}`}>
                <Icon icon={iconUrl} />
              </div>

              {isActive && (
                <span className="text-level-normal-100 text-font-normal">
                  {text}
                </span>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

const Accordion = ({
  isActive,
  onClick,
  icon,
  title,
  description,
  apps,
  image,
}: any) => {
  return (
    <div
      className={`${styles.accordion} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles["left-side"]}>
        <Box
          className={`${isActive ? "" : styles.hidden} ${styles.box}`}
          icon={icon}
          title={title}
          description={description}
        />
        <AppIconsContainer apps={apps} isActive={isActive} />
      </div>
      <Image className={styles.image} src={image} fill alt={`${title}`} />
      <AppIconsContainer
        apps={apps}
        isActive={isActive}
        className={styles.mobile}
      />
    </div>
  );
};

export type BenefitsSectionProps = {
  title: string;
  accordions: {
    icon: string;
    title: string;
    paragraph: string;
    image: string;
    apps: {
      iconId: string;
      iconUrl: string;
      text: string;
    }[];
  }[];
};

export const BenefitsSection = ({
  title,
  accordions,
}: BenefitsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionContainer className={`${styles.container} container-px-200`}>
      <h3 className="text-level-header text-font-x-bold w-full text-left">
        {title}
      </h3>
      <ul className="self-start flex gap-[2.4rem] flex-wrap">
        {accordions.map(({ title }: any, index: number) => {
          return (
            <li key={index}>
              <button
                className={`${
                  styles.button
                } text-font-normal text-level-normal-100 ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.accordions}>
        {accordions.map((accordion: any, index: number) => (
          <Accordion
            {...accordion}
            description={accordion.paragraph}
            isActive={index === activeIndex}
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
