"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { useTranslations } from "next-intl";
import { FallbackProps } from "react-error-boundary";
import "./Error.scss";
import Link from "next/link";

export const ErrorComponent = ({
  error,
  isNotFound,
}: FallbackProps & { isNotFound?: boolean }) => {
  const t = useTranslations();

  const isErrorCode = error?.message?.startsWith("err_");

  return (
    <SectionContainer className="container-px-100 container">
      <Icon icon="error" className="icon-xl" />
      <h3 className="text-level-subheader text-font-bold">
        {t(isNotFound ? "error_404" : "error_header_text")}
      </h3>
      {(isErrorCode || isNotFound) && (
        <div className="flex items-center gap-[8px]">
          <span>{t("error_code")}:</span>
          <span>{error.message}</span>
        </div>
      )}
      {!isErrorCode && <div>{t("error_help_text")}</div>}
      {isNotFound && (
        <Link className="text-level-normal-100 text-font-normal" href={"/"}>
          {t("return_home")}
        </Link>
      )}
    </SectionContainer>
  );
};
