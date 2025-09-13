import styles from "./CommunitySection.module.css";

import Realm_Icon_001 from "./../../../assets/icons/Realm_Icon_001.svg";
import Realm_Icon_002 from "./../../../assets/icons/Realm_Icon_002.svg";
import Realm_Icon_003 from "./../../../assets/icons/Realm_Icon_003.svg";

import promo_arrow_right from "./../../../assets/icons/promo_arrow_right.svg";

const PromoSection4 = () => {
  return (
    <section className={styles.realm_section}>
      <div className={styles.container}>
        <div className={styles.realm_header}>
          <h2 className={styles.title}>
            Take Over with a <span className={styles.highlight}>Realm</span>
          </h2>
          <p className={styles.description}>
            Establish your own N²L Realm to lead regional or thematic
            communities. Realms empower members to:
          </p>
          <div className={styles.realm_advantage}>
            <div className={styles.realm_advantage_container}>
              <img src={Realm_Icon_002}></img>
              <span>Spearhead innovative projects.</span>
            </div>
            <div className={styles.realm_advantage_container}>
              <img src={Realm_Icon_001}></img>
              <span>Build collaborations.</span>
            </div>
            <div className={styles.realm_advantage_container}>
              <img src={Realm_Icon_003}></img>
              <span>Drive collective success.</span>
            </div>
          </div>

          <button className={styles.realm_button}>
            <span>Join N2L Now</span>
            <img src={promo_arrow_right} alt="arrow right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection4;
