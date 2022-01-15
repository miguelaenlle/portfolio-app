import React from "react";
import classes from "./Subheader.module.css"

const Subheader: React.FC<{content: string}> = (props) => {
    return (
        <h1 className = {classes.subheader}>{props.content}</h1>
    );
}
export default Subheader