import Shop_General from "./../../../assets/icons/Shop_General.svg";
import promo_arrow_right from "./../../../assets/icons/promo_arrow_right.svg";
import styles from "./HeroSection.module.css";

const PromoSection = () => {
  return (
    <section className={styles.promo_container}>
      <div className={styles.container}>
        <div className={styles.promo_content}>
          <div className={styles.promo_text}>
            <h1 className={styles.promo_title}>
              <span className={styles.highlight}>Shop</span> N²L{" "}
              <span className={styles.comingSoon}>Coming soon</span>
            </h1>

            <p className={styles.promo_description}>
              We’re working on getting gift cards and merchandise to be sold on
              N2L, and we hope to have that soon! All proceeds will go to the
              charity fund.
            </p>

            <p className={styles.promo_description}>
              If you have some valuable gifts that you’d like to donate, let us
              know through the Contact Us page.
            </p>

            <button className={styles.promo_button}>
              <span>Contact us</span>
              <img src={promo_arrow_right} alt="arrow right" />
            </button>
          </div>

          <div className={styles.promo_image}>
            <img src={Shop_General} alt="Promo visual" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
