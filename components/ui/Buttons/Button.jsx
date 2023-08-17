import styles from "./Button.module.scss";

export default function Button({ bgColor, color, border = "none", children }) {
  return (
    <button
      className={styles.btn}
      style={{
        background: bgColor,
        border,
        color,
      }}
    >
      {children}
    </button>
  );
}
