import classes from "./ScatterMockup.module.css"
import { Slide } from "react-awesome-reveal";

const ScatterMockup: React.FC<{}> = (props) => {
    const image1 = <img src={"./mockups/Scatter/mockup-1.png"} alt="Scatter Screenshot" />
    const image2 = <img src={"./mockups/Scatter/mockup-2.png"} alt="Scatter Screenshot" />
    return (
        <div className = {classes['image-1']}>
            <Slide>
                {image1}
            </Slide>
            <div className = {classes['image-2']}>
                <Slide>
                    {image2}
                </Slide>
            </div>
        </div>
    );
}
export default ScatterMockup