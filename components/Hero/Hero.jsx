import Header from "../Header/Header";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Button from "../Buttons/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Header />
      <NewProduct />
    </section>
  );
}

function NewProduct() {
  return (
    <div className={styles.new_product}>
      <div className={styles.new_product__desc}>
        <h4>new product</h4>
        <h2>xx99 mark 11 headphones</h2>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button bgColor={"#d87d4a"}>{"see product"}</Button>
      </div>
      <div className={styles.new_product__image}>
        &nbsp;
        {/* <Image src="/images/headphones.png" width={500} height={500} /> */}
      </div>
    </div>
  );
}
