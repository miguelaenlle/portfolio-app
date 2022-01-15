import classes from "./SectionHeader.module.css"
const HrLine: React.FC<{}> = (props) => {
    return (
        <hr className = {classes['hr-line']}/>
    );
}
export default HrLine