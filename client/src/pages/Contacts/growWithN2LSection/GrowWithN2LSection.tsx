import styles from "./GrowWithN2LSection.module.css";

import promo_arrow_rightUP from "./../../../assets/icons/promo_arrow_rightUP.svg";

const GrowWithN2LSection = () => {
  return (
    <div className={styles.interval_container}>
      <div className={styles.container}>
        <div className={styles.interval_text}>
          <h2 className={styles.interval_title}>
            Are You Ready to{" "}
            <span className={styles.highlight}>Grow with N²L?</span>
          </h2>
          <p className={styles.interval_description}>
            Join a global platform of professionals committed to meaningful
            impact. Empower yourself and others, with N²L as your gateway to a
            future of boundless potential and social good.
          </p>
          <div className={styles.container_buttons}>
            <button
              className={`${styles.promo_button} ${styles.turquoise_button}`}
            >
              <span>View N²L Algorithm</span>
              <img src={promo_arrow_rightUP} alt="arrow right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowWithN2LSection;
