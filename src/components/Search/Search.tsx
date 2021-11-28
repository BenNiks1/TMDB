import React, { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { useAction, useTypedSelector } from "../../hooks";

import { ReactComponent as SearchSvg } from "../../img/Search.svg";

export const Search: FC = () => {
  const { setSearch } = useAction();
  const search = useTypedSelector((state) => state.movies.search);
  const history = useHistory();

  useEffect(() => {
    history.listen(() => setSearch(""));
  }, [history]);

  return (
    <div className="search__form">
      <input
        type="search"
        placeholder="Search"
        className="search__form-input"
        value={search}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value.trim());
        }}
      />
      <SearchSvg className="search__form-icon" />
    </div>
  );
};

