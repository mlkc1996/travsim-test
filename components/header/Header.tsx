import { Icon } from "@/shared/UI/icon/Icon";
import { SearchInput } from "../searchInput/SearchInput";

export const Header = () => {
  return (
    <header>
      <Icon icon={"logo"} />
      <SearchInput />
      <div>
        <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <button></button>
      </div>
    </header>
  );
};
