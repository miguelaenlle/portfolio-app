import SectionHeader from "../components/text/SectionHeader";
import SocialIcons from "../components/groups/SocialIcons";
import EmailButton from "../components/buttons/EmailButton";
import Wrapper from "./Wrapper";
import { aboutData } from "../constants/about-info";
import classes from "./ContactMe.module.css";

const ContactMe = () => {
    return (
        <Wrapper compact = {false}>
            <SectionHeader content="Get in Touch" hasLine ={false}/>
            <SocialIcons socials = {aboutData.socials}/>
            
            <div className={classes["left-stack"]}>
                <EmailButton text = {aboutData.email} mailto = {aboutData.email} mono = {false}/>
            </div>
        </Wrapper>
    );
}
export default ContactMe