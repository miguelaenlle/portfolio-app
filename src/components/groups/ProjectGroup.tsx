import classes from "./ProjectGroup.module.css";
import Project from "../../models/Project";
import HrLine from "../text/HrLine";
import ProjectStory from "../buttons/ProjectStory";
// import Devices from "../text/Devices";
import SkillList from "./SkillList";
import ProjectLinksGroup from "./ProjectLinksGroup";
import Mockup from "./Mockup";
import { Fade } from "react-awesome-reveal";
import { useContext } from "react";
import SizeContext from "../../context/size-context";

const ProjectGroup: React.FC<{ project: Project }> = (props) => {
  const sizeCtx = useContext(SizeContext);

  const mockup = <Mockup mockup={props.project.name} />;

  return (
    <>
      <div className={`${sizeCtx.isLarge ? classes["left-stack"] : ""}`}>
        {props.project.right && sizeCtx.isLarge && mockup}
        {!sizeCtx.isLarge && mockup}

        <div
          className={
            sizeCtx.isLarge
              ? classes["project-wrapper"]
              : classes["project-wrapper-small"]
          }
        >
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

          <SkillList items={props.project.skills} runsOnce={true} />
        </div>
        {!props.project.right && sizeCtx.isLarge && mockup}
      </div>
      <HrLine />
    </>
  );
};
export default ProjectGroup;
