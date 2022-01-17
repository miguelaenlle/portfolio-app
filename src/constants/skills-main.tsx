import Skill from "../models/Skill"

export const swift = new Skill('Swift', 'swift')
export const swiftUI = new Skill('SwiftUI', 'swift')
export const reactNative = new Skill('React Native', 'react')

export const html5 = new Skill('HTML5', 'html')
export const css3 = new Skill('CSS3', 'css')
export const json = new Skill('JSON', 'json')
export const javascript = new Skill('JavaScript', 'js')
export const typescript = new Skill('TypeScript', 'ts')
export const jsx = new Skill('JSX', 'react')
export const react = new Skill('React', 'react')
export const redux = new Skill('Redux', 'redux')
export const nextJS = new Skill('NextJS', 'next')

export const nodeJS = new Skill('NodeJS', 'node')
export const python = new Skill('Python', 'py')
export const firebase = new Skill('Firebase', 'firebase')
export const aws = new Skill('Amplify, S3, EC2, Lambda', 'aws')
export const ec2s3 = new Skill('S3/EC2/Lambda', 'aws')
export const amplify = new Skill('Amplify', 'aws')
export const stripe = new Skill('Stripe', 'stripe')

export const planning = new Skill('Planning', 'planning')
export const collaboration = new Skill('Collaboration', 'collaboration')
export const design = new Skill('Design', 'design')
export const timeManagement = new Skill('Time Management', 'time-management')

export const notion = new Skill('Notion', 'notion')
export const trello = new Skill('Trello', 'trello')
export const github = new Skill('GitHub', 'github')
export const figma = new Skill('Figma', 'figma')
export const vscode = new Skill('Visual Studio Code', 'vscode')
export const postman = new Skill('Postman', 'postman')
export const devtools = new Skill('Chrome DevTools', 'devtools')

export const airtables = new Skill('Airtables Integration', 'airtables')

export const skills: {[key: string]: Skill[]} = {
    "MOBILE": [
        swift, swiftUI, reactNative
    ],
    "WEB": [
        html5, css3, json, javascript, typescript, jsx, react, redux, nextJS
    ],
    "BACKEND": [
        nodeJS, python, firebase, ec2s3, amplify, stripe
    ],
    "SOFT SKILLS": [
        planning, collaboration, design, timeManagement
    ], 
    "TOOLS": [
        notion, trello, github, figma, vscode, postman, devtools
    ]
}
