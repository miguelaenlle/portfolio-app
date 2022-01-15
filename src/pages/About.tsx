import classes from "./About.module.css"
import Header from "../components/text/Header";
import Subheader from "../components/text/Subheader";
import EmailButton from "../components/buttons/EmailButton";
import SocialIcon from "../components/buttons/SocialIcon";
import ViewLink from "../components/buttons/ViewLink";
import Wrapper from "./Wrapper";

import { aboutData } from "../constants/about-info";

const About = () => {
    return (
        <section className = {classes['header-background']}>
            <Wrapper compact={false}>
                <Header content = {aboutData.header}/>
                <Subheader content = {aboutData.subheader}/>
                <div className = {classes['left-stack']}>
                    <p className = {classes.text}>{aboutData.location}</p>
                    <EmailButton text = {aboutData.email} mailto = {aboutData.email}/>
                </div>
                <div className={classes['body-text-container']}>
                    <p className = {classes['text']}>{aboutData.description}</p>
                </div>
                <div className = {classes['social']}>
                    {aboutData.socials.map(social => <SocialIcon key = {social} network = {social}/>)}
                </div>
                <ViewLink text = {'View Resume'} link = {aboutData.resumeLink}/>
            </Wrapper>
        </section>
    );
}
export default About