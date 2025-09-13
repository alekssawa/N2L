import Shop_giftCard_001 from "./../../../assets/icons/Shop_giftCard_001.svg";
import Shop_merchCard_001 from "./../../../assets/icons/Shop_merchCard_001.svg";

import styles from "./GiftShopSection.module.css";

const GiftShopSection = () => {
  return (
    <section className={styles.ecosystem_section}>
      <div className={styles.container}>
        <div className={styles.ecosystem_content}>
          <div className={styles.ecosystem_cards}>
            <div className={styles.cardBlock}>
              <h2>SxS Gift Cards</h2>
              <div className={styles.card}>
                <img
                  className={styles.cardImage}
                  src={Shop_giftCard_001}
                  alt="Marketplace"
                />
                <div className={styles.cardText}>
                  <h3>
                    Gift Card{" "}
                    <span className={styles.comingSoon}>Coming soon</span>
                  </h3>
                  <p>
                    Offer the gift of opportunity with N²L gift cards, allowing
                    recipients to access premium memberships or shop items.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.cardBlock}>
              <h2>SxS Gift Shop</h2>
              <div className={styles.card}>
                <img
                  className={styles.cardImage}
                  src={Shop_merchCard_001}
                  alt="Marketplace"
                />
                <div className={styles.cardText}>
                  <h3>
                    Merch <span className={styles.comingSoon}>Coming soon</span>
                  </h3>
                  <p>
                    Discover branded merchandise that embodies N²L’s values.
                    Wear your commitment to growth, impact, and community
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftShopSection;
