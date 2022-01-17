import classes from "./SkillItem.module.css";

const SkillItem: React.FC<{ skill: string; icon: string; inRow: boolean }> = (
  props
) => {
  return (
    <div
      className={
        props.inRow ? classes["left-stack"] : classes["left-stack-compact"]
      }
    >
      <img
        className={classes["icon"]}
        src={`./icons/${props.icon}.png`}
        alt={props.skill}
      />
      <p
        className={
          props.inRow ? classes["skill-text-compact"] : classes["skill-text"]
        }
      >
        {props.skill}
      </p>
      {(props.inRow) && (
        <div className = {classes.vl}>

        </div>
      )}
    </div>
  );
};
export default SkillItem;
