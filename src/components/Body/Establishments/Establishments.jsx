import "./Establishments.css";
import React, { useState, useEffect } from "react";
import { getCategory } from "../../../services/categoryApi";
import CardContainer from "./CardContainer/CardContainer";

function Establishments() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getCategory().then((data) => {
      setList(data);
    });
    
  }, []);

  return (
    <div className="establishments">
      <div className="container">
        <h2 className="establishments-title">Подборки заведений </h2>
        {list.map((category) => {
          return <CardContainer 
          key={category.id} 
          category={category} />;
        })}
      </div>
    </div>
  );
}
export default Establishments;
