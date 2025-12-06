import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./../Header.module.scss";

export const HeaderButtons = () => {
  return (
    <div className={styles.HeaderButtons}>
      <div>
        <button>Explore</button>
        <button>Help</button>
        <button>
          <Icon icon="translate-01" />
        </button>
        <div className={styles.divider}></div>
        <button>
          <Icon icon="currency-dollar-circle" />
        </button>
      </div>
      <button className="cta">Sign in | Sign up</button>
    </div>
  );
};
