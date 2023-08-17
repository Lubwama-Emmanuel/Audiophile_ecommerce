import styles from "./HeadingNew.module.scss";

export default function HeadingNew({ color = "#d87d4a" }) {
  return (
    <h4
      style={{
        color,
      }}
      className={styles.heading_new}
    >
      new product
    </h4>
  );
}
