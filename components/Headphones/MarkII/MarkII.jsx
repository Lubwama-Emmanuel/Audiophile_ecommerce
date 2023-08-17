import HeadingSec from "../../ui/Headings/HeadingSec";
import Button from "../../ui/Buttons/Button";
import Paragraph from "../../ui/Paragraph/Paragraph";
import DoubleCon from "../../ui/Container/DoubleCon";
import HeadingNew from "../../ui/Headings/HeadingNew";

export default function MarkII() {
  return (
    <DoubleCon img={"markII"}>
      <div>
        <HeadingNew />
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
