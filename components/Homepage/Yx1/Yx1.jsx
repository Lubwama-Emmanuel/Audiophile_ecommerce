import Button from "../../ui/Buttons/Button";
import styles from "./Yx1.module.scss";

export default function Yx1() {
  return (
    <section className={styles.yx1}>
      <div className={styles.yx1__image} />
      <div className={styles.yx1__info}>
        <h2>yx1 earphones</h2>
        <Button bgColor={"transparent"} color={"#000"} border="1px solid #000">
          {"see product"}
        </Button>
      </div>
    </section>
  );
}
