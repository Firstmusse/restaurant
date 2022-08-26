import Card from "../Card/Card";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {formatCategoryToLink} from '../../../../utils/formater'
import { getCardsByCategoryId } from "../../../../services/categoryApi";

function CardContainer({ category }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getCardsByCategoryId(category.id).then((data) => {
      setCards(data);
    });
  }, [category.id]);

  // console.log(category, 1111);
  return (
    <div className="establishments-block">
      <div className="establishments-block-container">
        <h3 className="establishments-block-container-tittle">
          {category.name} 
        </h3>
        <Link
          to={`establishments/${category.id}`}
          className="establishments-block-container-viewall"
        > 
          Смотреть все
        </Link>
      </div>
      <div className="card-container">
        {cards.map((card) => {
          return <Card 
           card={card}
           category={`/estalibishments/${category.id}`}
           key={card.id}
           />;
           
        })}
      </div>
    </div>
  );
}
export default CardContainer;
