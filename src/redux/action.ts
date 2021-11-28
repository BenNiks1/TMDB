import { fetchByCategory, fetchBySearch } from "./fetchActions";
import { MoviesActions, MoviesActionTypes } from "../types/movies";
import { Movie } from "../types/types";
import { Dispatch } from "react";
import { store } from "./store";

export const getMovies = (tab: string, page: number) =>
  fetchByCategory(tab, page);
export const onSearch = (movieName: string) => fetchBySearch(movieName);

export const setSelectedMovie =
  (id: number) => (dispatch: Dispatch<MoviesActions>) => {
    const { movies } = store.getState().movies;
    return dispatch({
      type: MoviesActionTypes.SET_SELECTED_MOVIE,
      payload: movies.filter((movie: Movie) => movie.id === id),
    });
  };

export const addLikedMovie =
  (movie: Movie, id?: number) => (dispatch: Dispatch<MoviesActions>) => {
    const likedMovies = store.getState().movies.likedMovies;
    if (!likedMovies.map((movie: Movie) => movie.id).includes(id!)) {
      return dispatch({
        type: MoviesActionTypes.ADD_LIKED_MOVIE,
        payload: likedMovies.concat(movie),
      });
    } else {
      return dispatch({
        type: MoviesActionTypes.ADD_LIKED_MOVIE,
        payload: likedMovies.filter((movie: Movie) => movie.id !== id),
      });
    }
  };

export const setSearch = (value: string) => ({
  type: MoviesActionTypes.SET_SEARCH,
  payload: value,
});
