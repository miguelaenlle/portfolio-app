import classes from "./SkillItem.module.css"

const SkillItem: React.FC<{skill: string, icon: string}> = (props) => {
    return (
        <div className = {classes['left-stack']}>
            <img className = {classes['icon']} src = {`./icons/${props.icon}.png`} alt = {props.skill} />
            <p className = {classes['skill-text']}>{props.skill}</p>            
        </div>
    );
}
export default SkillItem