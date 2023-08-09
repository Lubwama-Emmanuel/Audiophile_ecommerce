import styles from "./Button.module.scss";

export default function Shop() {
  return (
    <button className={styles.shop_btn}>
      Shop
      <span className={styles.shop_btn__arrow}>
        <svg>
          <use xlinkHref="images/sprite.svg#icon-chevron-small-right"></use>
        </svg>
      </span>
    </button>
  );
}
