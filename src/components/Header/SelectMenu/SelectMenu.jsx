import React, { useState, useEffect } from "react";
import "./SelectMenu.css";

import { Link } from "react-router-dom";
import { getCategory } from "../../../services/categoryApi";

function SelectMenu() {
  const [activeState, setActiveState] = useState(false);
  const [list, setCategory] = useState([]);
  useEffect(() => {
    getCategory().then((value) => {
      setCategory(value);
    });
    
  }, []);
  return (
    <li className="select-menu">
      <span
        className={activeState ? "active" : ""}
        onClick={() => setActiveState(!activeState)}
      >
        Все заведения
      </span>
      <ul>
        {list.map((category) => {
          return (
            <Link key={category.id} to={`estalibishments/${category.id}`}>
              <li >{category.name}</li>
            </Link>
          );
        })}
      </ul>
    </li>
  );
}
export default SelectMenu;
