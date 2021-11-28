import { FC } from "react";
import { Link } from "react-router-dom";
import { HeaderNav, Search } from "../index";
import { headerNavList } from "./headerProps";
import { useAction } from "../../hooks";

import { ReactComponent as RedHeart } from "../../img/RedHeart.svg";
import { ReactComponent as Logo } from "../../img/Logo.svg";

export const Header: FC = () => {
  const { getMovies } = useAction();
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/">
          <Logo onClick={() => getMovies("now_playing", 1)} />
        </Link>
        <HeaderNav listItem={headerNavList} />
        <Link to="/liked">
          <RedHeart className="header__liked-movie" />
        </Link>
        <Search />
      </div>
    </header>
  );
};
