import { AlsoLike } from "@/components/alsoLike/AlsoLike";
import { BenefitsSection } from "@/components/benefitSection/BenefitSection";
import { BestValue } from "@/components/bestValue/BestValue";
import { Compare } from "@/components/compare/Compare";
import { FAQ } from "@/components/faq/FAQ";
import { Features } from "@/components/features/Features";
import { GetApp } from "@/components/getApp/GetApp";
import { GetStarted } from "@/components/getStarted/GetStarted";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { Reason } from "@/components/reason/Reason";
import { Resources } from "@/components/resources/Resources";
import { Testimonial } from "@/components/testimonial/Testimonial";

export const dynamic = "force-dynamic";

const HeroSectionData = {
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
    images: [`${process.env.IMAGE_PATH}/productLargeImg.jpg`, "", "", "", ""],
  },
};

const BenefitsSectionData = {
  title: "Use your eSIM for United States Travel to:",
  accordions: [
    {
      icon: "https://content.travsim.fr/api/media/file/1763721025480.svg",
      title: "Stay Connected Easily",
      paragraph:
        "Keep in touch with family and friends back home through communication apps while exploring vibrant cities like New York and San Francisco.",
      image: "https://content.travsim.fr/api/media/file/1763717067513.png",
      apps: [
        {
          iconId: "WhatsApp",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696770786.svg",
          text: "Clear calls every time",
        },
        {
          iconId: "Telegram",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696859034.svg",
          text: "Seamless video calls",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721109100.svg",
      title: "Navigate with Confidence",
      paragraph:
        "Find your way around bustling streets and scenic routes using your favorite navigation tools while enjoying attractions in Miami and Los Angeles.",
      image: "https://content.travsim.fr/api/media/file/1763716957071.png",
      apps: [
        {
          iconId: "GoogleMaps",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697040641.png",
          text: "Easily explore new places",
        },
        {
          iconId: "Apple Maps",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697503236.png",
          text: "No more getting lost",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721086994.svg",
      title: "Share Your Adventures",
      paragraph:
        "Share your exciting experiences on social media with friends and family while visiting iconic sites in Washington D.C. and Chicago.",
      image: "https://content.travsim.fr/api/media/file/1763716994707.png",
      apps: [
        {
          iconId: "Instagram",
          iconUrl: "",
          text: "Post your favorite moments",
        },
        {
          iconId: "YouTube",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696976692.svg",
          text: "Share videos of fun times",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721134222.svg",
      title: "Stream On-the-Go",
      paragraph:
        "Relax and enjoy your favorite shows and music while unwinding in your hotel or during a scenic drive through the countryside.",
      image: "https://content.travsim.fr/api/media/file/1763717211772.png",
      apps: [
        {
          iconId: "Netflix",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764696170131.svg",
          text: "Watch your favorite series",
        },
        {
          iconId: "Spotify",
          iconUrl: "",
          text: "Listen to top artists",
        },
      ],
    },
    {
      icon: "https://content.travsim.fr/api/media/file/1763721062339.svg",
      title: "Hassle-Free Transport",
      paragraph:
        "Use your preferred ride-hailing apps for easy transport while exploring the sights of cities like Seattle and Austin.",
      image: "https://content.travsim.fr/api/media/file/1763716591053.png",
      apps: [
        {
          iconId: "Uber",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764916778931.png",
          text: "Get around with ease",
        },
        {
          iconId: "grab",
          iconUrl:
            "https://content.travsim.fr/api/feature-media/file/1764697775939.png",
          text: "Convenient rides at your fingertips",
        },
      ],
    },
  ],
};

const FeaturesData = {
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

const CompareData = {
  title: "Our eSIM vs. the Competition",
  headers: [
    "OUR ESIM",
    "OTHER ESIM PROVIDERS",
    "WIFI HOTSPOTS",
    "INTERNATIONAL ROAMING",
  ],
  features: [
    {
      title: "Low usage cost",
      our: "Yes",
      other: "Yes",
      wifi: "Yes",
      roaming: "No",
    },
    {
      title: "No activation fees",
      our: "Yes",
      other: "Yes",
      wifi: "Yes",
      roaming: "No",
    },
    {
      title: "No hidden fees",
      our: "Yes",
      other: "Yes",
      wifi: "Yes",
      roaming: "No",
    },
    {
      title: "No roaming charges",
      our: "Yes",
      other: "Yes",
      wifi: "Yes",
      roaming: "No",
    },
    {
      title: "Nationwide coverage",
      our: "Yes",
      other: "Yes",
      wifi: "No",
      roaming: "No",
    },
    {
      title: "Fast internet speeds",
      our: "Yes",
      other: "Yes",
      wifi: "No",
      roaming: "No",
    },
    {
      title: "No throttling data speeds",
      our: "Yes",
      other: "No",
      wifi: "No",
      roaming: "Yes",
    },
    {
      title: "One eSIM. Multiple destinations",
      our: "Yes",
      other: "No",
      wifi: "No",
      roaming: "No",
    },
    {
      title: "No log-in process for usage",
      our: "Yes",
      other: "Yes",
      wifi: "No",
      roaming: "Yes",
    },
    {
      title: "Can be used anywhere",
      our: "Yes",
      other: "Yes",
      wifi: "No",
      roaming: "No",
    },
  ],
};

const ReasonData = {
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
};

const FAQData = {
  title: "Frequently Asked Questions ",
  faqs: [
    {
      question: "Does this eSIM work in the United States?",
      answer:
        "No, this eSIM will not work in the United States unless your language is English (US).",
    },
    {
      question: "How do I activate my eSIM?",
      answer:
        "After purchase, you’ll receive an email with a link to download the app. Follow the on-screen instructions to install your eSIM.",
    },
    {
      question: "How soon will I receive my eSIM?",
      answer:
        "You’ll get your eSIM instantly after completing your payment, ready for use on your travels.",
    },
    {
      question: "How can I monitor my usage or check my balance?",
      answer:
        "You can track your usage and balance through our app. Just go to the mySIMs section for all your package details.",
    },
    {
      question: "Can I recharge my eSIM during my trip to the United States?",
      answer:
        "Yes, you can easily recharge your eSIM at any point during your trip, with just a few clicks.",
    },
    {
      question: "Can I make calls or send texts with the eSIM?",
      answer:
        "Our eSIMs provide mobile data only. To make calls or send texts, you can use apps like WhatsApp as you would at home.",
    },
    {
      question: "Do I need multiple eSIMs for different destinations?",
      answer:
        "No need for multiple eSIMs! You can install various packages on one eSIM for your different travel locations.",
    },
    {
      question: "Can I buy an eSIM for someone else?",
      answer:
        "Absolutely! You can purchase eSIMs for friends or family and share them easily after buying.",
    },
    {
      question: "Which Android and iOS devices are compatible with eSIMs?",
      answer:
        "We have a complete list of compatible devices available. Check our website for details on which devices work with eSIMs.",
    },
    {
      question: "How can I get help if I need it?",
      answer:
        "For assistance, use our app to chat with customer support or visit our knowledge base for FAQs and troubleshooting tips.",
    },
  ],
};

const TestimonialData = {
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
};

const GetStartedData = {
  title: "How To get Started with United States eSIM",
  steps: [
    {
      icon: "",
      title: "Choose Your eSIM Package",
      paragraph:
        "Select a United States eSIM package that fits your travel needs. You’ll find various secure payment methods to finalize your purchase with ease.",
      image: "https://content.travsim.fr/api/media/file/1763711730264.png",
    },
    {
      icon: "",
      title: "Install Your eSIM",
      paragraph:
        "Once you've purchased your eSIM for United States Vacation, check your email for a smart link. This link leads you to the app store for a guided installation process, making it simple to set up.",
      image: "https://content.travsim.fr/api/media/file/1763711814005.png",
    },
    {
      icon: "",
      title: "Start Using Data",
      paragraph:
        "After installing your eSIM, you can immediately start using your data. Enjoy sharing your holiday moments, connecting with friends and family, and streaming your favorite shows effortlessly.",
      image: "https://content.travsim.fr/api/media/file/1763711843266.png",
    },
  ],
};

const ResourcesData = {
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
};

type Props = {
  params: Promise<{ locale: string; regionCode: string }>;
};

export default async function Home({}: Props) {
  return (
    <>
      <HeroSection {...HeroSectionData} />
      <BenefitsSection {...BenefitsSectionData} />
      <Features {...FeaturesData} />
      <BestValue
        title="BEST VALUE FOR THE USA"
        bestValueText="20GB for 30 days for $24,99"
        ctaText="Get Package"
        href="#"
      />
      <Compare {...CompareData} />
      <Reason {...ReasonData} />
      <GetStarted {...GetStartedData} />
      <AlsoLike
        image={""}
        packageName={"Europe Regional Package"}
        startingPrice={"From $15,99"}
        ctaText={"Get Package"}
        href={"#"}
        title={"You may also like"}
      />
      <FAQ {...FAQData} />
      <Testimonial {...TestimonialData} />
      <Resources {...ResourcesData} />
      <GetApp />
    </>
  );
}
