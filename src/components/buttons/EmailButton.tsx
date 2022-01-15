
import classes from "./EmailButton.module.css"
import EmailIcon from "../icons/EmailIcon";

const EmailButton: React.FC<{text: string, mailto: string}> = (props) => {
    return (
        <>
            <EmailIcon/>     
            <a href={`mailto:${props.mailto}`} className = {classes['email-content']}>
                <p>{props.text}</p>
            </a>
        </>
    );
}
export default EmailButton