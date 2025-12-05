"use client";

import React from "react";
import { CSSProperties, useEffect, useRef } from "react";

export type IconProps = {
  icon: string;
  className?: string;
  style?: CSSProperties;
};

export const Icon = ({ icon, className = "", style }: IconProps) => {
  const isExternal = /^https{0,1}:\/\//.test(icon);
  const ref = useRef<HTMLElement>(null);

  let testIcon = icon;

  const fallback = `${process.env.NEXT_PUBLIC_ICON_PATH}/unknown-doc.svg`;

  const _style = {
    ...style,
  };

  if (isExternal || !icon) {
    _style.backgroundImage = `url('${icon || fallback}')`;
    _style.backgroundRepeat = `no-repeat`;
    _style.backgroundSize = `contain`;
  } else {
    testIcon = "";
  }

  useEffect(() => {
    if (!testIcon) return;
    fetch(testIcon)
      .then((res) => {
        if (!`${res.status}`.startsWith("2")) {
          console.log("testIcon", fallback);
          if (ref.current) {
            ref.current.style.backgroundImage = `url('${fallback}')`;
            ref.current.style.backgroundRepeat = `no-repeat`;
            ref.current.style.backgroundSize = `contain`;
          }
        }
      })
      .catch(() => {});
  }, [testIcon]);

  return (
    <i
      ref={ref}
      className={`
        icon ${isExternal ? "" : `icon-${icon}`} 
      ${className}`}
      style={_style}
    ></i>
  );
};
