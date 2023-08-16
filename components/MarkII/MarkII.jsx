import HeadingSec from "../ui/Heading/Heading";
import styles from "./MarkII.module.scss";
import Button from "../Buttons/Button";
import Paragraph from "../ui/Paragraph/Paragraph";
import DoubleCon from "../ui/Container/DoubleCon";

export default function MarkII() {
  return (
    <DoubleCon img={"markII"}>
      <div className={styles.markII__info}>
        <h4>new product</h4>
        <HeadingSec>{"XX99 Mark II Headphones"}</HeadingSec>
        <Paragraph>
          {
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          }
        </Paragraph>
        <Button bgColor={"#d87d4a"}>{"see product"}</Button>
      </div>
    </DoubleCon>
  );
}
