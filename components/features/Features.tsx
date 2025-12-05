import { Box } from "@/shared/UI/box/Box";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Features.module.scss";

type FeatureType = {
  icon: string;
  title: string;
  paragraph: string;
};

const visuals = [
  { icon: "bar-chart" },
  { icon: "zap-fast" },
  { icon: "signal" },
  { icon: "data" },
  { icon: "download-04" },
  { icon: "file" },
];

const data = {
  title: "Prepaid 香港 eSIM Features",
  image: "__PLACEHOLDER_0__",
  features: [
    {
      icon: "https://content.travsim.fr/api/media/file/1763715192979.svg",
      title: "可靠的網絡覆蓋",
      paragraph:
        "我們與知名的移動網絡合作，為您提供在主要城市和城鎮的穩定網絡連接，讓您無後顧之憂地享受香港之旅。",
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763620730072.svg",
      title: "高速數據連接",
      paragraph:
        "享受流暢的上網體驗，無論是觀看影片還是快速下載，您都能感受到香港的網絡速度，讓您的旅行更加便利。",
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763620824296.svg",
      title: "分享數據功能",
      paragraph:
        "您可以通過熱點功能與其他設備分享數據，輕鬆實現遠程工作或在多個設備上觀看內容，提升您的旅行靈活性。",
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763620877742.svg",
      title: "數據專用計劃",
      paragraph:
        "這個香港eSIM計劃專為數據使用而設，您可以透過應用程式進行通話和發送訊息，方便與親友保持聯繫。",
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763620953388.svg",
      title: "即時獲取eSIM",
      paragraph:
        "購買後，您將立即獲得eSIM，無需在抵達後尋找零售商，輕鬆上手，快速開始您的香港之旅。",
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763621010674.svg",
      title: "簡易安裝指南",
      paragraph:
        "我們的應用程式提供安裝指南與插圖，幫助您輕鬆安裝新購的eSIM，並且有支援團隊隨時為您解答疑問。",
    },
  ],
};

export type FeaturesProps = {
  title?: string;
  features?: FeatureType[];
};

export const Features = ({
  title = data.title,
  features = data.features,
}: FeaturesProps) => {
  return (
    <SectionContainer className={styles.container}>
      <h3 className="text-level-header w-full text-left text-font-x-bold">
        {title}
      </h3>
      <div className={styles.featureContainer}>
        {features?.map(({ icon, title, paragraph }, index) => (
          <Box
            key={index}
            className={styles.feature}
            icon={icon}
            description={paragraph}
            title={title}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
