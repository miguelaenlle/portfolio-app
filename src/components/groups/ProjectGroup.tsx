import classes from "./ProjectGroup.module.css"
import Project from "../../models/Project";
import HrLine from "../text/HrLine";
import ProjectStory from "../buttons/ProjectStory";
// import Devices from "../text/Devices";
import SkillList from "./SkillList";
import ProjectLinksGroup from "./ProjectLinksGroup";

const ProjectGroup: React.FC<{project: Project}> = (props) => {
    return (
        <>
            <div className = {classes['project-wrapper']}>
                <h2 className = {classes['header-text']}>{props.project.name.toLocaleUpperCase()}</h2>
                
                <p className = {classes['text']}>{props.project.description}</p>

                <ProjectLinksGroup isMobile = {props.project.isMobile} liveLink = {props.project.demoLink} videoLink = {props.project.videoLink}/>

                <SkillList items = {props.project.skills}/>
                <ProjectStory/>
                
            </div>
            <HrLine/>
        </>
    );
}
export default ProjectGroup