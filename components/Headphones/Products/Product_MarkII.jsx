import HeadingSec from "../../ui/Headings/HeadingSec";
import Paragraph from "../../ui/Paragraph/Paragraph";
import DoubleCon from "../../ui/Container/DoubleCon";
import HeadingNew from "../../ui/Headings/HeadingNew";
import Price from "../../ui/Price/Price";
import AddToCart from "../../ui/Add_To_Cart/AddToCart";
import Features from "../../ui/Features/Features";
import ImageGrid from "../../ui/Image_grid/Image_grid";

export default function PMarkII() {
  return (
    <>
      <DoubleCon img={"markII"}>
        <div>
          <HeadingNew />
          <HeadingSec>{"XX99 Mark II Headphones"}</HeadingSec>
          <Paragraph>
            {
              "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            }
          </Paragraph>
          <Price>{"$ 2,999"}</Price>
          <AddToCart />
        </div>
      </DoubleCon>
      <Features />
      <ImageGrid />
    </>
  );
}
