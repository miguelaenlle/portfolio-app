import classes from "./AllSkills.module.css";
import { skills } from "../../constants/skills-main";
import SkillRow from "./SkillRow";
import { Fade } from "react-awesome-reveal";

import SizeContext from "../../context/size-context";
import { useContext } from "react";

const AllSkills: React.FC<{}> = (props) => {
  const sizeCtx = useContext(SizeContext);
  return (
    <Fade delay = {sizeCtx.isLarge ? 900 : 0} triggerOnce>
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
