import Layout from "../components/Layout/Layout";
import MarkI from "../components/MarkI/MarkI";
import MarkII from "../components/MarkII/MarkII";
import PageHead from "../components/Page_Head/Page_Head";
import Xx59 from "../components/XX59/Xx59";
import Main from "../components/Main_homepage/Main";
import Gear from "../components/Gear/Gear";
import Footer from "../components/Footer/Footer";

export default function Headphone() {
  return (
    <>
      <PageHead title={"headphones"} />
      <Layout>
        <MarkII />
        <MarkI />
        <Xx59 />
        <Main />
        <Gear />
      </Layout>
      <Footer />
    </>
  );
}
