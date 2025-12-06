"use client";

import { Icon } from "@/shared/UI/icon/Icon";
import styles from "./FAQ.module.scss";
import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import { useState } from "react";

const data = {
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

const FAQRow = ({ question, answer }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.faq}`}>
      <div className="flex justify-between items-center">
        <p className="text-level-normal-100 text-font-x-bold">{question}</p>
        <button
          onClick={(e) => {
            setOpen((prev) => !prev);
          }}
        >
          <Icon icon={open ? "minus" : "plus"} />
        </button>
      </div>
      <div className={`${styles.answer} ${open ? styles.open : ""}`}>
        <p className="text-level-normal-100 text-font-medium">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ = ({ title = data.title, faqs = data.faqs }: any) => {
  return (
    <SectionContainer className={`${styles.container} container-px-300`}>
      <h3 className="text-level-header text-font-x-bold">{title}</h3>
      <div className={styles.faqContainer}>
        {faqs.map(({ question, answer }: any, index: number) => {
          return <FAQRow key={index} question={question} answer={answer} />;
        })}
      </div>
    </SectionContainer>
  );
};
