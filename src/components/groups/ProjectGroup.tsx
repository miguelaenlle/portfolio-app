import Project from "../../models/Project";
import Subheader from "../text/Subheader";
const ProjectGroup: React.FC<{project: Project}> = (props) => {
    return (
        <div>
            <Subheader content = {props.project.name} />

        </div>
    );
}
export default ProjectGroup