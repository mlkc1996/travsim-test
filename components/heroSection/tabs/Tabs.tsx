"use client";

import { useState } from "react";
import styles from "./../HeroSection.module.scss";
import Link from "next/link";

export type TabsProps = {
  tabs: {
    title: string;
    list: string[];
    href: string;
    ctaText: string;
  }[];
};

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { list, ctaText, href } = tabs[activeIndex];

  return (
    <div className={styles.tabs}>
      <ul>
        {tabs.map(({ title }, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`${styles["tab-button"]} text-font-bold
            text-level-normal-100 ${activeIndex == index ? styles.active : ""}`}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-[8px]">
        <ul
          style={{
            listStyle: "inside",
          }}
        >
          {list.map((text, index) => {
            return (
              <li
                key={index}
                className="text-level-normal-100 text-font-normal"
              >
                {text}
              </li>
            );
          })}
        </ul>

        <Link
          href={href}
          className="text-level-normal-100 text-font-x-bold"
          style={{
            color: "var(--color-red)",
          }}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};
