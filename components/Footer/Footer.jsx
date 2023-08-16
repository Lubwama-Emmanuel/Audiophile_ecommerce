import styles from "./Footer.module.scss";
import Image from "next/image";
import { Pages } from "../Header/Header";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__first}>
          <Image src="images/audiophile-logo.svg" width={143} height={25} />
          <Pages />
        </div>
        <div className={styles.footer__second}>
          <div>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className={styles.social__links}>
            <svg className={styles.logo_svg}>
              <use xlinkHref="images/sprite.svg#icon-facebook"></use>
            </svg>
            <svg className={styles.logo_svg}>
              <use xlinkHref="images/sprite.svg#icon-twitter"></use>
            </svg>
            <svg className={styles.logo_svg}>
              <use xlinkHref="images/sprite.svg#icon-instagram"></use>
            </svg>
          </div>
        </div>
        <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </footer>
  );
}
