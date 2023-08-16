import Button from "../Buttons/Button";
import DoubleCon from "../ui/Container/DoubleCon";
import HeadingSec from "../ui/Heading/Heading";
import Paragraph from "../ui/Paragraph/Paragraph";

export default function MarkI() {
  return (
    <DoubleCon img={"markI"} imageFirst={false}>
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
