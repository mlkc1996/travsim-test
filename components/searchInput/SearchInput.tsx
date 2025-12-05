import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./SearchInput.module.scss";

export const SearchInput = ({ placeholder }: any) => {
  return (
    <div className={styles.inputContainer}>
      <input placeholder={placeholder} />
      <Icon icon="search-md" />
    </div>
  );
};
