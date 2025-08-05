import styles from "./PromoSection3.module.css";

import promoSection3_interval from "./../../assets/icons/promoSection3_interval.svg";
import promoSection3_Check from "./../../assets/icons/promoSection3_Check.svg";
import Promo_Decorative_Element_001 from "./../../assets/icons/Promo_Decorative_Element_001.svg";
import Promo_Decorative_Element_002 from "./../../assets/icons/Promo_Decorative_Element_002.svg";
import Promo_Ellipse_003 from "./../../assets/icons/Promo_Ellipse_003.svg";

const PromoSection3 = () => {
  return (
    <section className={styles.membership_section}>
      <div className={styles.container}>
        <img className={styles.promo_Ellipse_003} src={Promo_Ellipse_003}></img>
        <img
          className={styles.promo_Decorative_Element_001}
          src={Promo_Decorative_Element_001}
        ></img>
        <img
          className={styles.promo_Decorative_Element_002}
          src={Promo_Decorative_Element_002}
        ></img>
        <div className={styles.membership_header}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Membership</span> Tiers
          </h2>
          <p className={styles.description}>
            Choose the role that aligns with your goals and join a network that
            values your expertise and amplifies your impact:
          </p>
        </div>
        <div className={styles.row}>
          <div className={styles.blockShadow}>
            <div className={styles.block}>
              <div className={styles.title1}>
                <h3>Patron</h3>
                <p>Engage in discussions and volunteer activities.</p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title2}>
                <h3>Free</h3>
                <p>
                  <span className={styles.highlight}>Target audience:</span>{" "}
                  General Public
                </p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title3}>
                <h3>Benefits:</h3>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Community forums
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Free events
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Volunteer opportunities
                </p>
              </div>
            </div>
          </div>
          <div className={styles.blockShadow}>
            <div className={styles.block}>
              <div className={styles.title1}>
                <h3>Honorary Ally</h3>
                <p>Provide feedback, participate in local initiatives.</p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title2}>
                <h3>Covered by SXS</h3>
                <p>
                  <span className={styles.highlight}>Target audience:</span>{" "}
                  Local Donors
                </p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title3}>
                <h3>Benefits:</h3>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Early access to regional events
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Local Supporter recognition
                </p>
              </div>
            </div>
          </div>
          <div className={styles.blockShadow}>
            <div className={styles.block}>
              <div className={styles.title1}>
                <h3>Local Ally</h3>
                <p>Contribute to local decisions, attend advisory sessions.</p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title2}>
                <h3>
                  $2.95 <span className={styles.lowlight}>/ month</span>
                </h3>
                <p>
                  <span className={styles.highlight}>Target audience:</span>{" "}
                  Donors with Local Focus
                </p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title3}>
                <h3>Benefits:</h3>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Voting rights on local projects
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Exclusive event access
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Discounts
                </p>
              </div>
            </div>
          </div>
          <div className={styles.blockShadow}>
            <div className={styles.block}>
              <div className={styles.title1}>
                <h3>Global Ally</h3>
                <p>Shape global priorities.</p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title2}>
                <h3>
                  $9.95 <span className={styles.lowlight}>/ month</span>
                </h3>
                <p>
                  <span className={styles.highlight}>Target audience:</span>{" "}
                  Global Philanthropists
                </p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title3}>
                <h3>Benefits:</h3>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Global voting rights
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  VIP event access
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Updates on international initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.blockShadowWide}>
            <div className={styles.blockWide}>
              <div className={styles.title1}>
                <h3>Local Executive Ally</h3>
                <p>Strategize within local projects.</p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title2}>
                <h3>
                  $24.95 <span className={styles.lowlight}>/ month</span>
                </h3>
                <p>
                  <span className={styles.highlight}>Target audience:</span>{" "}
                  Local Leaders
                </p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title3}>
                <h3>Benefits:</h3>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Leadership opportunities
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Executive insights
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Roundtable access
                </p>
              </div>
            </div>
          </div>
          <div className={styles.blockShadowWide}>
            <div className={styles.blockWide}>
              <div className={styles.title1}>
                <h3>Global Executive Ally</h3>
                <p>Mentor members, shape global strategies.</p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title2}>
                <h3>
                  $99.95 <span className={styles.lowlight}>/ month</span>
                </h3>
                <p>
                  <span className={styles.highlight}>Target audience:</span>{" "}
                  High-Influence Global Leaders
                </p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title3}>
                <h3>Benefits:</h3>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Access to N²L leadership
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Annual summits
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Personalized support
                </p>
              </div>
            </div>
          </div>
          <div className={styles.blockShadowWide}>
            <div className={styles.blockWide}>
              <div className={styles.title1}>
                <h3>Corporate Founder</h3>
                <p>Lead initiatives, engage employees in N²L activities.</p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title2}>
                <h3>Custom Pricing</h3>
                <p>
                  <span className={styles.highlight}>Target audience:</span>{" "}
                  Corporate Partners
                </p>
              </div>
              <img
                className={styles.promoSection3_interval}
                src={promoSection3_interval}
              ></img>
              <div className={styles.title3}>
                <h3>Benefits:</h3>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Branding
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Exclusive sponsorships
                </p>
                <p>
                  <img src={promoSection3_Check} alt="" />
                  Custom CSR projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection3;
