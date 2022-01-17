import classes from "./AllSkills.module.css";
import { skills } from "../../constants/skills-main";
import SkillRow from "./SkillRow";
import { Fade } from "react-awesome-reveal";

const AllSkills: React.FC<{}> = (props) => {
  return (
    <Fade delay = {900} triggerOnce>
    <div>
        {Object.keys(skills).map((skillGroup) => (
            <div key={`row_${skillGroup}`} className={classes["skill-row"]}>
                <p
                    key={`header_${skillGroup}`}
                    className={classes["skill-group-header-text"]}
                >
                    {skillGroup}
                </p>
                <SkillRow key={skillGroup} skillList={skills[skillGroup]} />
            </div>
        ))}
      </div>
    </Fade>
  );
};
export default AllSkills;
