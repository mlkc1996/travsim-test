import { Icon } from "../icon/Icon";
import "./Box.scss";
import { Image } from "@/shared/UI/image/Image";

export type BoxProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
  image?: {
    src: string;
    alt?: string;
  };
};

export const Box = ({
  icon,
  title,
  description,
  className = "",
  image,
}: BoxProps) => {
  return (
    <div className={`box ${className}`}>
      <Icon icon={icon} className="box-icon" />
      <h4 className="text-level-subheader text-font-x-bold">{title}</h4>
      {image?.src && (
        <Image
          fill
          className="box-image"
          alt={image.alt ?? ""}
          src={image.src}
        />
      )}
      <p className="text-level-normal-100 text-font-normal">{description}</p>
    </div>
  );
};
