import { Movie } from "./types";

export enum MoviesActionTypes {
  SET_MOVIES = "SET_MOVIES",
  ON_SEARCH = "ON_SEARCH",
  ADD_LIKED_MOVIE = "ADD_LIKED_MOVIE",
  SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE",
  SET_SEARCH = "SET_SEARCH",
  SET_PAGE = "SET_PAGE",
  SET_TOTAL_PAGES = "SET_TOTAL_PAGES",
}

export type MoviesActions =
  | setMoviesAction
  | setPage
  | setTotalPages
  | onSearchAction
  | addLikedMovieAction
  | setSelectedMovieAction
  | setSearchAction;

export interface setPage {
  type: MoviesActionTypes.SET_PAGE;
  payload: number;
}

export interface setTotalPages {
  type: MoviesActionTypes.SET_TOTAL_PAGES;
  payload: number;
}

export interface setMoviesAction {
  type: MoviesActionTypes.SET_MOVIES;
  payload: Movie[];
}

export interface onSearchAction {
  type: MoviesActionTypes.ON_SEARCH;
  payload: Movie[];
}

export interface addLikedMovieAction {
  type: MoviesActionTypes.ADD_LIKED_MOVIE;
  payload: Movie[];
}

export interface setSelectedMovieAction {
  type: MoviesActionTypes.SET_SELECTED_MOVIE;
  payload: Movie[];
}

export interface setSearchAction {
  type: MoviesActionTypes.SET_SEARCH;
  payload: string;
}
