import styles from "./Header.module.css";

import Logo from "./../../assets/icons/Logo.svg";
import MenuIcon from "./../../assets/icons/Menu Icon.svg";
import General_Icon from "./../../assets/icons/General_Icon.svg";
import Algorithm_Icon from "./../../assets/icons/Algorithm_Icon.svg";
import Shop_Icon from "./../../assets/icons/Shop_Icon.svg";
import Contact_Icon from "./../../assets/icons/Contact_Icon.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.Logo}>
          <img src={Logo} />
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            <img src={MenuIcon} />
          </button>
          <div className={styles.dropdown__content}>
            <a href="#">
              <img src={General_Icon} />
              General
            </a>
            <a href="#">
              <img src={Algorithm_Icon} />
              Algorithm
            </a>
            <a className={styles.highlight} href="#">
              <img src={Shop_Icon} />
              Shop (coming soon)
            </a>
            <a href="#">
              <img src={Contact_Icon} />
              Contact us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
