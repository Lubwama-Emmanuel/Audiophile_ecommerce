import styles from "./DoubleCon.module.scss";

export default function DoubleCon({ img, children, imageFirst = true }) {
  return (
    <section className={styles.double_con}>
      <div
        style={
          imageFirst
            ? {
                background: `url(/images/${img}.png), lightgray 0px 0px / 100% 100%`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }
            : {
                background: `url(/images/${img}.png), lightgray 0px 0px / 100% 100%`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",

                gridArea: "1 / 2 / 1 / 3",
              }
        }
        className={styles.double_con__image}
      ></div>
      <div className={styles.double_con__info}>{children}</div>
    </section>
  );
}
