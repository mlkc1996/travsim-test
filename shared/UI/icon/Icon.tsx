import { CSSProperties } from "react";

export type IconProps = {
  icon: string;
  className?: string;
  style?: CSSProperties;
};

export const Icon = ({ icon, className = "", style }: IconProps) => {
  const isExternal = /^https{0,1}:\/\//.test(icon);

  const _style = {
    ...style,
  };

  if (isExternal) {
    console.log("Icon isExternal", icon);
    _style.backgroundImage = `url('${icon}')`;
    _style.backgroundRepeat = `no-repeat`;
    _style.backgroundSize = `contain`;
  }

  return (
    <i
      className={`
        icon ${isExternal ? "" : `icon-${icon}`} 
      ${className}`}
      style={_style}
    ></i>
  );
};
