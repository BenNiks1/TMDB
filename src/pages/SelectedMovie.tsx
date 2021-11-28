import { FC } from "react";
import { LikeBtn } from "../components";
import { useAction, useTypedSelector } from "../hooks";
import { Movie } from "../types/types";

export const SelectedMovie: FC = () => {
  const { addLikedMovie } = useAction();
  const {likedMovies, selectedMovie} = useTypedSelector((state)=> state.movies)
  
  const toggleLikeIcon = (movie: Movie): void => {
    addLikedMovie(movie,movie.id);
  };
  return (
    <>
      {selectedMovie &&
        selectedMovie.map((movie) => (
          <div className="movie container" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster"
            />
            <LikeBtn
              likedMovies={likedMovies}
              movie={movie}
              toggleLikeIcon={toggleLikeIcon}
            />
            <div className="movie__inner">
              <h2 className="movie__title">{movie.title}</h2>
              <p className="movie__date">Release date: {movie.release_date}</p>
              <p className="movie__vote-average">
                vote average: {movie.vote_average}
              </p>
              <p className="movie__vote-count">
                vote count:
                {movie.vote_count}
              </p>
              <p className="movie__description">{movie.overview}</p>
            </div>
          </div>
        ))}
    </>
  );
};
