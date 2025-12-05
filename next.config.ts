import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    IMAGE_PATH: process.env.IMAGE_PATH,
    USER_PROFILE_PATH: process.env.USER_PROFILE_PATH,
  },
};

export default nextConfig;
