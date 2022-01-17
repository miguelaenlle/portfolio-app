import classes from "./RentrMockup.module.css"
import { Slide } from "react-awesome-reveal";

const RentrMockup: React.FC<{}> = (props) => {
    const image1 = <img className = {classes['image-1']} src={"./mockups/Rentr/mockup-1.png"} alt="Rentr Screenshot" />
    const image2 = <img className = {classes['image-2']} src={"./mockups/Rentr/mockup-2.png"} alt="Rentr Screenshot" />
    return (
        <div className = {`${classes['image-div-1']} ${classes['image-1']}`}>
            <Slide triggerOnce = {true}>
                {image1}
            </Slide>
            <div className = {`${classes['image-div-2']} ${classes['image-2']}`}>
                <Slide triggerOnce = {true}>
                    {image2}
                </Slide>
            </div>
        </div>
    );
}
export default RentrMockup