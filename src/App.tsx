import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { useAction, useTypedSelector } from "./hooks";
import {Home,SelectedMovie,Liked,Popular,TopRated,Upcoming} from "./pages";

export const App = () => {
  const { addLikedMovie } = useAction();

  const likedMoviesStorage = JSON.parse(localStorage.getItem("liked") || "[]");
  console.log(likedMoviesStorage);
  
  useEffect(() => {
    addLikedMovie(likedMoviesStorage);
  }, []);

  useTypedSelector((state) => {
    if (state.movies.likedMovies.length) {
      localStorage.setItem("liked", JSON.stringify(state.movies.likedMovies));
    }
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/top_rated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Route exact path="/liked" component={Liked} />
        <Route exact path={`/movie/:id`} component={SelectedMovie} />
      </Switch>
    </>
  );
};
