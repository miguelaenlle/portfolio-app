import SectionHeader from "../components/text/SectionHeader";
import Wrapper from "./Wrapper";
import SkillList from "../components/groups/SkillList";
import { skills } from "../constants/skills"
import classes from "./Skills.module.css"
const Skills = () => {

    return (
        <Wrapper compact = {true}>
            <SectionHeader content = {'Skills'} hasLine = {true}/>
            <div className = {classes['left-stack']}>
                <SkillList items = {skills[1]} />
                <SkillList items = {skills[2]} />
            </div>
        </Wrapper>
    );
}
export default Skills