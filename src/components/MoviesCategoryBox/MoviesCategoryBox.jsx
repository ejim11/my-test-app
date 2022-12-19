import { useState } from "react";
import classes from "./MoviesCategoryBox.module.scss";
import { client } from "../../axiosconfig";
import MoviesCategoryItem from "../MoviesCategoryItem/MoviesCategoryItem";

const MoviesCategoryBox = () => {
  const [searchText, setSearchText] = useState("");

  const onChangeSearchInput = async (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className={classes["movies-category-box"]}>
      <div className={classes["search-box"]}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          value={searchText}
          id="search"
          onChange={onChangeSearchInput}
        />
      </div>
      <MoviesCategoryItem
        moviesCategoryName={"Comics"}
        genre={"avengers"}
        search={searchText}
      />
      <MoviesCategoryItem
        moviesCategoryName={"Romance"}
        genre={"romance"}
        search={searchText}
      />
    </section>
  );
};

export default MoviesCategoryBox;
