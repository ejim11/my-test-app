import MoviesCategoryBox from "../MoviesCategoryBox/MoviesCategoryBox";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main>
      <section className={classes["first-section"]}>
        <h2>
          Watch
          <br /> something <br /> incredible.
        </h2>
      </section>
      <MoviesCategoryBox />
    </main>
  );
};

export default Main;
