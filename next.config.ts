import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    IMAGE_PATH: process.env.IMAGE_PATH,
    USER_PROFILE_PATH: process.env.USER_PROFILE_PATH,
  },
  images: {
    remotePatterns: [new URL("https://content.travsim.fr/api/media/file/**")],
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
