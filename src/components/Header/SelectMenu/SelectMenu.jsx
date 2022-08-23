import { useState } from "react";
import "./SelectMenu.css";

import { Link } from "react-router-dom";
import { titles } from "../../../constants/estabilishments";

function SelectMenu() {
  const openSelectList = (e) => {
    e.target.nextSibling.classList.toggle("active");
  };
  let [activeState, setActiveState] = useState(false);

  return (
    <li className="select-menu">
      <span
        className={activeState ? "active" : ""}
        onClick={() => setActiveState((activeState = !activeState))}
      >
        Все заведении
      </span>
      <ul>
        <li>
        <Link to='/restaraunt'>Рестораны</Link>
        </li>
        <li>
        <Link to='/coffe-house'>Кофейни</Link>
        </li>
        <li>
        <Link to='/bars'>Бары</Link>
        </li>
        <li>
        <Link to='/cafe'>Кафе</Link>
        </li>
      </ul>
    </li>
  );
}
export default SelectMenu;
