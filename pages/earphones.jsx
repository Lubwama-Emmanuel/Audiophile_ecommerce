import PageHead from "../components/Page_Head/Page_Head";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main_homepage/Main";
import Gear from "../components/Gear/Gear";
import Footer from "../components/Footer/Footer";
import Earphone from "../components/Earphones/Earphone1";

export default function Earphones() {
  return (
    <>
      <PageHead title={"earphones"} />
      <Layout>
        <Earphone />
        <Main />
        <Gear />
      </Layout>
      <Footer />
    </>
  );
}
