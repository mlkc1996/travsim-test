"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const LoginButton = ({ className = "" }: any) => {
  const t = useTranslations();

  return (
    <Link className={`cta ${className}`} href="#">
      {t("sign_in_up")}
    </Link>
  );
};
