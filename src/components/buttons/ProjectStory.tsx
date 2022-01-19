import classes from "./ProjectStory.module.css";

const ProjectStory: React.FC<{projectDescription: string}> = (props) => {
    return (
        <>
            <li><p className = {classes['text']}>{props.projectDescription}</p></li>
        </>
    );
}
export default ProjectStory