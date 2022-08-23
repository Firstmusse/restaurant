import "./Establishments.css";
import React, { useState, useEffect } from "react";
import { getEstablishmentsList } from "../../../services/api";

import CardItem from "./CoffeHouse/CardItem";
import { Link } from "react-router-dom";
import  { titles } from "../../../constants/estabilishments"


console.log(titles);
function Establishments() {
  const [list, setList] = useState({});
  console.log(list);
  useEffect(() => {
    getEstablishmentsList().then((data) => {
      setList(data);
    });
  }, []);

  return (
    <div className="establishments">
      <div className="container">
        <h2 className="establishments-title">Подборки заведений </h2>
        {Object.keys(list).map((elem) => {
          return (
            <div className="establishments-block">
              <div className="establishments-block-container">
                <h3 className="establishments-block-container-tittle">
                  {titles[elem]}
                </h3>
                <Link to={elem} className="establishments-block-container-viewall">Смотреть все</Link>
              </div>
              <div className="card-container">
                {list[elem].map((card) => {
                  return <CardItem card={card} key={card.id} category={elem}/>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Establishments;
