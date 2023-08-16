import Button from "../Buttons/Button";
import styles from "./Zx7.module.scss";

export default function Zx7() {
  return (
    <section className={styles.zx7}>
      <div className={styles.zx7__info}>
        <h2>zx7 speaker</h2>
        <Button bgColor={"transparent"} color={"#000"} border="1px solid #000">
          {"see product"}
        </Button>
      </div>
    </section>
  );
}
