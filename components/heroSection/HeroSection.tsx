import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { Image } from "@/shared/UI/image/Image";
import styles from "./HeroSection.module.scss";
import { Icon } from "@/shared/UI/icon/Icon";

const packages = [
  {
    volumn: `5 GB`,
    days: 14,
    price: "$ 29.99",
  },
  {
    volumn: `5 GB`,
    days: 21,
    price: "$ 29.99",
  },
  {
    volumn: `5 GB`,
    days: 21,
    price: "$ 29.99",
  },
  {
    volumn: `5 GB`,
    days: 30,
    price: "$ 29.99",
  },
  {
    volumn: `5 GB`,
    days: 30,
    price: "$ 29.99",
  },
  {
    volumn: `5 GB`,
    days: 30,
    price: "$ 29.99",
  },
];

const PackageAlbum = () => {
  return (
    <div>
      <Image src={""} alt={""} />
      <div>
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return <Image key={index} src={""} alt="" />;
          })}
      </div>
    </div>
  );
};

const HeroHeader = () => {
  return (
    <header className="flex flex-col gap-[16px]">
      <h3 className="text-level-header-200 text-font-x-bold">
        eSIM for the Saint Vincent & Grenadines
      </h3>
      <div className="flex items-center gap-[19px]">
        <span className="text-level-normal-100 text-font-x-bold">
          Excellent
        </span>
        <div className="flex gap-[2px]">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Image
                key={index}
                width={22.5}
                height={22.5}
                src={`${process.env.IMAGE_PATH}/rating-star.png`}
                alt={"rating"}
              />
            ))}
        </div>
        <span className="text-level-normal-100 text-font-normal">
          Based on <strong>1,764 Reviews</strong> on
        </span>
        <Image
          width={87}
          height={22.5}
          src={`${process.env.IMAGE_PATH}/trust-pilot.png`}
          alt={"trust pilot"}
        />
      </div>
    </header>
  );
};

const Packages = () => {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <h4 className="text-level-normal-200 text-font-x-bold">
        Choose your USA eSIM package
      </h4>
      <div className={styles.packages}>
        {packages.map((item, index) => {
          return <Package key={index} {...item} isBest={index === 1} />;
        })}
      </div>
    </div>
  );
};

const Package = ({ isBest, volumn, days, price }: any) => {
  return (
    <div className={`${isBest ? styles.best : ""} ${styles.package}`}>
      {isBest && (
        <>
          <div className={`${styles["best-value-tag"]} text-font-x-bold`}>
            Best value
          </div>
          <div className={`${styles["best-value-bg"]}`}></div>
          <div className={`${styles["best-value-fore-bg"]}`}></div>
        </>
      )}
      <div className={styles["package-stat"]}>
        <div className="flex gap-[8px] items-center">
          <Icon icon={"switch-vertical-01"} />
          <p className="text-level-normal-100 text-font-x-bold">{volumn}</p>
        </div>
        <div className="flex gap-[8px] items-center">
          <Icon icon={"calendar"} />
          <p className="text-level-normal-100 text-font-normal">{days} Days</p>
        </div>
      </div>
      <span className="text-font-x-bold text-level-normal">{price}</span>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <SectionContainer
      containerClassName={styles.background}
      orientation="row"
      className={styles.container}
    >
      <PackageAlbum />
      <main className="flex flex-col gap-[56px]">
        <HeroHeader />
        <Packages />
      </main>
    </SectionContainer>
  );
};
