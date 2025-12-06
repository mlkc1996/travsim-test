"use client";

import { Image } from "@/shared/UI/image/Image";
import { useState } from "react";
import styles from "./../HeroSection.module.scss";

const data = {
  flag_url: `${process.env.IMAGE_PATH}/us-flag.png`,
  images: [`${process.env.IMAGE_PATH}/productLargeImg.jpg`, "", "", "", ""],
};

export const PackageAlbum = ({
  images = data.images,
  flag_url = data.flag_url,
}: any) => {
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
        />
        <Image
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
