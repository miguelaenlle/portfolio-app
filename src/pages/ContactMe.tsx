import SectionHeader from "../components/text/SectionHeader";
import SocialIcons from "../components/groups/SocialIcons";
import EmailButton from "../components/buttons/EmailButton";
import Wrapper from "./Wrapper";
import { aboutData } from "../constants/about-info";
import classes from "./ContactMe.module.css";
import Subheader from "../components/text/Subheader";
import { Fade } from "react-awesome-reveal";

const ContactMe = () => {
    const offset = 500
    return (
        <section className = {classes.section}>
            <Wrapper compact = {false}>
                <Fade duration = {offset} delay = {0}> 
                    <Subheader content = {"Get In Touch"} />
                </Fade>
                <Fade duration = {offset} delay = {(offset * 1)-100}> 
                    <p className={classes["text"]}>{aboutData.contact_description}</p>
                    <SocialIcons socials = {aboutData.socials}/>
                    
                    <div className={classes["left-stack"]}>
                        <EmailButton text = {aboutData.email} mailto = {aboutData.email} mono = {false}/>
                    </div>
                </Fade>
            </Wrapper>
        </section>
    );
}
export default ContactMe