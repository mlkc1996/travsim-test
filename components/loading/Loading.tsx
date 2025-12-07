import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Loading.module.scss";

export type LoadingProps = {
  className?: string;
  size?: "xs" | "small" | "medium" | "large";
};

export const Loading: React.FC<LoadingProps> = ({
  className = "",
  size = "medium",
}) => {
  const _className = `${styles[`LoadingDots-dot`]} ${
    styles[`LoadingDots-dot-${size}`]
  } ${className}`;

  return (
    <SectionContainer className="h-[20rem]">
      <div className={`${styles["LoadingDots-wave"]}`}>
        <span className={`${_className}`}></span>
        <span className={`${_className}`}></span>
        <span className={`${_className}`}></span>
      </div>
    </SectionContainer>
  );
};
