import styles from "./GetInvolvedSection.module.css";

import promo_arrow_rightUP from "./../../../assets/icons/promo_arrow_rightUP.svg";

const GetInvolvedSection = () => {
  return (
    <div className={styles.interval_container}>
      <div className={styles.container}>
        <div className={styles.interval_text}>
          <h2 className={styles.interval_title}>
            Ways to <span className={styles.highlight}>Get Involved</span>
          </h2>
          <p className={styles.interval_focus_description}>
            Join as a Professional
          </p>

          <p className={styles.interval_description}>
            Start showcasing your expertise and building your professional
            network. With N²L, your growth contributes directly to meaningful
            change.
          </p>
          <div className={styles.container_buttons}>
            <button
              className={`${styles.promo_button} ${styles.turquoise_button}`}
            >
              <span>Join N²L</span>
              <img src={promo_arrow_rightUP} alt="arrow right" />
            </button>
            <button className={`${styles.promo_button} ${styles.white_button}`}>
              <span>Learn more</span>
              <img src={promo_arrow_rightUP} alt="arrow right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedSection;
