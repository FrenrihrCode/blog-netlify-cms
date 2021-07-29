import { GetStaticProps } from "next";
import Head from "next/head";
import { Tag } from "../interfaces/tag.interface";
import { getAllTags } from "../lib/utils/tags";

export default function Home({tags}: { tags: Tag[] }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllTags();
  const posts: [] = [];
  return {
    props: {
      posts,
      tags,
    },
  };
};
