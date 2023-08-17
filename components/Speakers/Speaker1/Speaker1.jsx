import Button from "../../ui/Buttons/Button";
import Paragraph from "../../ui/Paragraph/Paragraph";
import DoubleCon from "../../ui/Container/DoubleCon";
import HeadingNew from "../../ui/Headings/HeadingNew";
import HeadingSec from "../../ui/Headings/HeadingSec";

export default function Speaker1() {
  return (
    <DoubleCon img={"big_speaker"}>
      <div>
        <HeadingNew />
        <HeadingSec>{"ZX9 SPEAKER"}</HeadingSec>
        <Paragraph>
          {
            "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          }
        </Paragraph>
        <Button bgColor={"#d87d4a"}>{"see product"}</Button>
      </div>
    </DoubleCon>
  );
}
