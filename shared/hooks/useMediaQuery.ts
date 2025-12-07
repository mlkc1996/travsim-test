"use client";

import { useMediaQuery as UseMediaQuery } from "react-responsive";

export const WINDOW_SIZE = {
  mobile: 425,
  Tablet: 768,
  Laptop: 1024,
};

export const useMediaQuery = (screen: keyof typeof WINDOW_SIZE) => {
  return UseMediaQuery({ maxWidth: WINDOW_SIZE[screen] });
};
