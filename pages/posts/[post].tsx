import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Calendar } from "../../components/icons/Calendar";
import { Post } from "../../interfaces/post.interface";
import { getAllPostsSlug, getPostBySlug } from "../../lib/utils/posts";
import Styles from "../../styles/modules/Post.module.scss";

const SinglePost = ({ post }: { post: Post }) => {
  return (
    <>
      <div className={Styles.post}>
        <div className={Styles["post-img"]}>
          <Image
            src={post.thumbnail ? post.thumbnail : "/img/defaultPost.jpg"}
            alt={post.title}
            objectFit="cover"
            objectPosition="top"
            layout="fill"
          ></Image>
        </div>
        <div className={Styles["post-content"]}>
          <h2 className={Styles["post-content_title"]}>{post.title}</h2>
          <em className={Styles["post-content_header"]}>{post.header}</em>
          <div className="divider" />
          <div className={Styles["post-content_markdown"]}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          <div className="divider" />
          <p className={Styles["post-content_date"]}>
            <span>
              <Calendar color={"white"} size={16}></Calendar>
            </span>
            {post.date}
          </p>
        </div>
      </div>
      <div className={Styles.comments}>disqus</div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostsSlug();
  const paths = slugs.map((slug) => ({
    params: { post: slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (params) {
    const postSlug = params.post;
    if (typeof postSlug === "string") {
      const post = getPostBySlug(postSlug);
      return { props: { post } };
    }
  }
  const defaultPost: Post = {
    slug: "/",
    content:
      "Hola, bienvenido a mi Blog, sientete libre de revisar mis publicaciones. Si el contenido es de tu agrado puedes dejar un comentario indicandolo. Muchas gracias ",
    date: new Date().toLocaleString(),
    header: "Bienvenido a mi Blog",
    tags: ["default"],
    title: "Bienvenido a mi Blog",
  };
  return { props: { post: defaultPost } };
};

export default SinglePost;
