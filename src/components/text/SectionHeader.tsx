import classes from "./SectionHeader.module.css"
const SectionHeader: React.FC<{content: string}> = (props) => {
    return (
        <>
            <h2 className = {classes['header-text']}>{props.content}</h2>
            <hr className = {classes['hr-line']}/>
        </>
    );
}
export default SectionHeader