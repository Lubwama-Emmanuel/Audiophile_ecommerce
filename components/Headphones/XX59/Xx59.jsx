import DoubleCon from "../../ui/Container/DoubleCon";
import Paragraph from "../../ui/Paragraph/Paragraph";
import Button from "../../ui/Buttons/Button";
import HeadingSec from "../../ui/Headings/HeadingSec";

export default function Xx59() {
  return (
    <DoubleCon img={"xx59"}>
      <div>
        <HeadingSec>{"XX99 Mark I Headphones"}</HeadingSec>
        <Paragraph>
          {
            "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          }
        </Paragraph>
        <Button bgColor={"#d87d4a"}>{"see product"}</Button>
      </div>
    </DoubleCon>
  );
}
