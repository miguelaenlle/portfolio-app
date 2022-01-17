import React from "react";
import AllSkills from "../components/groups/AllSkills";
import SectionHeader from "../components/text/SectionHeader";
import Wrapper from "./Wrapper";


const Skills: React.FC = (props) => {

  return (
    <Wrapper compact={true}>
      <SectionHeader content={"Skills"} hasLine={true} />
      <AllSkills />
    </Wrapper>
  );
};
export default Skills;
