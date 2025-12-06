import { Image } from "@/shared/UI/image/Image";
import styles from "./../HeroSection.module.scss";

export const HeroHeader = () => {
  return (
    <header className={`flex flex-col gap-[16px]`}>
      <h3 className="text-level-header-200 text-font-x-bold">
        eSIM for the Saint Vincent & Grenadines
      </h3>
      <div className="flex items-center gap-[19px]">
        <span className="text-level-normal-100 text-font-x-bold">
          Excellent
        </span>
        <div className="flex gap-[2px]">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Image
                key={index}
                width={22.5}
                height={22.5}
                src={`${process.env.IMAGE_PATH}/rating-star.png`}
                alt={"rating"}
              />
            ))}
        </div>
        <span className="text-level-normal-100 text-font-normal">
          Based on <strong>1,764 Reviews</strong> on
        </span>
        <Image
          width={87}
          height={22.5}
          src={`${process.env.IMAGE_PATH}/trust-pilot.png`}
          alt={"trust pilot"}
        />
      </div>
    </header>
  );
};
