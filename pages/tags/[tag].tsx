import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "../../components/icons/Calendar";
import { Post } from "../../interfaces/post.interface";
import { getPostsByTag } from "../../lib/utils/posts";
import { getAllTags } from "../../lib/utils/tags";

const TagPage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <h1>Tag works</h1>
      <div>
        {posts.map((post) => (
          <div key={post.slug}>
            <div>
              <Link href={"/posts/" + post.slug}>
                <a>
                  <Image
                    src={
                      post.thumbnail ? post.thumbnail : "/img/defaultPost.jpg"
                    }
                    alt={post.title}
                    width={800}
                    height={350}
                    layout="responsive"
                  ></Image>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/posts/" + post.slug}>
                <a>{post.title}</a>
              </Link>
              <p>{post.header}</p>
              <p>
                <span>
                  <Calendar color={"white"} size={16}></Calendar>
                </span>
                {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();
  const paths = tags.map((tag) => ({
    params: { tag: tag.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (params) {
    const tagSlug = params.tag;
    if (typeof tagSlug === "string") {
      const posts = getPostsByTag(tagSlug);
      return { props: { posts } };
    }
  }
  return { props: { post: [] } };
};

export default TagPage;
