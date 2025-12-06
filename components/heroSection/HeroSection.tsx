import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./HeroSection.module.scss";
import { HeroHeader } from "./heroHeader/HeroHeader";
import { Packages } from "./packages/Packages";
import { Services } from "./services/Services";
import { Tabs } from "./tabs/Tabs";
import { PackageAlbum } from "./packageAlbum/PackageAlbum";

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
        <Services />
        <Tabs />
      </main>
    </SectionContainer>
  );
};
