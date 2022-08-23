import React from "react";
import { useParams } from "react-router-dom";
import { titles } from "../../constants/estabilishments";

function CoffeMore() {
    
const params = useParams()
   console.log(params);
  return (
        <div className="coffe-more">
            <h2>{params.category}</h2>
            <h3></h3>
        </div>
   )
}
export default CoffeMore