import classes from "./ProjectGroup.module.css";
import Project from "../../models/Project";
import HrLine from "../text/HrLine";
import ProjectStory from "../buttons/ProjectStory";
// import Devices from "../text/Devices";
import SkillList from "./SkillList";
import ProjectLinksGroup from "./ProjectLinksGroup";
import Mockup from "./Mockup";
import {Fade} from "react-awesome-reveal";


const ProjectGroup: React.FC<{ project: Project }> = (props) => {
  const mockup = <Mockup mockup={props.project.name} />;
  return (
    <>
      <div className={classes["left-stack"]}>
        {props.project.right && mockup}
        <div className={classes["project-wrapper"]}>
          <h2 className={classes["header-text"]}>
            {props.project.name.toLocaleUpperCase()}
          </h2>
          <Fade>
            <p className={classes["text"]}>{props.project.description}</p>
          </Fade>

          <ProjectLinksGroup
            isMobile={props.project.isMobile}
            liveLink={props.project.demoLink}
            videoLink={props.project.videoLink}
          />
          <ProjectStory />

          <SkillList items={props.project.skills} runsOnce = {true}/>
        </div>
        {!props.project.right && mockup}
      </div>
      <HrLine />
    </>
  );
};
export default ProjectGroup;
