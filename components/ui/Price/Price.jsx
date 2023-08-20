import styles from "./Price.module.scss";

export default function Price({ children }) {
  return <p className={styles.price}>{children}</p>;
}
