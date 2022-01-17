import { useState } from "react";
import SizeContext from "./size-context";

const SizeProvider: React.FC<{}> = (props) => {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [isLarge, setIsLarge] = useState(false);
  const updateSettings = (windowDimensions: {
    [key: string]: number;
  }): void => {
    setWidth(windowDimensions.width);
    setHeight(windowDimensions.height);
    setIsLarge(windowDimensions.width > 1000);
  };
  const sizeContext = {
    width,
    height,
    isLarge,
    updateSettings,
  };
  return (
    <SizeContext.Provider value={sizeContext}>
      {props.children}
    </SizeContext.Provider>
  );
};

export default SizeProvider;
