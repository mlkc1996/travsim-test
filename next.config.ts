import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    IMAGE_PATH: process.env.IMAGE_PATH,
    ICON_PATH: process.env.ICON_PATH,
    NEXT_PUBLIC_ICON_PATH: process.env.ICON_PATH,
    USER_PROFILE_PATH: process.env.USER_PROFILE_PATH,
  },
  images: {
    remotePatterns: [new URL("https://content.travsim.fr/api/media/file/**")],
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
