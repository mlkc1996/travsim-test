"use client";

import { Box } from "@/shared/UI/box/Box";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./BenefitSection.module.scss";

const data = {
  title: "Use your eSIM for United States Travel to:",
  accordions: [
    {
      icon: "https://content.travsim.fr/api/media/file/1763721025480.svg",
      title: "Stay Close to Home",
      paragraph:
        "With your eSIM, keep in touch with friends and family using your favorite communication apps while enjoying iconic sights like the Grand Canyon and Times Square.",
      image: "https://content.travsim.fr/api/media/file/1763717067513.png",
      apps: [
        {
          iconId: "Viber",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696845609.svg",
          text: "Clear voice calls",
        },
        {
          iconId: "Telegram",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696859034.svg",
          text: "Seamless video chats",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721109100.svg",
      title: "Navigate with Confidence",
      paragraph:
        "Explore the vast landscapes and vibrant cities without worrying about getting lost. Use navigation apps to explore the beauty of national parks and city streets.",
      image: "https://content.travsim.fr/api/media/file/1763716957071.png",
      apps: [
        {
          iconId: "GoogleMaps",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697040641.png",
          text: "Find your way easily",
        },
        {
          iconId: "Apple Maps",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697503236.png",
          text: "Avoid getting lost",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721086994.svg",
      title: "Share Your Journey",
      paragraph:
        "Capture and share your adventures using social media apps from iconic spots like the Golden Gate Bridge and the Statue of Liberty with friends and family.",
      image: "https://content.travsim.fr/api/media/file/1763716994707.png",
      apps: [
        {
          iconId: "Instagram",
          iconUrl: "",
          text: "Post stunning photos",
        },
        {
          iconId: "YouTube",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696976692.svg",
          text: "Share exciting videos",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721134222.svg",
      title: "Stream Your Favorites",
      paragraph:
        "Relax in your hotel room or during downtime and stream your favorite shows, movies, and music on popular apps while exploring cities like New York and Los Angeles.",
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
          iconUrl: "https://content.travsim.fr/6915cda82dffa736ce69745f",
          text: "Listen to your playlists",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721062339.svg",
      title: "Get Around Easily",
      paragraph:
        "Enjoy the convenience of ride-hailing apps to travel hassle-free through the bustling streets of Chicago and the sunny beaches of Miami, just like at home.",
      image: "https://content.travsim.fr/api/media/file/1763716591053.png",
      apps: [
        {
          iconId: "Uber",
          iconUrl: "",
          text: "Effortless transport solutions",
        },
        {
          iconId: "yango",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697588615.png",
          text: "Convenient rides at your fingertips",
        },
      ],
    },
  ],
};

export const BenefitsSection = ({
  title = data.title,
  accordions = data.accordions,
}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionContainer>
      <h3>{title}</h3>
      <ul>
        {accordions.map(({ title }: any, index: number) => {
          return (
            <li key={index}>
              <button onClick={() => setActiveIndex(index)}>{title}</button>
            </li>
          );
        })}
      </ul>
      <div className={styles.accordions}>
        {accordions.map(
          ({ title, icon, paragraph, image, apps }: any, index: number) => {
            return (
              <div
                key={index}
                className={`${styles.accordion} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Box icon={icon} title={title} description={paragraph} />
                <div>
                  {image && <Image src={image} fill alt={`${title}`} />}
                </div>
                <div>
                  {apps.map(({ iconId, iconUrl, text }: any) => {
                    if (iconUrl || text) {
                      return (
                        <div key={`${iconId}-${index}`}>
                          <Icon icon={iconUrl} />
                          <span>{text}</span>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </SectionContainer>
  );
};
