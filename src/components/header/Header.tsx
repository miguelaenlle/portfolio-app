import { useState } from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
const Header: React.FC<{
  navBackground: string;
  selectedPage: string;
  onSelectPage: (page: string) => void;
  windowDimensions: { [key: string]: number };
}> = (props) => {

  const headerClass = `${classes.header} ${
    props.navBackground === "appBarSolid" ? classes.white : classes.clear
  }`;

  return (
    <header className={headerClass}>
      {props.navBackground === "appBarSolid" && (
        <h2 className={classes["name-header"]}>Miguel Aenlle</h2>
      )}

      <HeaderButton
        text={"About"}
        changePage={props.onSelectPage}
        currentPage={props.selectedPage}
      />
      <HeaderButton
        text={"Skills"}
        changePage={props.onSelectPage}
        currentPage={props.selectedPage}
      />
      <HeaderButton
        text={"Work"}
        changePage={props.onSelectPage}
        currentPage={props.selectedPage}
      />
      <HeaderButton
        text={"Contact"}
        changePage={props.onSelectPage}
        currentPage={props.selectedPage}
      />
    </header>
  );
};
export default Header;
