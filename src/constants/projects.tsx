import Project from "../models/Project";
import {
  swift,
  react,
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
    true
  ),
  new Project(
    "Hypertrade",
    "Historical stock scanning platform built for professional daytraders",
    ["web"],
    "#",
    "#",
    false,
    [react, aws, python, node],
    false
  ),
  new Project(
    "Scatter",
    "Disciplinary infraction management solution managing 2000+ students",
    ["mobile"],
    "#",
    "#",
    true,
    [swift, firebase, airtables],
    true
  ),
  new Project(
    "Tidynote",
    "Homework management solution with 200+ active users",
    ["mobile", "tablet"],
    "#",
    "#",
    true,
    [swift, firebase],
    false
  )
];
