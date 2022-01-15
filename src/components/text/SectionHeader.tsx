import classes from "./SectionHeader.module.css"
import HrLine from "./HrLine";
const SectionHeader: React.FC<{content: string}> = (props) => {
    return (
        <>
            <h2 className = {classes['header-text']}>{props.content}</h2>
            <HrLine/>
        </>
    );
}
export default SectionHeader