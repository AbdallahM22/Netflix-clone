
import Posters from "./posters/PostersList";
import useHttp from "../hooks/use-http";

const Shows = () => {
  
    const movies = useHttp('tv');
  return (
    <div className="container">
      {movies.length !== 0 && <Posters posters={movies}></Posters>}
    </div>
  );
};

export default Shows;
