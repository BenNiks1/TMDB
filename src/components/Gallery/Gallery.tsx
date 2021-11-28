import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../types/types";
import { useAction, useTypedSelector } from "../../hooks";
import { LikeBtn } from "../LikeBtn";

interface MovieListProps {
  movies: Movie[];
}

export const Gallery: FC<MovieListProps> = ({ movies }) => {
  const { setSelectedMovie, addLikedMovie } = useAction();
  const likedMovies:Movie[] = useTypedSelector((state) => state.movies.likedMovies);

  useEffect(() => {
    !likedMovies.length && localStorage.removeItem("liked");
  }, [likedMovies]);

  const toggleLikeIcon = (movie: Movie): void => {
    addLikedMovie(movie, movie.id);
  };

  return (
    <ul className="gallery__inner container">
      {movies?.length ? (
        movies.map((movie) => (
          <li className="gallery__item" key={movie.id}>
            <LikeBtn
              likedMovies={likedMovies}
              movie={movie}
              toggleLikeIcon={toggleLikeIcon}
            />
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt="poster"
                onClick={() => {
                  setSelectedMovie(movie.id);
                }}
              />
              <h2 className="gallery__item-title">{movie.title}</h2>
            </Link>
          </li>
        ))
      ) : (
        <li className="gallery__not-found">not found</li>
      )}
    </ul>
  );
};
