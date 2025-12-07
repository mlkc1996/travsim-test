import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./HeroSection.module.scss";
import { HeroHeader, HeroHeaderProps } from "./heroHeader/HeroHeader";
import { Packages, PackagesProps } from "./packages/Packages";
import { Services, ServicesProps } from "./services/Services";
import { Tabs, TabsProps } from "./tabs/Tabs";
import { PackageAlbum, PackageAlbumProps } from "./packageAlbum/PackageAlbum";

export type HeroSectionProps = {
  header: HeroHeaderProps;
  packages: PackagesProps;
  services: ServicesProps["services"];
  tabs: TabsProps["tabs"];
  albums: PackageAlbumProps;
};

export const HeroSection = (props: HeroSectionProps) => {
  return (
    <SectionContainer
      containerClassName={styles.background}
      orientation="row"
      className={`${styles.container} container-px-100`}
    >
      <PackageAlbum {...props.albums} />
      <main className="flex flex-col gap-[56px]" data-container>
        <HeroHeader {...props.header} />
        <Packages {...props.packages} />
        <Services services={props.services} />
        <Tabs tabs={props.tabs} />
      </main>
    </SectionContainer>
  );
};
