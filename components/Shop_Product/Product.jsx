import Image from "next/image";
import styles from "./Product.module.scss";
import Shop from "../Buttons/Shop_btn";

export default function S({ img, title }) {
  return (
    <div className={styles.product}>
      <Image
        src={img}
        height={160}
        width={130}
        className={styles.product__img}
      />
      <h4>{title}</h4>
      <Shop />
    </div>
  );
}
