import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import AllSkills from "../components/groups/AllSkills";

import SectionHeader from "../components/text/SectionHeader";
import { aboutData } from "../constants/about-info";
import SizeContext from "../context/size-context";
import classes from "./Skills.module.css";
import Wrapper from "./Wrapper";

const Skills: React.FC = (props) => {
  const sizeCtx = useContext(SizeContext);

  return (
    <Wrapper compact={true}>
      <SectionHeader content={"About Me"} hasLine={true} />
      <Fade duration={500} delay={950} triggerOnce={true}>
        <div className={classes["description-wrapper"]}>
          <p className={classes.text}>{aboutData.long_description}</p>
        </div>
      </Fade>
      <SectionHeader content={"Skills"} hasLine={true} />
      <AllSkills />
    </Wrapper>
  );
};
export default Skills;
