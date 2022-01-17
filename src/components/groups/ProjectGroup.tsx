import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import SizeContext from "../../context/size-context";
import Project from "../../models/Project";
import ProjectStory from "../buttons/ProjectStory";
import HrLine from "../text/HrLine";
import Mockup from "./Mockup";
import classes from "./ProjectGroup.module.css";
import ProjectLinksGroup from "./ProjectLinksGroup";
// import Devices from "../text/Devices";
import SkillList from "./SkillList";

const ProjectGroup: React.FC<{ project: Project }> = (props) => {
  const sizeCtx = useContext(SizeContext);

  const mockup = <Mockup mockup={props.project.name} />;

  return (
    <>
      <div className={`${sizeCtx.isLarge ? classes["left-stack"] : ""}`}>
        {props.project.right && sizeCtx.isLarge && mockup}
        {!sizeCtx.isLarge && mockup}

        <div
          className={`${
            sizeCtx.isLarge
              ? classes["project-wrapper"]
              : classes["project-wrapper-small"]
          } ${
            props.project.right ? classes["right-based"] : classes["left-based"]
          }`}
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

          <div className = {classes["description-wrapper"]}>
            <ProjectStory />
          </div>

          <SkillList
            items={props.project.skills}
            runsOnce={true}
            wideFormat={false}
          />
        </div>
        {!props.project.right && sizeCtx.isLarge && mockup}
      </div>
      <HrLine />
    </>
  );
};
export default ProjectGroup;
