import classes from "./Mockup.module.css";
import RentrMockup from "../mockups/RentrMockup";
import HypertradeMockup from "../mockups/HypertradeMockup";
import ScatterMockup from "../mockups/ScatterMockup";
import TidynoteMockup from "../mockups/TidynoteMockup";
import { useContext } from "react";
import SizeContext from "../../context/size-context";

const Mockup: React.FC<{ mockup: string  }> = (props) => {
  const sizeCtx = useContext(SizeContext);
  const isLarge = sizeCtx.isLarge;

  return (
    <div className={classes["content-wrapper"]}>
      {props.mockup === "Rentr" && <RentrMockup />}
      {props.mockup === "Hypertrade" && <HypertradeMockup />}
      {props.mockup === "Scatter" && <ScatterMockup />}
      {props.mockup === "Tidynote" && <TidynoteMockup />}
    </div>
  );
};
export default Mockup;
