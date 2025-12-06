import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { Image } from "@/shared/UI/image/Image";
import styles from "./HeroSection.module.scss";
import { HeroHeader } from "./heroHeader/HeroHeader";
import { Packages } from "./packageAlbum/PackageAlbum";
import { Services } from "./services/Services";
import { Tabs } from "./tabs/Tabs";

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
