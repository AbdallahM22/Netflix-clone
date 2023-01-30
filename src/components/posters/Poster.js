import React, { Fragment, useContext, useState } from "react";
import { AiFillPlayCircle } from 'react-icons/ai';
import ThemeContext from "../store/theme-context";
import classes from './Poster.module.css';
import notFoundImage from '../../images/notFound.jpg';
import TrailerModal from "../UI/TrailerModal";
const imageUrl = "https://image.tmdb.org/t/p/w500";

const Poster = ({ poster }) => {
    const ctx = useContext(ThemeContext);
    const titleTheme = !ctx.dark ? classes['title-light']: classes['title-dark'];
    const [showTrailer, setShowTrailer] = useState(false);

    const showingTrailerHandler = ()=> {
      setShowTrailer(true);
    }

    const closeTrailerHandler = ()=> {
      setShowTrailer(false);
    }
    return (
    <Fragment>
      {showTrailer && <TrailerModal onClose={closeTrailerHandler} title={poster.title}/>}
      <div className={`position-relative ${classes.card}`} onClick={showingTrailerHandler}>
        <img
          className={`img-fluid ${classes.image} h-100 w-100`}
          src={poster.img_path ?`${imageUrl}${poster.img_path}`:notFoundImage}
          alt=''
        />
        <AiFillPlayCircle className={classes.icon}/>
      </div>
      <p className={`mt-2 text-center ${titleTheme}`}>{poster.title}</p>
    </Fragment>
  );
};

export default Poster;
