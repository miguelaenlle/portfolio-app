import Project from "../models/Project";
import {
  swift,
  swiftUI,
  react,
  firebase,
  aws,
  nodeJS,
  python,
  stripe,
  airtables,
} from "./skills-main";

export const projects: Project[] = [
  new Project(
    "Rentr",
    "P2P Rentals Marketplace",
    ["mobile"],
    "#",
    "#",
    true,
    [swiftUI, stripe, firebase, nodeJS],
    true,
    "Personal Project"
  ),
  new Project(
    "Hypertrade",
    "Historical stock scanning platform for professional traders",
    ["web"],
    "#",
    "#",
    false,
    [react, aws, python, nodeJS],
    false,
    "Personal Project"
  ),
  new Project(
    "Scatter",
    "Mobile student data access software with 2000+ students managed",
    ["mobile"],
    "#",
    "#",
    true,
    [swiftUI, firebase, airtables],
    true,
    "Freelance Work"
  ),
  new Project(
    "Tidynote",
    "Homework management solution with 200+ users",
    ["mobile", "tablet"],
    "#",
    "#",
    true,
    [swiftUI, firebase],
    false,
    "Freelance Work"
  )
];
