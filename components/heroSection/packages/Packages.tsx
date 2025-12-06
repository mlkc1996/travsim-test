import styles from "@/components/heroSection/HeroSection.module.scss";
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

export const Packages = () => {
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

export const Package = ({ isBest, volumn, days, price }: any) => {
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
