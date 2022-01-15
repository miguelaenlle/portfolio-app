import GoToIcon from "../icons/GoToIcon";
import ViewLink from "../buttons/ViewLink";
import classes from "./ProjectLinksGroup.module.css"

const ProjectLinksGroup: React.FC<{isMobile: boolean, liveLink: string, videoLink: string}> = (props) => {
    return (
        <div className = {classes['left-stack']}>

            <ViewLink
                text={(props.isMobile) ? "Download Demo App (iOS)" : "Go to Demo Site"} 
                link={props.liveLink}
                reversed={false}
                icon={<GoToIcon />}
            />
            
            <ViewLink
                text={"Watch Full Platform Demo"}
                link={props.videoLink}
                reversed={false}
                icon={<GoToIcon />}
            />
        </div>
    );
}
export default ProjectLinksGroup