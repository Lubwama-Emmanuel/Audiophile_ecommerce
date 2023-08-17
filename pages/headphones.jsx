import Layout from "../components/ui/Layout/Layout";
import PageHead from "../components/ui/Page_Head/Page_Head";
import MarkII from "../components/Headphones/MarkII/MarkII";
import MarkI from "../components/Headphones/MarkI/MarkI";
import Xx59 from "../components/Headphones/XX59/Xx59";
import Overview from "../components/ui/Overview/overview";
import Gear from "../components/ui/Gear/Gear";
import Footer from "../components/ui/Footer/Footer";

export default function Headphone() {
  return (
    <>
      <PageHead title={"headphones"} />
      <Layout>
        <MarkII />
        <MarkI />
        <Xx59 />
        <Overview />
        <Gear />
      </Layout>
      <Footer />
    </>
  );
}
