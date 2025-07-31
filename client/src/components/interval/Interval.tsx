import styles from "./Interval.module.css";
import Interval_Card from "./../../assets/icons/Interval_Card.svg";
import Interval_Graph from "./../../assets/icons/Interval_Graph.svg";
import Interval_Handshake from "./../../assets/icons/Interval_Handshake.svg";
import Promo_Ellipse_001 from "./../../assets/icons/Promo_Ellipse_001.svg";
import Promo_Ellipse_002 from "./../../assets/icons/Promo_Ellipse_002.svg";

const Interval = () => {
  return (
    <div className={styles.interval_container}>
      <div className={styles.container}>
        <img className={styles.left_ellipse} src={Promo_Ellipse_002}></img>
        <div className={styles.interval_text}>
          <h2 className={styles.interval_title}>
            Our <span className={styles.highlight}>Vision</span>
          </h2>
          <p className={styles.interval_description}>
            As part of the Mesaverse, N²L is a professional and philanthropic
            community where success is measured by collective growth and
            meaningful impact.
          </p>
        </div>
        <div className={styles.interval_advantage}>
          <div className={styles.interval_advantage_container}>
            <img src={Interval_Handshake}></img>
            <span>
              Build a collaborative network that supports individuals and
              communities.
            </span>
          </div>
          <div className={styles.interval_advantage_container}>
            <img src={Interval_Card}></img>
            <span>Enable financial freedom.</span>
          </div>
          <div className={styles.interval_advantage_container}>
            <img src={Interval_Graph}></img>
            <span>Foster professional growth.</span>
          </div>
        </div>
        <img className={styles.right_ellipse} src={Promo_Ellipse_001}></img>
      </div>
    </div>
  );
};

export default Interval;
