import classes from "./SkillList.module.css";
import SkillItem from "./SkillItem";
import Skill from "../../models/Skill";
import Reveal from "react-awesome-reveal";

const SkillList: React.FC<{ items: Skill[]; runsOnce: boolean }> = (props) => {
  const offset = 500;
  return (
    <div className={classes["skill-wrapper"]}>
      {props.items.map((item, index) => {
        return (
          <Reveal
            duration={offset}
            delay={(offset - 300) * index}
            triggerOnce={props.runsOnce}
          >
            <SkillItem skill={item.name} icon={item.icon} />
          </Reveal>
        );
      })}
    </div>
  );
};
export default SkillList;
