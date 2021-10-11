import { ownerAboutData } from "../lib/data";
import Styles from "../styles/modules/About.module.scss";
import Image from "next/image";

const About = () => {
  const aboutData = ownerAboutData;

  return (
    <div className={Styles.about}>
      <div className={Styles["about-img"]}>
        <Image
          src="/img/img_about_avatar.png"
          layout="fill"
          alt="Mi nombre"
        ></Image>
      </div>
      <div className={Styles["about-content"]}>
        <h1 className={Styles["about-title"]}>Sobre mí</h1>
        <p>{aboutData.intro}</p>
        <p>{aboutData.desc}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam
          reprehenderit incidunt unde non vero eum, aliquam commodi alias
          provident iusto illum quis? Fuga quasi aliquid deserunt asperiores
          earum repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores quam reprehenderit incidunt unde non vero eum, aliquam
          commodi alias provident iusto illum quis? Fuga quasi aliquid deserunt
          asperiores earum repudiandae.
        </p>
        {aboutData.extra && <p>{aboutData.extra}</p>}
        <span>Puedes hechar un vistazo a mis redes sociales:</span>
      </div>
    </div>
  );
};

export default About;
