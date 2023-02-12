import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>His name is Sakamoto Ryoma.</p>
        <p>He says "I will clean up Japan once more."</p>
        <p>
          <a href="https://ja.wikipedia.org/wiki/%E5%9D%82%E6%9C%AC%E9%BE%8D%E9%A6%AC">
            Wikipedia
          </a>
        </p>
      </section>
    </Layout>
  );
}
