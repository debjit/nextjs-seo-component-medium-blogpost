import Head from "next/head";
import Link from "next/link";
import Seo from "../components/Seo";

const seoFields = {
  canonical:"/example.com/demo",
  keywords: "HTML, CSS, JavaScript",
  "article:published_time": "25 Dec 2022",
  "article:modified_time": "25 Dec 2022",
  "og:image": "./varcel.svg",
  "og:title": "Next.js Seo Components",
  "og:description": "Next.js Seo Components",
  "og:image:width": "850",
  "og:image:height": "650",
  "twitter:creator": "@handle",
  "twitter:card": "summary_large_image",
  "twitter:site": "summary_large_image",
  tags: ["tag1", "tag2", "tag3"],
  author: ["Debjit Biswas", "D Biswas"],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Seo Components</title>
        <meta name="description" content="Next.js Seo Components App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Seo fields={seoFields} />
      <main>
        <Link href={"https://debjit.in"}>Debjit.in</Link>
      </main>
    </>
  );
}
