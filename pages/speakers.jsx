import Layout from "../components/ui/Layout/Layout";
import PageHead from "../components/ui/Page_Head/Page_Head";
import Speaker1 from "../components/Speakers/Speaker1/Speaker1";
import Speaker2 from "../components/Speakers/Speaker2/Speaker2";
import Overview from "../components/ui/Overview/overview";
import Gear from "../components/ui/Gear/Gear";
import Footer from "../components/ui/Footer/Footer";

export default function Speaker() {
  return (
    <>
      <PageHead title={"speakers"} />
      <Layout>
        <Speaker1 />
        <Speaker2 />
        <Overview />
        <Gear />
      </Layout>
      <Footer />
    </>
  );
}
