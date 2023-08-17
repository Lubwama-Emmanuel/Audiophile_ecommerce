import HeadingSec from "../ui/Headings/HeadingSec";
import styles from "./Earphone.module.scss";
import Button from "../ui/Buttons/Button";
import Paragraph from "../ui/Paragraph/Paragraph";
import DoubleCon from "../ui/Container/DoubleCon";
import HeadingNew from "../ui/Headings/HeadingNew";

export default function Earphone() {
  return (
    <DoubleCon img={"big_earphone"}>
      <div className={styles.earphone__info}>
        <HeadingNew />
        <HeadingSec>{"YX1 WIRELESS EARPHONES"}</HeadingSec>
        <Paragraph>
          {
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          }
        </Paragraph>
        <Button bgColor={"#d87d4a"}>{"see product"}</Button>
      </div>
    </DoubleCon>
  );
}
