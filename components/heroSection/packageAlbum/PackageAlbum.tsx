"use client";

import { Image } from "@/shared/UI/image/Image";
import { useState } from "react";
import styles from "./../HeroSection.module.scss";

export type PackageAlbumProps = {
  flag_url: string;
  images: string[];
};

export const PackageAlbum = ({ images, flag_url }: PackageAlbumProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const main = images[activeIndex];

  return (
    <div className={styles.packageAlbum}>
      <div style={{ position: "relative" }}>
        <Image
          src={flag_url}
          alt="flag"
          width={64}
          height={64}
          className={styles.flagImage}
          style={{
            objectFit: "cover",
          }}
        />
        <Image
          key={main}
          style={{
            objectFit: "cover",
            objectPosition: "5%",
          }}
          src={main}
          alt={""}
          className={styles.mainImage}
        />
      </div>
      <div className={styles.selection}>
        {images.map((src: string, index: number) => {
          return (
            <Image
              className={`${index === activeIndex ? styles.active : ""} ${
                styles.image
              }`}
              key={index}
              src={src}
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "5%",
              }}
              onClick={() => {
                setActiveIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
