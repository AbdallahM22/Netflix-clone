import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import TogglerButton from "../UI/TogglerButton";
import classes from "./Navbar.module.css";
import ThemeContext from "../store/theme-context";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const ctx = useContext(ThemeContext);
  let logo, linkTheme, navBG;

  if (!ctx.dark) {
    logo = classes["logo-light"];
    linkTheme = classes["link-light"];
    navBG = classes["nav-light"];
  } else {
    logo = classes["logo-dark"];
    linkTheme = classes["link-dark"];
    navBG = classes["nav-dark"];
  }
  const inputHandler = (event) => {
    ctx.inputHandler(event.target.value);
  };
  const iconClasses = ctx.input.trim().length !== 0 ? classes["icon-hide"] : "";

  // for toggle theme
  const changeThemeHandler = () => {
    ctx.toggleMode();
  };

  const moverClasses = !ctx.dark ? classes.right : "";
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${navBG}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <span className={logo}>REACTFLIX</span>
        </Link>
        <button
          className={`navbar-toggler ${classes["nav-toggler"]}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`nav-link `} aria-current="page" to="/movies">
                {({ isActive }) => (
                  <span
                    className={`${classes.link} ${linkTheme}
                  ${isActive ? classes.active : undefined}
                    `}
                  >
                    MOVIES
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link `} aria-current="page" to="/shows">
                {({ isActive }) => (
                  <span
                    className={`${classes.link} ${linkTheme}
                  ${isActive ? classes.active : undefined}
                    `}
                  >
                    shows
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link `} aria-current="page" to="/trending">
                {({ isActive }) => (
                  <span
                    className={`${classes.link} ${linkTheme}
                  ${isActive ? classes.active : undefined}
                    `}
                  >
                    trending
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link `} aria-current="page" to="/pricing">
                {({ isActive }) => (
                  <span
                    className={`${classes.link} ${linkTheme}
                  ${isActive ? classes.active : undefined}
                    `}
                  >
                    pricing
                  </span>
                )}
              </NavLink>
            </li>
            
          </ul>
          <form
            className="col-3 position-relative me-2 overflow-hidden"
            role="search"
          >
            <input
              className={`form-control w-100 ${classes.form}`}
              type="search"
              placeholder="search whatever you want"
              aria-label="Search"
              onChange={inputHandler}
            />
            <BsSearch className={`${classes.icon} ${iconClasses}`} />
          </form>
        </div>
        <div className={classes["toggler-container"]}>
          <TogglerButton onClick={changeThemeHandler} move={moverClasses} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
