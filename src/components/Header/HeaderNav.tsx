import { FC } from "react";
import { Link } from "react-router-dom";
import { NavTab } from "../../types/types";

interface NavListProps {
  listItem:NavTab[];
}

export const HeaderNav: FC<NavListProps> = ({ listItem }) => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {listItem.map(({ value, name, id }) => (
          <li className="list__item" key={id}>
            <Link
              to={value === "now_playing" ? "/" : value}
              className="list__item-link"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
