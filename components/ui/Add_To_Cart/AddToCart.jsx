import styles from "./AddToCart.module.scss";
import Button from "../../ui/Buttons/Button";

export default function AddToCart() {
  return (
    <div className={styles.add_to_cart}>
      <Button bgColor={"#f1f1f1"} className={styles.number}>
        {"-  1  +"}
      </Button>
      <Button bgColor={"#d87d4a"}>{"add to cart"}</Button>
    </div>
  );
}
