import styles from "./Main.module.scss";
import Product from "../Shop_Product/Product";

export default function Main() {
  return (
    <main className={styles.second}>
      <Product img={"/images/headp.png"} title="headphones" />
      <Product img={"/images/speakers.png"} title="speakers" />
      <Product img={"/images/earphones.png"} title="earphones" />
    </main>
  );
}
