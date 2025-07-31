import Promo_Image_001 from "./../../assets/img/Promo_Image_001.png";
import promo_arrow_right from "./../../assets/icons/promo_arrow_right.svg";
import styles from "./../../components/promo/Promo.module.css";

const Promo = () => {
  return (
    <section className={styles.promo_container}>
      <div className={styles.container}>
        <div className={styles.promo_content}>
          <div className={styles.promo_text}>
            <h1 className={styles.promo_title}>
              Welcome to N2L: A Place for
              <span className={styles.highlight}> Professional Growth</span> and
              Lasting Impact
            </h1>

            <p className={styles.promo_description}>
              Imagine a world where individuals unlock their full potential by
              seamlessly connecting their talents and skills with global
              opportunities. N²L is the first platform of its kind—a unique
              ecosystem that merges professional growth with impactful social
              contributions, all built on a foundation of transparency.
            </p>

            <p className={styles.promo_description}>
              Our mission is clear: to enable
              <span className={styles.highlight}> financial freedom</span> and
              foster
              <span className={styles.highlight}> professional growth</span> for
              individuals everywhere. Through collective collaboration and a
              robust,
              <span className={styles.highlight}> transparent network</span>,
              N²L redefines how professionals and communities interact and grow
              together.
            </p>

            <button className={styles.promo_button}>
              <span>Join N2L Now</span>
              <img src={promo_arrow_right} alt="arrow right" />
            </button>
          </div>

          <div className={styles.promo_image}>
            <img src={Promo_Image_001} alt="Promo visual" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
