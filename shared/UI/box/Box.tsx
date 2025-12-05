import { Icon } from "../icon/Icon";
import "./Box.module.scss";
import Image from "next/image";

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
      <h4 className="box-icon">{title}</h4>
      {image?.src && (
        <Image className="box-image" alt={image.alt ?? ""} src={image.src} />
      )}
      <p className="box-desc">{description}</p>
    </div>
  );
};
