import styles from "./Shop_btn.module.scss";

export default function Shop() {
  return (
    <button className={styles.shop_btn}>
      Shop
      <span>
        <svg className={styles.shop_btn__arrow}>
          <use xlinkHref="images/sprite.svg#icon-chevron-small-right"></use>
        </svg>
      </span>
    </button>
  );
}
