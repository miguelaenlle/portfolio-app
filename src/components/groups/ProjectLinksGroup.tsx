import GoToIcon from "../icons/GoToIcon";
import VideoIcon from "../icons/VideoIcon";

import ViewLink from "../buttons/ViewLink";
import classes from "./ProjectLinksGroup.module.css"

import { useContext } from "react";
import SizeContext from "../../context/size-context";

const ProjectLinksGroup: React.FC<{isMobile: boolean, liveLink: string, videoLink: string}> = (props) => {
    const sizeCtx = useContext(SizeContext);
    return (
        <div className = {sizeCtx.isLarge ? classes['left-stack'] : ""}>

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
                icon={<VideoIcon />}
            />
        </div>
    );
}
export default ProjectLinksGroup