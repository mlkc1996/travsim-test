"use client";

import { Box } from "@/shared/UI/box/Box";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { useState } from "react";
import { Image } from "@/shared/UI/image/Image";
import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./BenefitSection.module.scss";

const data = {
  title: "Use your eSIM for United States Travel to:",
  accordions: [
    {
      icon: "https://content.travsim.fr/api/media/file/1763721025480.svg",
      title: "Stay Connected Easily",
      paragraph:
        "Keep in touch with family and friends back home through communication apps while exploring vibrant cities like New York and San Francisco.",
      image: "https://content.travsim.fr/api/media/file/1763717067513.png",
      apps: [
        {
          iconId: "WhatsApp",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696770786.svg",
          text: "Clear calls every time",
        },
        {
          iconId: "Telegram",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696859034.svg",
          text: "Seamless video calls",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721109100.svg",
      title: "Navigate with Confidence",
      paragraph:
        "Find your way around bustling streets and scenic routes using your favorite navigation tools while enjoying attractions in Miami and Los Angeles.",
      image: "https://content.travsim.fr/api/media/file/1763716957071.png",
      apps: [
        {
          iconId: "GoogleMaps",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697040641.png",
          text: "Easily explore new places",
        },
        {
          iconId: "Apple Maps",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697503236.png",
          text: "No more getting lost",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721086994.svg",
      title: "Share Your Adventures",
      paragraph:
        "Share your exciting experiences on social media with friends and family while visiting iconic sites in Washington D.C. and Chicago.",
      image: "https://content.travsim.fr/api/media/file/1763716994707.png",
      apps: [
        {
          iconId: "Instagram",
          iconUrl: "",
          text: "Post your favorite moments",
        },
        {
          iconId: "YouTube",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696976692.svg",
          text: "Share videos of fun times",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721134222.svg",
      title: "Stream On-the-Go",
      paragraph:
        "Relax and enjoy your favorite shows and music while unwinding in your hotel or during a scenic drive through the countryside.",
      image: "https://content.travsim.fr/api/media/file/1763717211772.png",
      apps: [
        {
          iconId: "Netflix",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696170131.svg",
          text: "Watch your favorite series",
        },
        {
          iconId: "Spotify",
          iconUrl: "",
          text: "Listen to top artists",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721062339.svg",
      title: "Hassle-Free Transport",
      paragraph:
        "Use your preferred ride-hailing apps for easy transport while exploring the sights of cities like Seattle and Austin.",
      image: "https://content.travsim.fr/api/media/file/1763716591053.png",
      apps: [
        {
          iconId: "Uber",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764916778931.png",
          text: "Get around with ease",
        },
        {
          iconId: "grab",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697775939.png",
          text: "Convenient rides at your fingertips",
        },
      ],
    },
  ],
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
        <div
          className="flex flex-col gap-[8px] mt-auto"
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
      </div>
      {<Image className={styles.image} src={image} fill alt={`${title}`} />}
    </div>
  );
};

export const BenefitsSection = ({
  title = data.title,
  accordions = data.accordions,
}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionContainer className={styles.container}>
      <h3 className="text-level-header text-font-x-bold w-full text-left">
        {title}
      </h3>
      <ul className="self-start flex gap-[24px]">
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
