import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Calendar } from "../../components/icons/Calendar";
import { Post } from "../../interfaces/post.interface";
import { getAllPostsSlug, getPostBySlug } from "../../lib/utils/posts";

const SinglePost = ({ post }: { post: Post }) => {
  return (
    <>
      <div>
        <Image
          src={post.thumbnail ? post.thumbnail : "/img/defaultPost.jpg"}
          alt={post.title}
          width={900}
          height={400}
          layout="fixed"
        ></Image>
        <h1>{post.title}</h1>
        <p>{post.header}</p>
        <p>
          <span>
            <Calendar color={"white"} size={16}></Calendar>
          </span>
          {post.date}
        </p>
        <div>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
      <div>disqus</div>
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
