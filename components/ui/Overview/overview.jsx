import styles from "./Overview.module.scss";
import Image from "next/image";
import Shop from "../Buttons/Shop_btn";

export default function Overview() {
  return (
    <main className={styles.overview}>
      <Product img={"/images/headp.png"} title="headphones" />
      <Product img={"/images/speakers.png"} title="speakers" />
      <Product img={"/images/earphones.png"} title="earphones" />
    </main>
  );
}

function Product({ img, title }) {
  return (
    <div className={styles.product}>
      <Image
        src={img}
        height={160}
        width={130}
        className={styles.product__img}
      />
      <div className={styles.product__info}>
        <h4>{title}</h4>
        <Shop />
      </div>
    </div>
  );
}
