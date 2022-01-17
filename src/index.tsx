import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SizeProvider from "./context/SizeProvider";

ReactDOM.render(
  <SizeProvider>
    <App />
  </SizeProvider>,
  document.getElementById("root")
);
