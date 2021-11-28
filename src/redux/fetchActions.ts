import API from "../api";
import { Dispatch } from "redux";
import { MoviesActions, MoviesActionTypes } from "../types/movies";

export const fetchByCategory =
  (tab: string = "now playing", page: number) =>
  async (dispatch: Dispatch<MoviesActions>) => {
    try {
      const res = await API.get(`/movie/${tab}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: page,
        },
      });
      dispatch({ type: MoviesActionTypes.SET_MOVIES, payload: res.data.results });
      dispatch({ type: MoviesActionTypes.SET_PAGE, payload: res.data.page });
      dispatch({ type: MoviesActionTypes.SET_TOTAL_PAGES, payload: res.data.total_pages})
    } catch (err) {
      console.error(err);
    }
  };

export const fetchBySearch =
  (movieName: string) => async (dispatch: Dispatch<MoviesActions>) => {
    try {
      const res = await API.get(`/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
          query: movieName,
          include_adult: false,
        },
      });
      dispatch({ type: MoviesActionTypes.ON_SEARCH, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };
