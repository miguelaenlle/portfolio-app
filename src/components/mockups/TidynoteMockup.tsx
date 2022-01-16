import classes from "./TidynoteMockup.module.css"
import { Slide } from "react-awesome-reveal";

const TidynoteMockup: React.FC<{}> = (props) => {
    
    const image1 = <img className = {classes['image-1']} src={"./mockups/Tidynote/mockup-2.png"} alt="Tidynote Screenshot" />
    const image2 = <img className = {classes['image-2']} src={"./mockups/Tidynote/mockup-1.png"} alt="Tidynote Screenshot" />
    return (
        <div className = {classes['image-1']}>
            <Slide direction = {'right'}>
                {image1}
            </Slide>
            <Slide direction = {"right"}>
                <div className = {classes['image-2']}>
                        {image2}
                </div>
            </Slide>
        </div>
    );
}
export default TidynoteMockup