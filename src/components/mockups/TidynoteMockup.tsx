import classes from "./TidynoteMockup.module.css"
import { Slide } from "react-awesome-reveal";

const TidynoteMockup: React.FC<{}> = (props) => {
    
    const image1 = <img className = {classes['image-1']} src={"./mockups/Tidynote/mockup-1.png"} alt="Tidynote Screenshot" />
    const image2 = <img className = {classes['image-2']} src={"./mockups/Rentr/mockup-2.png"} alt="Tidynote Screenshot" />
    return (
        <div className = {`${classes['image-div-1']} ${classes['image-1']}`}>
            <Slide triggerOnce = {true} direction="right">
                {image1}
            </Slide>
            <div className = {`${classes['image-div-2']} ${classes['image-2']}`} >
                <Slide triggerOnce = {true} direction="right">
                    {image2}
                </Slide>
            </div>
        </div>
    );
}
export default TidynoteMockup