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

const About = () => {
  return (
    <section className={classes["header-background"]}>
      <Wrapper compact={false}>
        <Header content={aboutData.header} />
        <Subheader content={aboutData.subheader} />
        <div className={classes["left-stack"]}>
          <p className={classes["mono-text"]}>{aboutData.location}</p>
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
      </Wrapper>
    </section>
  );
};
export default About;