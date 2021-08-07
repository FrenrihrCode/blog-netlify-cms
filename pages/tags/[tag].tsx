import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "../../components/icons/Calendar";
import { Post } from "../../interfaces/post.interface";
import { Tag } from "../../interfaces/tag.interface";
import { getPostsByTag } from "../../lib/utils/posts";
import { getAllTags } from "../../lib/utils/tags";
import Styles from "../../styles/modules/Tag.module.scss";

const TagPage = ({ posts, tag }: { posts: Post[]; tag: Tag }) => {
  return (
    <>
      <h1 className={Styles.title}>Publicaciones sobre {tag.name}</h1>
      <div className={Styles.list}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className={Styles["list-post"]} key={post.slug}>
              <div>
                <Link href={"/posts/" + post.slug}>
                  <a>
                    <Image
                      src={
                        post.thumbnail ? post.thumbnail : "/img/defaultPost.jpg"
                      }
                      alt={post.title}
                      width={750}
                      height={300}
                      objectFit="cover"
                      objectPosition="top"
                      layout="responsive"
                    ></Image>
                  </a>
                </Link>
              </div>
              <div className={Styles["list-post_content"]}>
                <Link href={"/posts/" + post.slug}>
                  <a className={Styles["list-post_title"]}>{post.title}</a>
                </Link>
                <p className={Styles["list-post_header"]}>{post.header}</p>
                <p className={Styles["list-post_date"]}>
                  <span>
                    <Calendar color={"white"} size={16}></Calendar>
                  </span>
                  {post.date}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h4>Todavía no hay publicaciones en esta categoría.</h4>
          </div>
        )}
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
    const tags = getAllTags();
    if (typeof tagSlug === "string") {
      const posts = getPostsByTag(tagSlug);
      const tag = tags.find((t) => t.slug === tagSlug);
      return { props: { posts, tag } };
    }
  }
  return {
    props: {
      post: [],
      tag: {
        name: "General",
        slug: "general",
      },
    },
  };
};

export default TagPage;
