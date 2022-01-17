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
    "Peer-to-peer rentals marketplace built with SwiftUI & Stripe",
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
    "Historical stock scanning platform built for professional daytraders",
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
    "Disciplinary infraction management solution managing 2000+ students",
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
    "Homework management solution with 200+ active users",
    ["mobile", "tablet"],
    "#",
    "#",
    true,
    [swiftUI, firebase],
    false,
    "Freelance Work"
  )
];
