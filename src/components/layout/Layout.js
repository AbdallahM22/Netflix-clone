import React, { Fragment, useContext } from "react";
import NavBar from "./NavBar";
import classes from './Layout.module.css';
import ThemeContext from "../store/theme-context";

const Layout = (props) => {
  const ctx = useContext(ThemeContext);
  const containerTheme = ctx.dark ? classes['container-dark'] : classes['container-light'];
  return (
    <Fragment>
      <NavBar />
      <div className={`min-vh-100 py-3 ${containerTheme}`}>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
