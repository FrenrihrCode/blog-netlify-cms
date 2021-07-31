import { ownerAboutData } from "../lib/data";
import Styles from "../styles/modules/About.module.scss";

const About = () => {
  const aboutData = ownerAboutData;

  return (
    <div className={Styles.about}>
      <h1 className={Styles["about-title"]}>Sobre mí</h1>
      <p>{aboutData.intro}</p>
      <p>{aboutData.desc}</p>
      {aboutData.extra && <p>{aboutData.extra}</p>}
      <span>Puedes hechar un vistazo a mis redes sociales:</span>
    </div>
  );
};

export default About;
