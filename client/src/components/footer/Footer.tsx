import styles from "./Footer.module.css";
import footer_line from "./../../assets/icons/footer_line.svg";
import footer_social_icon_1 from "./../../assets/icons/footer_social_icon_1.svg";
import footer_social_icon_2 from "./../../assets/icons/footer_social_icon_2.svg";
import footer_social_icon_3 from "./../../assets/icons/footer_social_icon_3.svg";
import footer_social_icon_4 from "./../../assets/icons/footer_social_icon_4.svg";

import Logo from "./../../assets/icons/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__up}>
          <img className={styles.Logo} src={Logo}></img>
          <div className={styles.footer__menu__bar_up}>
            <span>Ways to take part</span>
            <span>About SXS</span>
            <span>SxS Merch</span>
            <span>The Board</span>
            <span>The Board</span>
            <span>Contact us</span>
          </div>
        </div>
        <img className={styles.footer__line} src={footer_line}></img>
        <div className={styles.footer__container__down}>
          <div className={styles.footer__menu__bar_down}>
            <span>© 2024 N2L All rights reserved</span>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
          <div className={styles.footer__container__social__icons}>
            <img className={styles.Logo} src={footer_social_icon_1}></img>
            <img className={styles.Logo} src={footer_social_icon_2}></img>
            <img className={styles.Logo} src={footer_social_icon_3}></img>
            <img className={styles.Logo} src={footer_social_icon_4}></img>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
