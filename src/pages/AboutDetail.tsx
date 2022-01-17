import { Fade } from "react-awesome-reveal";
import SectionHeader from "../components/text/SectionHeader";
import { aboutData } from "../constants/about-info";
import classes from "./Skills.module.css";
import Wrapper from "./Wrapper";


const AboutDetail: React.FC = (props) => {
  return (
    <Wrapper compact={true}>
      <SectionHeader content={"About Me"} hasLine={true} />
      <Fade duration={500} delay={950} triggerOnce={true}>
        <div className={classes["description-wrapper"]}>
          <p className={classes.text}>{aboutData.long_description}</p>
        </div>
      </Fade>
    </Wrapper>
  );
};
export default AboutDetail;
