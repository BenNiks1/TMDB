import { FC } from "react";
import { Movie } from "../../types/types";

interface LikedBtnProps {
  likedMovies: Movie[];
  movie: Movie;
  toggleLikeIcon: (movie: Movie) => void;
}

export const LikeBtn: FC<LikedBtnProps> = ({
  likedMovies,
  movie,
  toggleLikeIcon,
}) => {
  return (
    <img
      src={
        likedMovies.map(({ title }: Movie) => title).includes(movie.title)
          ? "/redHeart.svg"
          : "/heart.svg"
      }
      alt="like"
      className="gallery__like"
      onClick={() => toggleLikeIcon(movie)}
    />
  );
};
