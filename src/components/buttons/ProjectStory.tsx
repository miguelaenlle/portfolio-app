import classes from "./ProjectStory.module.css";
import ContinueIcon from "../icons/ContinueIcon";

const ProjectStory: React.FC<{}> = (props) => {
    return (
        <button className = {classes['button-wrapper']}>
            <p className = {classes['button-text']}>Project Story</p>
            <ContinueIcon/>
        </button>
    );
}
export default ProjectStory