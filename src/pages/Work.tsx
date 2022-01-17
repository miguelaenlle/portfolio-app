import SectionHeader from "../components/text/SectionHeader";
import Wrapper from "./Wrapper";
import { projects } from "../constants/projects";
import ProjectGroup from "../components/groups/ProjectGroup";
import React from "react";

const Work: React.FC = (
  props
) => {
  return (
    <Wrapper compact={false}>
      <SectionHeader content={"Work & Projects"} hasLine={true} />
      {projects.map((project) => (
        <ProjectGroup
          key={project.name}
          project={project}
        />
      ))}
    </Wrapper>
  );
};
export default Work;
