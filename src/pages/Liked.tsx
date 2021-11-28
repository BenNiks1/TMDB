import { useState, useMemo, FC } from "react";
import { useTypedSelector } from "../hooks";
import { Gallery } from "../components";
import ReactPaginate from "react-paginate";
import { Movie } from "../types/types";

export const Liked:FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)  

  const {
    moviePerPage,
    likedMovies,
    search: searchString,
  } = useTypedSelector((state) => state.movies);

  const pageNumbers:number = useMemo(()=>Math.ceil(likedMovies.length / moviePerPage), [likedMovies,moviePerPage]);
  const offset:number = useMemo(()=>currentPage * moviePerPage,[currentPage,moviePerPage])
  const filteredMovies:Movie[] = useMemo(() => likedMovies.filter(({title}) => title.toLowerCase().includes(searchString)), [searchString, likedMovies])
  const movies:Movie[] = useMemo(()=>filteredMovies.slice(offset, offset+moviePerPage), [filteredMovies,offset,moviePerPage])

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
        pageCount={pageNumbers}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={({selected})=>{setCurrentPage(selected)}}
      />
    </>
  );
};
