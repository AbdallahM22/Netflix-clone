import React, { Fragment } from "react";
import Posters from "./posters/PostersList";

import useHttp from "../hooks/use-http";

const Movies = () => {
  const movies = useHttp("movie");

  return (
    <Fragment>
      <div className="container">
        {movies.length !== 0 && <Posters posters={movies}></Posters>}
      </div>
    </Fragment>
  );
};

export default Movies;
