import Contacts_General from "./../../../assets/icons/Contacts_General.svg";
import promo_arrow_rightUP from "./../../../assets/icons/promo_arrow_rightUP.svg";

import styles from "./ContactFormSection.module.css";

const ContactFormSection = () => {
  return (
    <section className={styles.promo_container}>
      <div className={styles.container}>
        <div className={styles.promo_content}>
          <form className={styles.contact_form}>
            <h1 className={styles.promo_title}>Contact us</h1>

            <p className={styles.promo_description}>
              Reach out for personalized assistance or to learn more about
              partnership and support opportunities.
            </p>

            <label>
              <span className={styles.labelText}>Name</span>
              <input type="text" placeholder="Type name" />
            </label>
            <label>
              <span className={styles.labelText}>Email</span>
              <input type="email" placeholder="Type email" />
            </label>
            <label>
              <span className={styles.labelText}>Phone</span>
              <input type="tel" placeholder="+" />
            </label>
            <label>
              <span className={styles.labelText}>Message</span>
              <textarea placeholder="Type Message" rows={4} />
            </label>

            <button className={styles.promo_button}>
              <span>Send</span>
              <img src={promo_arrow_rightUP} alt="arrow right" />
            </button>
          </form>

          <div className={styles.promo_image}>
            <img src={Contacts_General} alt="Promo visual" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
