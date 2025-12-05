"use client";
import NextImage from "next/image";
import { useState } from "react";

export type ImageProps = Parameters<typeof NextImage>[0];

export const Image = ({
  fill,
  width,
  height,
  className,
  ...rest
}: ImageProps) => {
  let _fill = !width ? true : fill;

  const [src, setSrc] = useState(rest.src);

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <NextImage
        {...rest}
        src={src}
        onError={() => {
          console.log(`onErrorCapture ${process.env.IMAGE_PATH}`);
          setSrc(`${process.env.IMAGE_PATH}/placeholder.png`);
        }}
        fill={_fill}
        width={width}
        height={height}
      />
    </div>
  );
};
