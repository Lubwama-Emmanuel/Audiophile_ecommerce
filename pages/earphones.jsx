import PageHead from "../components/ui/Page_Head/Page_Head";
import Layout from "../components/ui/Layout/Layout";
import Main from "../components/ui/Overview/overview";
import Gear from "../components/ui/Gear/Gear";
import Footer from "../components/ui/Footer/Footer";
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
