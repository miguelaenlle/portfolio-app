import classes from "./About.module.css";
import Header from "../components/text/Header";
import Subheader from "../components/text/Subheader";
import EmailButton from "../components/buttons/EmailButton";
import SocialIcon from "../components/buttons/SocialIcon";
import ViewLink from "../components/buttons/ViewLink";
import Wrapper from "./Wrapper";
import SocialIcons from "../components/groups/SocialIcons";

import { aboutData } from "../constants/about-info";
import LinkIcon from "../components/icons/LinkIcon";
import { Fade } from "react-awesome-reveal";
import backgroundTriangle from "./svgs/background-triangle.svg"

const About = () => {
  const offset = 500
  const triggerOnce = true

  return (
      <section className={classes["header-background"]}>
        <Wrapper compact={false}>
          <Fade duration={offset} triggerOnce = {triggerOnce}>
            <Header content={aboutData.header} />
          </Fade>
          <Fade duration={offset*2} delay = {offset} triggerOnce = {triggerOnce}>
              <Subheader content={aboutData.subheader} />
          </Fade>
          <Fade duration={offset*2} delay = {offset} triggerOnce = {triggerOnce}>
            <div className={classes["left-stack"]}>
              <p className={classes["text"]}>{aboutData.location}</p>
              <EmailButton text={aboutData.email} mailto={aboutData.email} mono = {false} />
            </div>
            <div className={classes["body-text-container"]}>
              <p className={classes["text"]}>{aboutData.description}</p>
            </div>
            <SocialIcons socials={aboutData.socials} />
            <ViewLink
              text={"View Resume"}
              link={aboutData.resumeLink}
              reversed={true}
              icon={<LinkIcon />}
            />
          </Fade>
        </Wrapper>
      </section>
  );
};
export default About;
