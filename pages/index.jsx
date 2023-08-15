import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main_homepage/Main";
import Zx9 from "../components/Zx9/Zx9";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Audiophile Ecommerce</title>
      </Head>
      <Hero />
      <Main />
      <Zx9 />
    </>
  );
}
