import axios, { AxiosError } from "axios";

export type TemplateType =
  | "HeroSection"
  | "BenefitsSection"
  | "FeaturesSection"
  | "FrequentlyAskedQuestions"
  | "HowToGetStarted"
  | "HowWeCompare"
  | "ReasonsSection"
  | "TestimonialsSection"
  | "ResourcesSection"
  | "AlsoLikeSection"
  | "BestValue";

const HardcodeData: any = {
  HeroSection: {
    "zh-HK": {
      US: {
        header: {
          title: "適用於聖文森及格瑞那丁的eSIM",
          level: "優秀",
          rating: 5,
          ratingTextContent: "根據<strong>1,764條評價</strong>",
        },
        packages: {
          title: "選擇您的美國 eSIM 套餐",
          packages: [
            {
              volumn: `5 GB`,
              days: 14,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 21,
              price: "$ 29.99",
              isBest: true,
            },
            {
              volumn: `5 GB`,
              days: 21,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
          ],
        },
        services: [
          {
            icon: "shield-tick",
            title: "安全及可靠結帳",
          },
          {
            icon: "credit-card-02",
            title: "快速及簡單充值",
          },
          {
            icon: "headphones-02",
            title: "24/7 客戶支援",
          },
        ],
        tabs: [
          {
            title: "描述",
            list: [
              "在 [country] 使用 [Network1] 和 [Network2]",
              "可靠的全國覆蓋",
              "4G/5G 數據速度",
              "允許熱點 / 共享",
            ],
            href: "#",
            ctaText: "閱讀更多",
          },
          {
            title: "網絡",
            list: [
              "兼容主要營運商，包括 [Network1] 和 [Network2]",
              "支援多網絡切換以獲得最佳訊號",
              "覆蓋 [country] 的城市和鄉村地區",
              "先進的 e-SIM 技術，實現無縫啟用",
            ],
            href: "#",
            ctaText: "閱讀更多",
          },
          {
            title: "退貨及退款保證",
            list: [
              "若不滿意，30 天退款保證",
              "透過線上入口的簡單退貨程序",
              "未使用的 e-SIM 計劃全額退款",
              "如有任何退貨查詢，請聯絡支援",
            ],
            href: "#",
            ctaText: "閱讀更多",
          },
        ],
        albums: {
          flag_url: `${process.env.IMAGE_PATH}/us-flag.png`,
          images: [
            `${process.env.IMAGE_PATH}/productLargeImg.jpg`,
            "",
            "",
            "",
            "",
          ],
        },
      },
      HK: {
        header: {
          title: "適用於香港的eSIM",
          level: "優秀",
          rating: 5,
          ratingTextContent: "根據<strong>1,764條評價</strong>",
        },
        packages: {
          title: "選擇您的香港 eSIM 套餐",
          packages: [
            {
              volumn: `5 GB`,
              days: 14,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 21,
              price: "$ 29.99",
              isBest: true,
            },
            {
              volumn: `5 GB`,
              days: 21,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
          ],
        },
        services: [
          {
            icon: "shield-tick",
            title: "安全及可靠結帳",
          },
          {
            icon: "credit-card-02",
            title: "快速及簡單充值",
          },
          {
            icon: "headphones-02",
            title: "24/7 客戶支援",
          },
        ],
        tabs: [
          {
            title: "描述",
            list: [
              "在 [country] 使用 [Network1] 和 [Network2]",
              "可靠的全國覆蓋",
              "4G/5G 數據速度",
              "允許熱點 / 共享",
            ],
            href: "#",
            ctaText: "閱讀更多",
          },
          {
            title: "網絡",
            list: [
              "兼容主要營運商，包括 [Network1] 和 [Network2]",
              "支援多網絡切換以獲得最佳訊號",
              "覆蓋 [country] 的城市和鄉村地區",
              "先進的 e-SIM 技術，實現無縫啟用",
            ],
            href: "#",
            ctaText: "閱讀更多",
          },
          {
            title: "退貨及退款保證",
            list: [
              "若不滿意，30 天退款保證",
              "透過線上入口的簡單退貨程序",
              "未使用的 e-SIM 計劃全額退款",
              "如有任何退貨查詢，請聯絡支援",
            ],
            href: "#",
            ctaText: "閱讀更多",
          },
        ],
        albums: {
          flag_url: `${process.env.IMAGE_PATH}/hk-flag.png`,
          images: [`${process.env.IMAGE_PATH}/hk-album.jpg`, "", "", "", ""],
        },
      },
    },
    "en-US": {
      US: {
        header: {
          title: "eSIM for the Saint Vincent & Grenadines",
          level: "Excellent",
          rating: 5,
          ratingTextContent: "Based on <strong>1,764 Reviews</strong> on",
        },
        packages: {
          title: "Choose your USA eSIM package",
          packages: [
            {
              volumn: `5 GB`,
              days: 14,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 21,
              price: "$ 29.99",
              isBest: true,
            },
            {
              volumn: `5 GB`,
              days: 21,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
          ],
        },
        services: [
          {
            icon: "shield-tick",
            title: "Safe & Secure Checkout",
          },
          {
            icon: "credit-card-02",
            title: "Quick & Easy Recharge",
          },
          {
            icon: "headphones-02",
            title: "24/7 Customer Support",
          },
        ],
        tabs: [
          {
            title: "Description",
            list: [
              "Uses [Network1] and [Network2] in [country]",
              "Reliable nationwide coverage",
              "4G/5G data speeds",
              "Hotspot / tethering allowed",
            ],
            href: "#",
            ctaText: "Read More",
          },
          {
            title: "Network",
            list: [
              "Compatible with major carriers including [Network1] and [Network2]",
              "Supports multi-network switching for optimal signal",
              "Coverage in urban and rural areas across [country]",
              "Advanced e-SIM technology for seamless activation",
            ],
            href: "#",
            ctaText: "Read More",
          },
          {
            title: "Returns & money back guarantee",
            list: [
              "30-day money-back guarantee if unsatisfied",
              "Easy return process via online portal",
              "Full refund for unused e-SIM plans",
              "Contact support for any return inquiries",
            ],
            href: "#",
            ctaText: "Read More",
          },
        ],
        albums: {
          flag_url: `${process.env.IMAGE_PATH}/us-flag.png`,
          images: [
            `${process.env.IMAGE_PATH}/productLargeImg.jpg`,
            "",
            "",
            "",
            "",
          ],
        },
      },
      HK: {
        header: {
          title: "eSIM for Hong Kong",
          level: "Excellent",
          rating: 5,
          ratingTextContent: "Based on <strong>1,764 Reviews</strong> on",
        },
        packages: {
          title: "Choose your Hong Kong eSIM package",
          packages: [
            {
              volumn: `5 GB`,
              days: 14,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 21,
              price: "$ 29.99",
              isBest: true,
            },
            {
              volumn: `5 GB`,
              days: 21,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
            {
              volumn: `5 GB`,
              days: 30,
              price: "$ 29.99",
            },
          ],
        },
        services: [
          {
            icon: "shield-tick",
            title: "Safe & Secure Checkout",
          },
          {
            icon: "credit-card-02",
            title: "Quick & Easy Recharge",
          },
          {
            icon: "headphones-02",
            title: "24/7 Customer Support",
          },
        ],
        tabs: [
          {
            title: "Description",
            list: [
              "Uses [Network1] and [Network2] in [country]",
              "Reliable nationwide coverage",
              "4G/5G data speeds",
              "Hotspot / tethering allowed",
            ],
            href: "#",
            ctaText: "Read More",
          },
          {
            title: "Network",
            list: [
              "Compatible with major carriers including [Network1] and [Network2]",
              "Supports multi-network switching for optimal signal",
              "Coverage in urban and rural areas across [country]",
              "Advanced e-SIM technology for seamless activation",
            ],
            href: "#",
            ctaText: "Read More",
          },
          {
            title: "Returns & money back guarantee",
            list: [
              "30-day money-back guarantee if unsatisfied",
              "Easy return process via online portal",
              "Full refund for unused e-SIM plans",
              "Contact support for any return inquiries",
            ],
            href: "#",
            ctaText: "Read More",
          },
        ],
        albums: {
          flag_url: `${process.env.IMAGE_PATH}/hk-flag.png`,
          images: [`${process.env.IMAGE_PATH}/hk-album.jpg`, "", "", "", ""],
        },
      },
    },
  },
  ReasonsSection: {
    "zh-HK": {
      US: {
        title: "為什麼選擇我們作為您的美國 eSIM 供應商",
        reasons: [
          {
            title: "清晰簡明的價格",
            paragraph:
              "我們的計劃均為全額預付，絕無漫遊費用或隱藏收費，不會出現超額費用，價格永遠透明公開。",
          },
          {
            title: "應用程式操作簡便",
            paragraph:
              "我們的流動應用程式讓您輕鬆掌控一切。只需數次點擊，即可安裝 eSIM、查詢數據餘額、管理計劃，以及聯絡客戶支援。",
          },
          {
            title: "一張 eSIM，多次旅遊適用",
            paragraph:
              "只需安裝一次我們的 eSIM，即可於每次出國時重複使用。只需在應用程式內為下一個目的地購買相應的數據套餐即可。",
          },
          {
            title: "廣泛兼容性",
            paragraph:
              "我們的 eSIM 兼容多款支援 eSIM 功能的 iOS 及 Android 裝置。請參閱兼容裝置清單。",
          },
          {
            title: "完全可自訂",
            paragraph:
              "您可根據個人需要靈活調整 eSIM 計劃，隨時透過我們的應用程式進行充值或延長使用期限。",
          },
          {
            title: "全天候客戶支援",
            paragraph:
              "我們提供 24/7 客戶支援服務。您可隨時在應用程式內瀏覽常見問題、詳細指南，或直接聯絡我們的支援團隊。",
          },
        ],
      },
      HK: {
        title: "為什麼選擇我們作為您的香港 eSIM 供應商",
        reasons: [
          {
            title: "清晰簡明的價格",
            paragraph:
              "我們的計劃均為全額預付，絕無漫遊費用或隱藏收費，不會出現超額費用，價格永遠透明公開。",
          },
          {
            title: "應用程式操作簡便",
            paragraph:
              "我們的流動應用程式讓您輕鬆掌控一切。只需數次點擊，即可安裝 eSIM、查詢數據餘額、管理計劃，以及聯絡客戶支援。",
          },
          {
            title: "一張 eSIM，多次旅遊適用",
            paragraph:
              "只需安裝一次我們的 eSIM，即可於每次出國時重複使用。只需在應用程式內為下一個目的地購買相應的數據套餐即可。",
          },
          {
            title: "廣泛兼容性",
            paragraph:
              "我們的 eSIM 兼容多款支援 eSIM 功能的 iOS 及 Android 裝置。請參閱兼容裝置清單。",
          },
          {
            title: "完全可自訂",
            paragraph:
              "您可根據個人需要靈活調整 eSIM 計劃，隨時透過我們的應用程式進行充值或延長使用期限。",
          },
          {
            title: "全天候客戶支援",
            paragraph:
              "我們提供 24/7 客戶支援服務。您可隨時在應用程式內瀏覽常見問題、詳細指南，或直接聯絡我們的支援團隊。",
          },
        ],
      },
    },
    "en-US": {
      US: {
        title: "Why Choose us for yor United States eSIM",
        reasons: [
          {
            title: "Clear simple pricing",
            paragraph:
              "Our plans are fully prepaid with no roaming fees or hidden charges. No overages. Transparent pricing always.",
          },
          {
            title: "Apps are easy to use",
            paragraph:
              "Our apps put you in the driving seat. Install your eSIM, check your data balance, manage plans, and contact support—all in just a few taps.",
          },
          {
            title: "One eSIM, Multiple Trips lorem",
            paragraph:
              "Install our eSIM once and reuse it for future trips—just purchase a data package for your next destination from the app.",
          },

          {
            title: "Compatibility",
            paragraph:
              "Our eSIM works with a wide range of iOS and Android eSIM devices that support eSIM. See list of compatible devices.",
          },
          {
            title: "Fully customisable",
            paragraph:
              "You can customise your eSIM plan to suit your needs. Recharge or extend your plan anytime from our apps.",
          },
          {
            title: "24/7 Support",
            paragraph:
              "You can get help with the app anytime. You can view FAQ sections, review guides or contact support.",
          },
        ],
      },
      HK: {
        title: "Why Choose us for yor Hong Kong eSIM",
        reasons: [
          {
            title: "Clear simple pricing",
            paragraph:
              "Our plans are fully prepaid with no roaming fees or hidden charges. No overages. Transparent pricing always.",
          },
          {
            title: "Apps are easy to use",
            paragraph:
              "Our apps put you in the driving seat. Install your eSIM, check your data balance, manage plans, and contact support—all in just a few taps.",
          },
          {
            title: "One eSIM, Multiple Trips lorem",
            paragraph:
              "Install our eSIM once and reuse it for future trips—just purchase a data package for your next destination from the app.",
          },

          {
            title: "Compatibility",
            paragraph:
              "Our eSIM works with a wide range of iOS and Android eSIM devices that support eSIM. See list of compatible devices.",
          },
          {
            title: "Fully customisable",
            paragraph:
              "You can customise your eSIM plan to suit your needs. Recharge or extend your plan anytime from our apps.",
          },
          {
            title: "24/7 Support",
            paragraph:
              "You can get help with the app anytime. You can view FAQ sections, review guides or contact support.",
          },
        ],
      },
    },
  },
  TestimonialsSection: {
    "en-US": {
      US: {
        title: "Hear what travellers say about use",
        subtitle: "Your United States of America eSim features",
        testimonials: [
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
          },
        ],
      },
      HK: {
        title: "Hear what travellers say about use",
        subtitle: "Your Hong Kong eSim features",
        testimonials: [
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "When you're in Hong Kong, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "When you're in Hong Kong, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "When you're in Hong Kong, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "When you're in Hong Kong, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "When you're in Hong Kong, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "When you're in Hong Kong, stay connected to friends and family back home in South Africa.",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "When you're in Hong Kong, stay connected to friends and family back home in South Africa.",
          },
        ],
      },
    },
    "zh-HK": {
      US: {
        title: "聽聽旅人怎麼說",
        subtitle: "您的美國 eSIM 特色功能",
        testimonials: [
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "無論您身處紐約市、洛杉磯，還是美國任何地方，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "無論您身處紐約市、洛杉磯，還是美國任何地方，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "無論您身處紐約市、洛杉磯，還是美國任何地方，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "無論您身處紐約市、洛杉磯，還是美國任何地方，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "無論您身處紐約市、洛杉磯，還是美國任何地方，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "無論您身處紐約市、洛杉磯，還是美國任何地方，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment:
              "無論您身處紐約市、洛杉磯，還是美國任何地方，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
          },
        ],
      },
      HK: {
        title: "聽聽旅人怎麼說",
        subtitle: "您的香港 eSIM 特色功能",
        testimonials: [
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment: "身在香港時，隨時隨地與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment: "身在香港時，隨時隨地與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment: "身在香港時，隨時隨地與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment: "身在香港時，隨時隨地與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment: "身在香港時，隨時隨地與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment: "身在香港時，隨時隨地與遠在南非的家人及朋友保持聯繫。",
          },
          {
            userId: 0,
            userName: "Jane Foster",
            userProfile: "avatar.png",
            comment: "身在香港時，隨時隨地與遠在南非的家人及朋友保持聯繫。",
          },
        ],
      },
    },
  },
  ResourcesSection: {
    "en-US": {
      title: "Useful resources from our blog",
      resources: [
        {
          title: "25 Travel tips for the United Kingdom",
          paragraph:
            "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
        },
        {
          title: "25 Travel tips for the United Kingdom",
          paragraph:
            "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
        },
        {
          title: "25 Travel tips for the United Kingdom",
          paragraph:
            "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
        },
      ],
    },
    "zh-HK": {
      title: "我們的博客精選實用資源",
      resources: [
        {
          title: "英國旅行 25 個實用貼士",
          paragraph:
            "不論您身處倫敦、曼徹斯特還是鄉村小鎮，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
        },
        {
          title: "英國旅行 25 個實用貼士",
          paragraph:
            "不論您身處倫敦、曼徹斯特還是鄉村小鎮，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
        },
        {
          title: "英國旅行 25 個實用貼士",
          paragraph:
            "不論您身處倫敦、曼徹斯特還是鄉村小鎮，都能輕鬆與遠在南非的家人及朋友保持聯繫。",
        },
      ],
    },
  },
  AlsoLikeSection: {
    "en-US": {
      packageName: "Europe Regional Package",
      startingPrice: "From $15,99",
      href: "#",
      image: "",
      title: "You may also like",
      ctaText: "Get Package",
    },
    "zh-HK": {
      packageName: "歐洲區域套餐",
      startingPrice: "由 $15.99 起",
      href: "#",
      image: "",
      title: "您可能也會喜歡",
      ctaText: "立即購買套餐",
    },
  },
  BestValue: {
    "zh-HK": {
      HK: {
        title: "香港最佳價值之選",
        bestValueText: "20GB ・ 30 天僅需 $24.99",
        ctaText: "立即購買套餐",
        href: "#",
      },
      US: {
        title: "美國最佳價值之選",
        bestValueText: "20GB ・ 30 天僅需 $24.99",
        ctaText: "立即購買套餐",
        href: "#",
      },
    },
    "en-US": {
      HK: {
        title: "BEST VALUE FOR HONG KONG",
        bestValueText: "20GB for 30 days for $24,99",
        ctaText: "Get Package",
        href: "#",
      },
      US: {
        title: "BEST VALUE FOR THE USA",
        bestValueText: "20GB for 30 days for $24,99",
        ctaText: "Get Package",
        href: "#",
      },
    },
  },
};

export const GetContent = async (
  template: TemplateType,
  locale: string,
  regionCode: string
) => {
  const [first, second] = locale.split("-");
  const translated = `${first.toLowerCase()}-${second.toUpperCase()}`;

  switch (template) {
    case "ReasonsSection":
    case "TestimonialsSection":
    case "HeroSection":
    case "BestValue":
      return {
        success: true,
        data: HardcodeData[template][translated][regionCode.toUpperCase()],
      };
    case "AlsoLikeSection":
    case "ResourcesSection":
      return { success: true, data: HardcodeData[template][translated] };
  }

  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/${
        process.env.API_KEY
      }/content/${template}/${regionCode.toUpperCase()}/${translated}`
    );
    //"https://content.travsim.fr/api/api_3dae3af703e1ecf3dbf5209fcae1e85cd4b23d6956d25122/content/BenefitsSection/US/en-US"

    return { success: true, data: response.data };
  } catch (e) {
    if (AxiosError.isError(e)) {
      const { response } = e as AxiosError;
      console.log(`Failed to get ${response?.config.url}`);
      console.log(`Response?.data: `, response?.data);

      throw new Error("err_api_error");
    }

    console.log(`Unexpected error`, e);

    throw new Error("err_unexpected_error");
  }
};
