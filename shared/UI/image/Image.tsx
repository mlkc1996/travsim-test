import NextImage from "next/image";

export type ImageProps = Parameters<typeof NextImage>[0];

export const Image = ({
  fill,
  width,
  height,
  className,
  ...rest
}: ImageProps) => {
  let _fill = !width ? true : fill;
  return (
    <div className={className} style={{ position: "relative" }}>
      <NextImage {...rest} fill={_fill} width={width} height={height} />;
    </div>
  );
};
