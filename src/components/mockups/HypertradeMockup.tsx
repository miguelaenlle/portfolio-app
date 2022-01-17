import classes from "./HypertradeMockup.module.css";
import { Slide } from "react-awesome-reveal";

const HypertradeMockup: React.FC<{}> = (props) => {
  const image1 = (
    <img
      className={classes.image}
      src={"./mockups/Hypertrade/mockup-1.png"}
      alt="Hypertrade Screenshot"
    />
  );
  return (
    <div>
      <Slide direction={"right"} triggerOnce={true}>
        {image1}
      </Slide>
    </div>
  );
};
export default HypertradeMockup;
