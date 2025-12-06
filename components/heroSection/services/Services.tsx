import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./../HeroSection.module.scss";
const services = [
  {
    icon: "shield-tick",
    title: "Safe & Secure Checkout",
  },
  {
    icon: "credit-card-02",
    title: "Quick & Easy Recharge",
  },
  {
    icon: "headphones-02",
    title: "24/7 Customer Support",
  },
];

export const Services = ({}: any) => {
  return (
    <div className={styles["services"]}>
      {services.map(({ icon, title }, index) => (
        <div key={index}>
          <div className={styles["icon-container"]}>
            <Icon icon={icon} />
          </div>
          <span className="text-level-normal-100 text-font-normal">
            {title}
          </span>
        </div>
      ))}
      <button className="text-level-normal-100 text-font-medium">
        Check Device Compatibility
      </button>
    </div>
  );
};
