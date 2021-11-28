import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Gallery } from "../components";
import { useAction, useTypedSelector, useThrottle } from "../hooks";

export const TopRated = () => {
  const { getMovies, onSearch } = useAction();

  const { currentPage, totalPages, movies } = useTypedSelector(
    (state) => state.movies
  );

  const searchString: string = useTypedSelector((state) => state.movies.search);

  useEffect(() => {
    if (!searchString.length) {
      getMovies("top_rated", 1);
    }
  }, [searchString]);

  useThrottle(
    () => {
      onSearch(searchString);
    },
    500,
    [searchString]
  );

  return (
    <>
      <Gallery movies={movies} />
      <ReactPaginate
        breakLabel={"..."}
        containerClassName={"pagination"}
        pageClassName={"page-btn"}
        activeClassName={"active"}
        breakClassName={"dots"}
        nextClassName={"hide"}
        previousClassName={"hide"}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        initialPage={0}
        forcePage={currentPage - 1}
        onPageChange={({ selected }) => {
          getMovies("top_rated", selected + 1);
        }}
      />
    </>
  );
};
