import classes from "./SocialIcons.module.css";
import SocialIcon from "../buttons/SocialIcon";

const SocialIcons: React.FC<{socials: string[]}> = (props) => {
    return (
        <div className={classes["social"]}>
          {props.socials.map((social) => (
            <SocialIcon key={social} network={social} />
          ))}
        </div>
    );
}
export default SocialIcons