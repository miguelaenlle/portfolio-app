import LinkIcon from "../icons/LinkIcon";
import classes from "./ViewLink.module.css";

const ViewLink: React.FC<{ text: string; link: string }> = (props) => {
  return (
    <div className = {classes['link-container']}>
      <a href={props.link} target="_blank" className={classes.link}>
        {props.text}
      </a>
      <LinkIcon/>
    </div>
  );
};
export default ViewLink;
