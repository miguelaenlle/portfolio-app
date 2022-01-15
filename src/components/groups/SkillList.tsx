import classes from "./SkillList.module.css"
import SkillItem from "./SkillItem";
import Skill from "../../models/Skill";

const SkillList: React.FC<{items: Skill[]}> = (props) => {
    return (
        <div className = {classes['skill-wrapper']}>
            {props.items.map(item => <SkillItem skill = {item.name} icon = {item.icon}/>)}
        </div>
    );
}
export default SkillList