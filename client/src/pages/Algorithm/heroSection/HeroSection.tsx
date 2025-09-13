import promo_arrow_rightUp from "./../../../assets/icons/promo_arrow_rightUp.svg";
import algorithm_line from "./../../../assets/icons/Algorithm_line.svg";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.ecosystem_section}>
      <div className={styles.container}>
        <div className={styles.ecosystem_content}>
          <div className={styles.ecosystem_header}>
            <h2 className={styles.title}>
              The N²L <span className={styles.highlight}>Algorithm</span>
            </h2>
            <p className={styles.description}>
              Revenue allocation supports sustainable growth, structured as
              follows
            </p>

            <button className={styles.cta_button}>
              <span>Learn more</span>
              <img src={promo_arrow_rightUp} alt="arrow" />
            </button>

            <div className={styles.algorithm_container}>
              <div className={styles.algorithm_box}>
                <h3 className={styles.algorithm_box_percent}>10%</h3>
                <img
                  className={styles.algorithm_line}
                  src={algorithm_line}
                ></img>
                <h3 className={styles.algorithm_box_title}>
                  Charitable initiatives aligned with SXS.
                </h3>
              </div>
              <div className={styles.algorithm_box}>
                <h3 className={styles.algorithm_box_percent}>30%</h3>
                <img
                  className={styles.algorithm_line}
                  src={algorithm_line}
                ></img>
                <h3 className={styles.algorithm_box_title}>
                  Platform development and resources.
                </h3>
              </div>
              <div className={styles.algorithm_box}>
                <h3 className={styles.algorithm_box_percent}>30%</h3>
                <img
                  className={styles.algorithm_line}
                  src={algorithm_line}
                ></img>
                <h3 className={styles.algorithm_box_title}>
                  Member incentives and rewards.
                </h3>
              </div>
              <div className={styles.algorithm_box}>
                <h3 className={styles.algorithm_box_percent}>30%</h3>
                <img
                  className={styles.algorithm_line}
                  src={algorithm_line}
                ></img>
                <h3 className={styles.algorithm_box_title}>
                  Operational costs and support.
                </h3>
              </div>
            </div>
            <h2 className={styles.algorithm_Formula}>
              <span className={styles.highlight}>Formula:</span> Gross Profit
              (GP) = INVOICE - COST
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
