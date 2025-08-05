import promo_arrow_rightUp from "./../../assets/icons/promo_arrow_rightUp.svg";
import promo_2_cart_image_1 from "./../../assets/img/promo_2_cart_image_1.png";
import promo_2_cart_image_2 from "./../../assets/img/promo_2_cart_image_2.png";

import styles from "./PromoSection2.module.css";

const PromoSection2 = () => {
  return (
    <section className={styles.ecosystem_section}>
      <div className={styles.container}>
        <div className={styles.ecosystem_content}>
          <div className={styles.ecosystem_header}>
            <h2 className={styles.title}>
              <span className={styles.highlight}>Key Components</span> of the
              N²L Ecosystem
            </h2>
            <p className={styles.description}>
              As part of the Mesaverse, N²L is a professional and philanthropic
              community where success is measured by collective growth and
              meaningful impact.
            </p>

            <button className={styles.cta_button}>
              <span>Join the Network</span>
              <img src={promo_arrow_rightUp} alt="arrow" />
            </button>
          </div>

          <div className={styles.ecosystem_cards}>
            <div className={styles.card}>
              <img src={promo_2_cart_image_1} alt="Marketplace" />
              <h3>A Thriving Marketplace</h3>
              <p>
                Our ecosystem connects talented professionals with global
                audiences, helping individuals share their skills, gain
                financial independence, and contribute to a larger mission.
              </p>
            </div>
            <div className={styles.card}>
              <img src={promo_2_cart_image_2} alt="Marketplace" />
              <h3>Commitment to Social Good</h3>
              <p>
                In alignment with SXS, N²L contributes 10% of gross profits to
                charitable initiatives, channeling resources toward impactful
                causes worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection2;
