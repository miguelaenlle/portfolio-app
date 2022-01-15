import Skill from "./Skill";
class Project {
  name = "";
  description = "";
  supportedDevices: string[] = [];
  demoLink = "";
  videoLink = "";
  isMobile = true;
  skills: Skill[] = [];
  right = false;
  constructor(
    name: string,
    description: string,
    supportedDevices: string[],
    
    demoLink: string,
    videoLink: string,
    isMobile: boolean,

    skills: Skill[],
    right: boolean
  ) {
    this.name = name;
    this.description = description;
    this.supportedDevices = supportedDevices;

    this.demoLink = demoLink;
    this.videoLink = videoLink;
    this.isMobile = isMobile;
    
    this.skills = skills;
    this.right = right
  }
}

export default Project