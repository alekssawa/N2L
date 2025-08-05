import styles from "./PromoSection4.module.css";

import Realm_Icon_001 from "./../../assets/icons/Realm_Icon_001.svg";
import Realm_Icon_002 from "./../../assets/icons/Realm_Icon_002.svg";
import Realm_Icon_003 from "./../../assets/icons/Realm_Icon_003.svg";

import promo_arrow_right from "./../../assets/icons/promo_arrow_right.svg";

import Promo_Image_004 from "./../../assets/icons/Promo_Image_004.svg";

import Promo_Rily_Ellipse_001 from "./../../assets/icons/Promo_Rily_Ellipse_001.svg";
import Promo_Rily_Ellipse_002 from "./../../assets/icons/Promo_Rily_Ellipse_002.svg";
import Promo_Rily_Ellipse_003 from "./../../assets/icons/Promo_Rily_Ellipse_003.svg";

import Promo_Ellipse_004 from "./../../assets/icons/Promo_Ellipse_004.svg";
import Promo_Ellipse_005 from "./../../assets/icons/Promo_Ellipse_005.svg";
import Promo_Ellipse_006 from "./../../assets/icons/Promo_Ellipse_006.svg";
import Promo_Ellipse_007 from "./../../assets/icons/Promo_Ellipse_007.svg";

const PromoSection4 = () => {
  return (
    <section className={styles.realm_section}>
      <div className={styles.container}>
        <img className={styles.promo_Ellipse_004} src={Promo_Ellipse_004} />
        <img className={styles.promo_Ellipse_005} src={Promo_Ellipse_005} />
        <img className={styles.promo_Ellipse_006} src={Promo_Ellipse_006} />
        <img className={styles.promo_Ellipse_007} src={Promo_Ellipse_007} />
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
        <img className={styles.ellipse1} src={Promo_Rily_Ellipse_001} />
        <div className={styles.realm_picture_container}>
          <img src={Promo_Image_004} />
          <div className={styles.realm_picture_background_container}>
            <img className={styles.ellipse2} src={Promo_Rily_Ellipse_002} />
            <img className={styles.ellipse3} src={Promo_Rily_Ellipse_003} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection4;
