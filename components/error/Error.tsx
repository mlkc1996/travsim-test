"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { useTranslations } from "next-intl";
import { FallbackProps } from "react-error-boundary";
import "./Error.scss";

export const ErrorComponent = ({ error }: FallbackProps) => {
  const t = useTranslations();

  const isErrorCode = error?.message?.startsWith("err_");

  return (
    <SectionContainer className="container-px-100 container">
      <Icon icon="error" className="icon-xl" />
      <h3 className="text-level-subheader text-font-bold">
        {t("error_header_text")}
      </h3>
      {isErrorCode && (
        <div className="flex items-center gap-[8px]">
          <span>{t("error_code")}:</span>
          <span>{error.message}</span>
        </div>
      )}
      {!isErrorCode && <div>{t("error_help_text")}</div>}
    </SectionContainer>
  );
};
