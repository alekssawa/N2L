import { useState } from "react";

import styles from "./PromoSection5.module.css";

const PromoSection5 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.FAQ_section}>
      <div className={styles.container}>
        <div className={styles.FAQ_header}>
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </h2>
        </div>
        <div className={styles.FAQ_container}>
          {[
            {
              question: "1. What are the goals of your charity organization?",
              answer:
                "Our organization aims to improve the quality of life for vulnerable populations by providing access to education, healthcare, food, and other essential resources.",
            },
            {
              question: "2. How do you plan to achieve those goals?",
              answer:
                "We achieve these goals through partnerships, volunteer programs, and direct outreach.",
            },
            {
              question:
                "3. What is your target audience for the charity organization?",
              answer:
                "Our target audience includes underprivileged children, low-income families, and rural communities.",
            },
            {
              question:
                "4. How do you measure the impact of your charity work?",
              answer:
                "We measure our impact through key indicators such as the number of people reached, improvement in education and health outcomes, and community feedback. We also conduct regular evaluations to assess program effectiveness.",
            },
            {
              question:
                "5. How do you communicate the impact of your charity work to stakeholders?",
              answer:
                "We share our impact through annual reports, newsletters, social media, and meetings with donors and partners. We highlight success stories and use data to show progress and transparency.",
            },
            {
              question:
                "6. What challenges have you faced in achieving your charity organization's goals?",
              answer:
                "Some challenges include limited funding, reaching remote communities, and maintaining long-term engagement. We address these by building local partnerships and adapting our strategies as needed.",
            },
            {
              question:
                "7. How do you ensure transparency in your charity organization's operations?",
              answer:
                "We ensure transparency through regular financial audits, public reporting, and open communication with donors and beneficiaries. We also publish annual reports detailing our activities and spending.",
            },
            {
              question:
                "8. What strategies do you use to engage the community in your charity initiatives?",
              answer:
                "We involve communities through local events, workshops, feedback sessions, and volunteer programs. We believe in empowering local voices to shape and support our initiatives.",
            },
            {
              question:
                "9. What future projects do you have in mind for your charity organization?",
              answer:
                "We plan to expand our educational programs, launch mobile healthcare units, and develop sustainable food initiatives to reach more vulnerable populations in rural areas.",
            },
            {
              question:
                "10. How do you involve volunteers in your charity initiatives?",
              answer:
                "We provide volunteers with training, meaningful roles, and the opportunity to directly engage with communities. Their skills and passion are essential to the success of our programs.",
            }
          ].map((item, i) => (
            <div key={i} className={styles.question_container}>
              <h2
                className={`${styles.question} ${
                  openIndex === i ? styles.open : ""
                }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.question}
              </h2>
              <div
                className={`${styles.answerWrapper} ${
                  openIndex === i ? styles.open : ""
                }`}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection5;
