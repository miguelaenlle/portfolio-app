import classes from "./SkillList.module.css";
import SkillItem from "./SkillItem";
import Skill from "../../models/Skill";
import Reveal from "react-awesome-reveal";

const SkillList: React.FC<{
  items: Skill[];
  runsOnce: boolean;
  wideFormat: boolean;
}> = (props) => {
  const offset = 500;
  return (
    <div
      className={`${classes["skill-wrapper"]} ${
        props.wideFormat ? classes["wide-format"] : ""
      }`}
    >
      {props.items.map((item, index) => {
        return (
          <Reveal
            duration={offset}
            delay={(offset - 300) * index}
            triggerOnce={props.runsOnce}
            key={`animation_${index}`}
          >
            <SkillItem
              key={index}
              skill={item.name}
              icon={item.icon}
              inRow={false}
            />
          </Reveal>
        );
      })}
    </div>
  );
};
export default SkillList;
