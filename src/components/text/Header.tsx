import React from "react";
import classes from "./Header.module.css"

const Header: React.FC<{content: string}> = (props) => {
    return (
        <h1 className = {classes.header}>{props.content}</h1>
    );
}
export default Header