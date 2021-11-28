import { Movie } from "../types/types";
import { MoviesActions, MoviesActionTypes } from "../types/movies";

interface MovieState {
  movies: Movie[];
  likedMovies: Movie[];
  selectedMovie: Movie[];
  searchResult: Movie[];
  moviePerPage: number;
  currentPage: number;
  totalPages: number;
  search: string;
}

const initialState: MovieState = {
  movies: [],
  likedMovies: [],
  selectedMovie: [],
  searchResult: [],
  moviePerPage: 20,
  currentPage: 1,
  totalPages: 0,
  search: "",
};

export const movieReducer = (
  state = initialState,
  action: MoviesActions
): MovieState => {
  switch (action.type) {
    case MoviesActionTypes.SET_MOVIES:
      return {...state, movies: action.payload, };
    case MoviesActionTypes.SET_PAGE:
      return {...state, currentPage:action.payload }
    case MoviesActionTypes.SET_TOTAL_PAGES:
      return {...state, totalPages:action.payload}
    case MoviesActionTypes.ON_SEARCH:
      return { ...state, movies: action.payload };
    case MoviesActionTypes.SET_SELECTED_MOVIE:
      return {...state, selectedMovie: action.payload };
    case MoviesActionTypes.SET_SEARCH:
      return { ...state, search: action.payload };
    case MoviesActionTypes.ADD_LIKED_MOVIE:
      return {...state, likedMovies: action.payload };

    default:
      return state;
  }
};

