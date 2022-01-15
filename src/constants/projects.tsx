import Skill from "../models/Skill";
import Project from "../models/Project";
import {
  swift,
  typescript,
  react,
  reactNative,
  next,
  firebase,
  aws,
  node,
  python,
  stripe,
  airtables,
} from "./skills";

export const projects: Project[] = [
  new Project(
    "Rentr",
    "Peer-to-peer rentals marketplace built with SwiftUI & Stripe",
    ["mobile"],
    "#",
    "#",
    true,
    [swift, stripe, firebase, node],
    false
  ),
  new Project(
    "Hypertrade",
    "Historical stock scanning platform built for professional daytraders",
    ["web"],
    "#",
    "#",
    false,
    [react, aws, python, node],
    true
  ),
  new Project(
    "Scatter",
    "Disciplinary infraction management solution managing 2000+ students",
    ["mobile"],
    "#",
    "#",
    true,
    [swift, firebase, airtables],
    false
  ),
  new Project(
    "Tidynote",
    "Homework management solution with 200+ active users",
    ["mobile", "tablet"],
    "#",
    "#",
    true,
    [swift, firebase],
    true
  )
];
