import styles from "./HeadingSec.module.scss";

export default function HeadingSec({ children }) {
  return <h2 className={styles.heading_sec}>{children}</h2>;
}
