import Header from "../Header/Header";
import styles from "./Page_Head.module.scss";

export default function PageHead({ title }) {
  return (
    <div className={styles.page_head}>
      <Header />
      <h2>{title}</h2>
    </div>
  );
}
