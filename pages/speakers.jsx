import Layout from "../components/Layout/Layout";
import PageHead from "../components/Page_Head/Page_Head";
import Speaker1 from "../components/Speaker1/Speaker1";
import Speaker2 from "../components/Speaker2/Speaker2";
import Main from "../components/Main_homepage/Main";
import Gear from "../components/Gear/Gear";
import Footer from "../components/Footer/Footer";

export default function Speaker() {
  return (
    <>
      <PageHead title={"speakers"} />
      <Layout>
        <Speaker1 />
        <Speaker2 />
        <Main />
        <Gear />
      </Layout>
      <Footer />
    </>
  );
}
