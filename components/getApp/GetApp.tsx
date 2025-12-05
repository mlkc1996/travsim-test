import Link from "next/link";
import { Image } from "@/shared/UI/image/Image";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./GetApp.module.scss";

export const GetApp = () => {
  return (
    <SectionContainer orientation="row" className={styles.container}>
      <Image
        className={styles.image}
        fill
        src={`${process.env.IMAGE_PATH}/mobile_app.png`}
        alt={"mobile app"}
      />
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[22px]">
          <h3 className="text-level-header text-font-x-bold">
            Wanna try it first? Get the App
          </h3>
          <p className="text-level-normal-100 text-font-normal">
            Download our app and get 500MB free data to try in your hometown
          </p>
        </div>
        <div className="flex gap-[9.45px] items-center">
          <Link href={"#"}>
            <Image
              width={126}
              height={42}
              src={`${process.env.IMAGE_PATH}/app_store.png`}
              alt={"App Store"}
            />
          </Link>
          <Link href={"#"}>
            <div>
              <Image
                width={126}
                height={42}
                src={`${process.env.IMAGE_PATH}/play_store.png`}
                alt={"Play Store"}
              />
            </div>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};
