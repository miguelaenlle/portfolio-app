import SectionHeader from "../components/text/SectionHeader";
import Wrapper from "./Wrapper";
import SkillList from "../components/groups/SkillList";
import { skills } from "../constants/skills"
import classes from "./Skills.module.css"
import { aboutData } from "../constants/about-info";
import { Fade } from "react-awesome-reveal";
const Skills = () => {

    return (
        <Wrapper compact = {true}>
            <SectionHeader content = {'About Me'} hasLine = {true}/>
            <Fade duration={500} delay={950} triggerOnce={true}>
                <p className = {classes.text}>{aboutData.long_description}</p>
                <p className = {classes.text}>Here are a few technologies I've been working with recently:</p>
            </Fade>
            <div className = {classes['left-stack']}>
                <SkillList items = {skills[1]} runsOnce = {true} />
                <SkillList items = {skills[2]}  runsOnce = {true} />
            </div>
        </Wrapper>
    );
}
export default Skills