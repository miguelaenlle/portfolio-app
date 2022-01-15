import SectionHeader from "../components/text/SectionHeader";
import Wrapper from "./Wrapper";
import { projects } from "../constants/projects";
import ProjectGroup from "../components/groups/ProjectGroup";

const Work = () => {
    return (
        <Wrapper compact = {true}>
            <SectionHeader content = {'Projects'} />
            {projects.map(project => <ProjectGroup project = {project}/>)}
        </Wrapper>
    );
}
export default Work