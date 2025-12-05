import Link from "next/link";
import { Image } from "@/shared/UI/image/Image";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";

export const GetApp = () => {
  return (
    <SectionContainer orientation="row">
      <Image
        fill
        src={`${process.env.IMAGE_PATH}/mobile_app.png`}
        alt={"mobile app"}
      />
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[22px]">
          <h3>Wanna try it first? Get the App</h3>
          <p>
            Download our app and get 500MB free data to try in your hometown
          </p>
        </div>
        <div className="flex gap-[9.45px] items-center">
          <Link href={"#"}>
            <Image
              fill
              src={`${process.env.IMAGE_PATH}/app_store.png`}
              alt={"App Store"}
            />
          </Link>
          <Link href={"#"}>
            <div>
              <Image
                fill
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
