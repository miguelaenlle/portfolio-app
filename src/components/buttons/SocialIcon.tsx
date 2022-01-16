import classes from "./SocialIcon.module.css"
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";

const SocialIcon: React.FC<{network: string}> = (props) => {
    const links = {
        github: "https://github.com/bot-developer3",
        linkedin: "https://www.linkedin.com/in/miguel-aenlle-2265a21b1/"
    }
    return (
        <div className = {classes['main-div']}>
            {props.network === "github" && <a href={links.github} target="_blank"><Github/></a>}
            {props.network === "linkedin" && <a href={links.linkedin} target="_blank"><Linkedin/></a>}
        </div>
    );
}
export default SocialIcon
