import styles from "./Image_grid.module.scss";

export default function ImageGrid() {
  return (
    <section className={styles.image_grid}>
      <div className={styles.image_grid__img1}></div>
      <div className={styles.image_grid__img2}></div>
      <div className={styles.image_grid__img3}></div>
    </section>
  );
}
