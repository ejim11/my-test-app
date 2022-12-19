import { client } from "../../axiosconfig";
import { useEffect, useState } from "react";
import classes from "./MoviesCategoryItem.module.scss";

const MoviesCategoryItem = (props) => {
  const [moviesList, setMoviesList] = useState([]);

  const getMovies = async (genre) => {
    const res = await client.get(`/?apikey=b03f5677&s=${genre}`);
    setMoviesList(res.data.Search);
    console.log(res.data.Search);
  };

  useEffect(() => {
    getMovies(props.genre);
  }, [props.genre]);

  return (
    <div className={classes.movies}>
      <p className={classes.category}>{props.moviesCategoryName}</p>
      <div className={classes["movies-list"]}>
        {moviesList.map((item, i) => (
          <div key={i} className={classes.movie}>
            <img src={item.Poster} alt={item.Title} />
            <p className={classes.title}>{item.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesCategoryItem;
