import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Product } from "../components/Product";
import { Features } from "../components/Features";
import { FAQ } from "../components/FAQ";
import { Subscribe } from "../components/Subscribe";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Markr | Smarter student assessment</title>
        <meta name="description" content="Create, mark and understand student assessments with Markr." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Product />
        <Features />
        <FAQ />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
