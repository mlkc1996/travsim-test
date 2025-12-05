import "./SectionContainer.scss";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  orientation?: "col" | "row";
  containerClassName?: string;
};

export const SectionContainer = ({
  containerClassName = "",
  children,
  className = "",
  orientation = "col",
}: SectionContainerProps) => {
  return (
    <section className={`SectionContainer ${containerClassName}`}>
      <div className={`content-container ${className} flex-${orientation}`}>
        {children}
      </div>
    </section>
  );
};
