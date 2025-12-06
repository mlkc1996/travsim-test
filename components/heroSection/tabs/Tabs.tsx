"use client";

import { useState } from "react";
import styles from "./../HeroSection.module.scss";
import Link from "next/link";

const tabs = [
  {
    title: "Description",
    list: [
      "Uses [Network1] and [Network2] in [country]",
      "Reliable nationwide coverage",
      "4G/5G data speeds",
      "Hotspot / tethering allowed",
    ],
    href: "#",
    ctaText: "Read More",
  },
  {
    title: "Network",
    list: [
      "Compatible with major carriers including [Network1] and [Network2]",
      "Supports multi-network switching for optimal signal",
      "Coverage in urban and rural areas across [country]",
      "Advanced e-SIM technology for seamless activation",
    ],
    href: "#",
    ctaText: "Read More",
  },
  {
    title: "Returns & money back guarantee",
    list: [
      "30-day money-back guarantee if unsatisfied",
      "Easy return process via online portal",
      "Full refund for unused e-SIM plans",
      "Contact support for any return inquiries",
    ],
    href: "#",
    ctaText: "Read More",
  },
];

export const Tabs = ({}: any) => {
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
