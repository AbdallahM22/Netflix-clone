import React, { useCallback, useContext, useEffect, useState } from "react";
import Posters from "./posters/PostersList";
import useHttp from "../hooks/use-http";

const Trending = () => {
  
  const movies = useHttp('trending/all/week', true);
  return (
    <div className="container">
      {movies.length !== 0 && <Posters posters={movies}></Posters>}
    </div>
  );
};

export default Trending;
