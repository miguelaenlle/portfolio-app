import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import SkillList from "../components/groups/SkillList";
import SectionHeader from "../components/text/SectionHeader";
import { aboutData } from "../constants/about-info";
import { skills } from "../constants/skills";
import SizeContext from "../context/size-context";
import classes from "./Skills.module.css";
import Wrapper from "./Wrapper";

const Skills: React.FC = (props) => {
  const sizeCtx = useContext(SizeContext);

  return (
    <Wrapper compact={true}>
      <SectionHeader content={"About Me"} hasLine={true} />
      <Fade duration={500} delay={950} triggerOnce={true}>
        <p className={classes.text}>{aboutData.long_description}</p>
        <p className={classes.text}>
          Here are a few technologies I've been working with recently:
        </p>
      </Fade>
      <div className={`${sizeCtx.isLarge ? classes["left-stack"] : ""}`}>
        <SkillList items={skills[1]} runsOnce={true} />
        <SkillList items={skills[2]} runsOnce={true} />
      </div>
    </Wrapper>
  );
};
export default Skills;
