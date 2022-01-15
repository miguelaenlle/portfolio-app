import classes from "./HypertradeMockup.module.css"
const HypertradeMockup: React.FC<{}> = (props) => {
    const image1 = <img className = {classes.image} src={"./mockups/Hypertrade/mockup-1.png"} alt="Hypertrade Screenshot" />
    return (
        <div>
            {image1}
        </div>
    );
}
export default HypertradeMockup