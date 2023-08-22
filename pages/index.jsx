import Head from "next/head";

import Hero from "../components/Homepage/Hero/Hero";
import Layout from "../components/ui/Layout/Layout";
import Overview from "../components/ui/Overview/overview";
import Zx9 from "../components/Homepage/Zx9/Zx9";
import Zx7 from "../components/Homepage/Zx7/Zx7";
import Yx1 from "../components/Homepage/Yx1/Yx1";
import Gear from "../components/ui/Gear/Gear";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Audiophile Ecommerce</title>
      </Head>
      <Hero />
      <Layout>
        <Overview />
        <Zx9 />
        <Zx7 />
        <Yx1 />
        <Gear />
      </Layout>
    </>
  );
}
