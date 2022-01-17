import React from "react";

const SizeContext = React.createContext({
  width: 1920,
  height: 1080,
  isLarge: false,
  updateSettings: (windowDimensions: {[key: string]: number}) => {}
});

export default SizeContext;
