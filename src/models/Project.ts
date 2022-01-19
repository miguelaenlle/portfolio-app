import Skill from "./Skill";
class Project {
  name = "";
  description = "";
  longDescription: string[];
  supportedDevices: string[] = [];
  demoLink = "";
  videoLink = "";
  isMobile = true;
  skills: Skill[] = [];
  right = false;
  category = "";
  constructor(
    name: string,
    description: string,
    longDescription: string[],
    supportedDevices: string[],

    demoLink: string,
    videoLink: string,
    isMobile: boolean,

    skills: Skill[],
    right: boolean,
    category: string
  ) {
    this.name = name;
    this.description = description;
    this.longDescription = longDescription;
    this.supportedDevices = supportedDevices;

    this.demoLink = demoLink;
    this.videoLink = videoLink;
    this.isMobile = isMobile;

    this.skills = skills;
    this.right = right;
    this.category = category;
  }
}

export default Project;
