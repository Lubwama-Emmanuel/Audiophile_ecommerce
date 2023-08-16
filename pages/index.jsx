import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main_homepage/Main";
import Zx9 from "../components/Zx9/Zx9";
import Zx7 from "../components/Zx7/Zx7";
import Yx1 from "../components/Yx1/Yx1";
import Gear from "../components/Gear/Gear";
import Footer from "../components/Footer/Footer";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Audiophile Ecommerce</title>
      </Head>
      <Hero />
      <Main />
      <Zx9 />
      <Zx7 />
      <Yx1 />
      <Gear />
      <Footer />
    </>
  );
}
