import Skill from "../models/Skill"

export const swift = new Skill('Swift & SwiftUI', 'swift')
export const typescript = new Skill('TypeScript', 'ts')
export const react = new Skill('React', 'react')
export const reactNative = new Skill('React Native', 'react')
export const next = new Skill('NextJS', 'next')
export const firebase = new Skill('Firebase Auth, DB, RTDB, Functions', 'fb')
export const aws = new Skill('AWS Amplify, Lambda, EC2, S3', 'aws')
export const node = new Skill('NodeJS', 'node')
export const python = new Skill('Python', 'py')
export const stripe = new Skill('Stripe Payments & Payouts', 'stripe')
export const airtables = new Skill('Airtables & Sheets Integration', 'airtables')

export const skills = {
    1: [
        swift,
        react,
        reactNative,
        typescript,
        next
    ],
    2: [
        firebase,
        aws,
        node,
        python,
        stripe
    ]
}
