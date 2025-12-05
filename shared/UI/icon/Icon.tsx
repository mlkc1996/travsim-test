import { CSSProperties } from "react";

export type IconProps = {
  icon: string;
  className?: string;
  style?: CSSProperties;
};

export const Icon = ({ icon, className, style }: IconProps) => {
  return <i className={`icon icon-${icon} ${className}`} style={style}></i>;
};
