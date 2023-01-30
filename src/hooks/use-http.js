import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import ThemeContext from "../components/store/theme-context";

const useHttp = (url, trend = false)=> {
    const ctx = useContext(ThemeContext);
    const searchValue = ctx.input;
    let query;
    if (!trend) {
        query = searchValue.length > 0 ? "/search" : "/discover";
    } else {
        query = '';
    }
    const API = `https://api.themoviedb.org/3${query}/${url}`;
    const [movies, setMovies] = useState([]);
  
    const fetchMovies = useCallback(async () => {
      const data = await axios.get(API, {
        params: {
          api_key: "17a6f02738a0ec01d7902277c3a53320",
          query: ctx.input,
        },
      });
      const transformedData = data.data.results.map(ele=> ({
        id: ele.id, 
        img_path: ele.poster_path,
        title: ele.title || ele.name
      }));
      setMovies(transformedData);
    }, [API, ctx.input]);
  
    useEffect(() => {
      fetchMovies();
    }, [fetchMovies]);
    return movies;
}

export default useHttp;