import Button from "../../ui/Buttons/Button";
import DoubleCon from "../../ui/Container/DoubleCon";
import HeadingSec from "../../ui/Headings/HeadingSec";
import Paragraph from "../../ui/Paragraph/Paragraph";

export default function Speaker2() {
  return (
    <DoubleCon img={"markI"} imageFirst={false}>
      <div>
        <HeadingSec>{"ZX7 SPEAKER"}</HeadingSec>
        <Paragraph>
          {
            "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          }
        </Paragraph>
        <Button bgColor={"#d87d4a"}>{"see product"}</Button>
      </div>
    </DoubleCon>
  );
}
