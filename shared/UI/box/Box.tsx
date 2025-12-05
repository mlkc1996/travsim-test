import { Icon } from "../icon/Icon";
import "./Box.module.scss";
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
      <h4 className="box-icon">{title}</h4>
      {image?.src && (
        <div>
          <Image
            fill
            className="box-image"
            alt={image.alt ?? ""}
            src={image.src}
          />
        </div>
      )}
      <p className="box-desc">{description}</p>
    </div>
  );
};
