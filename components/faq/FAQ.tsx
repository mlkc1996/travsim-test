"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./FAQ.module.scss";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { useState } from "react";

const data = {
  title: "常見問題解答",
  faqs: [
    {
      question: "這個香港的eSIM可以在英國使用嗎？",
      answer: "不可以，除非您在英國的使用情況與香港相同。",
    },
    {
      question: "我該如何啟用我的eSIM？",
      answer:
        "購買後，您會收到一封電子郵件，裡面有指向應用商店的鏈接，按照畫面上的指示安裝eSIM。",
    },
    {
      question: "我多久能收到我的eSIM？",
      answer: "您會在付款後立即收到eSIM。",
    },
    {
      question: "我如何查看我的使用情況或餘額？",
      answer:
        "您可以通過我們的應用程序查看使用情況和數據餘額，只需前往mySIMs標籤即可。",
    },
    {
      question: "我能隨時充值我的eSIM嗎？",
      answer: "是的，您可以在香港旅遊期間隨時進行充值，操作簡單方便。",
    },
    {
      question: "我可以使用eSIM進行通話和發送短信嗎？",
      answer:
        "我們的eSIM僅提供數據服務，您可以使用WhatsApp等應用進行通話和發送短信。",
    },
    {
      question: "我需要為不同的目的地購買多個eSIM嗎？",
      answer:
        "不需要，您可以在一個eSIM上安裝多個套餐，方便您隨時加載所需的數據。",
    },
    {
      question: "我可以為其他人購買eSIM嗎？",
      answer: "是的，您可以為朋友或家人購買eSIM，購買後可以輕鬆分享。",
    },
    {
      question: "哪些安卓和iOS設備與eSIM兼容？",
      answer: "我們提供一份兼容eSIM的設備清單，您可以查看這份詳細的清單。",
    },
    {
      question: "如果我需要幫助，該怎麼辦？",
      answer:
        "您可以在應用內獲得幫助，點擊按鈕即可與客服團隊聊天，也可以查看常見問題的知識庫。",
    },
  ],
};

const FAQRow = ({ question, answer }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.faq} ${styles.open}`}>
      <div className="flex justify-between items-center">
        <p>{question}</p>
        <button
          onClick={(e) => {
            setOpen((prev) => prev);
          }}
        >
          <Icon icon={open ? "minus" : "plus"} />
        </button>
      </div>
      {open && <p>{answer}</p>}
    </div>
  );
};

export const FAQ = ({ title = data.title, faqs = data.faqs }: any) => {
  return (
    <SectionContainer>
      <h3 className="">{title}</h3>
      <div className={styles.faqContainer}>
        {faqs.map(({ question, answer }: any, index: number) => {
          <FAQRow question={question} answer={answer} />;
        })}
      </div>
    </SectionContainer>
  );
};
