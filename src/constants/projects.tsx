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
    ["Rentr is a marketplace where anyone can rent out their surplus items to anybody effortlessly.",
     "I worked as the Technical Cofounder to build the app out alongside a Freelancer and another Developer. ",
     "I built Rentr’s user-facing platform using SwiftUI and developed the payments infrastructure with a secure Firebase backend and Stripe Payments and Payouts integrations. "],
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
    ["HyperTrade is a SaaS platform that allows retail traders to pull historical trades on their setups instantly. ",
     "After hearing about the problems day traders I know have with their current solution, Spikeet, stating that it's too overpriced and slow, I decided to build Hypertrade as a personal project. ",
     "I built the frontend through ReactJS and the backend using AWS Amplify. ",
     "Additionally, I used AWS EC2, S3, Lambda, and Apache Spark with Python to handle the data processing needed to pull 1000s of setups over years of data in minutes. "],
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
    ["Scatter is an app that allows school administrators to retrieve critical student information on the fly by scanning their student IDs. ",
     "Since the current solution, Principalm, was buggy and slow, administrators at my school commissioned me to develop Scatter. ",
     "Scatter uses SwiftUI and Firebase to deliver a fast user experience. ",
     "Additionally, I integrated Airtables and Google Sheets to enable admins to view records of given infractions effortlessly."],
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
    ["TidyNote is a tablet and mobile assignment tracking platform. TidyNote is automatically integrated with student calendars and also auto-categorizes homework, allowing students to effortlessly track their assignments. Additionally, teachers can measure how students are progressing with their assignments using TidyNote. ",
     "Division heads at my school couldn’t find a solution that would let them view student homework planners, so they commissioned me to build TidyNote.",
     " I used SwiftUI, Python, and Firebase to integrate with the school’s databases and to deliver a seamless, easy-to-use experience."],
    ["mobile", "tablet"],
    "#",
    "#",
    true,
    [swiftUI, firebase],
    false,
    "Freelance Work"
  )
];
