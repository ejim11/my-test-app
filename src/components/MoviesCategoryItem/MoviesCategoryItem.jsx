import { client } from "../../axiosconfig";
import { useEffect, useState } from "react";
import classes from "./MoviesCategoryItem.module.scss";

const MoviesCategoryItem = (props) => {
  const [moviesList, setMoviesList] = useState([]);

  const getMovies = async (genre) => {
    const res = await client.get(`/?apikey=b03f5677&s=${genre}`);
    setMoviesList(res.data.Search);
  };
  let filteredMovie;

  if (props.search) {
    filteredMovie = moviesList.filter(
      (item) => item.Title.toLowerCase() === props.search.toLowerCase()
    );
    console.log(filteredMovie);
  }

  useEffect(() => {
    getMovies(props.genre);
  }, [props.genre]);

  return (
    <div className={classes.movies}>
      {filteredMovie ? (
        <div className={classes["searched-movie-list"]}>
          {filteredMovie.map((item, i) => (
            <div key={i} className={classes["searched-movie"]}>
              <img src={item.Poster} alt={item.Title} />
              <p className={classes.title}>{item.Title}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className={classes.category}>{props.moviesCategoryName}</p>
          <div className={classes["movies-list"]}>
            {moviesList.map((item, i) => (
              <div key={i} className={classes.movie}>
                <img src={item.Poster} alt={item.Title} />
                <p className={classes.title}>{item.Title}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesCategoryItem;
