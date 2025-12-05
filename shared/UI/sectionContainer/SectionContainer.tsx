import styles from "./SectionContainer.module.scss";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  orientation?: "col" | "row";
  containerClassName?: string;
};

export const SectionContainer = ({
  containerClassName = "",
  children,
  className = "",
  gap = "24px",
  orientation = "col",
}: SectionContainerProps) => {
  return (
    <section className={`${styles.HeaderContainer} ${containerClassName}`}>
      <div className={`${className} gap-[${gap}] flex-${orientation}`}>
        {children}
      </div>
    </section>
  );
};
