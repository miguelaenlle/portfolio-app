import React from "react";
import classes from "./ViewLink.module.css";

const ViewLink: React.FC<{
  text: string;
  link: string;
  reversed: boolean;
  icon: React.ReactNode;
}> = (props) => {
  return (
    <div className={classes["link-container"]}>
      {(props.reversed) ? (
        <>
          <a href={props.link} target="_blank" className={classes['link-reversed']}>
            {props.text}
          </a>
          {props.icon}
        </>
      ) : (
        <>
          {props.icon}
          <a href={props.link} target="_blank" className={classes.link}>
            {props.text}
          </a>
        </>
      )}
    </div>
  );
};
export default ViewLink;
