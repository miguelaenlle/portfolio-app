import classes from "./TextTransform.module.css"
const TextTransform: React.FC= (props) => {
    return (
        <mark className = {classes.emphasis}>{props.children}</mark>
    );
}
export default TextTransform