"use client";

import { faqData } from "@/data/faqData";
import { faqStyles } from "@/styles/sections/faq";
import { useState } from "react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq-section" className={faqStyles.section}>
      <div className={faqStyles.wrapper}>
        <div className={faqStyles.headerContainer}>
          <div className={faqStyles.pillWrapper}>
            <div className={faqStyles.pillLineBar} />
            <span className={faqStyles.pillText}>
              {faqData.header.pillText}
            </span>
          </div>
          <h2 className={faqStyles.mainHeading}>
            {faqData.header.mainHeading}
          </h2>
          <p className={faqStyles.subHeading}>{faqData.header.subHeading}</p>
        </div>

        <div className={faqStyles.listContainer}>
          {faqData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`${faqStyles.itemContainer} ${isOpen ? faqStyles.itemContainerOpen : faqStyles.itemContainerClosed}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={faqStyles.questionBtn}
                >
                  <span
                    className={`${faqStyles.questionText} ${isOpen ? faqStyles.questionTextOpen : faqStyles.questionTextClosed}`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`${faqStyles.iconBox} ${isOpen ? faqStyles.iconBoxOpen : faqStyles.iconBoxClosed}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={faqStyles.answerContainer}
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className={`${faqStyles.answerText} ${isOpen ? faqStyles.answerTextOpen : faqStyles.answerTextClosed}`}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
