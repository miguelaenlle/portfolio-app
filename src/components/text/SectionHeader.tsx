import classes from "./SectionHeader.module.css"
import HrLine from "./HrLine";
const SectionHeader: React.FC<{content: string; hasLine: boolean}> = (props) => {
    return (
        <>
            <h2 className = {classes['header-text']}>{props.content}</h2>
            {props.hasLine && <HrLine/>}

        </>
    );
}
export default SectionHeader