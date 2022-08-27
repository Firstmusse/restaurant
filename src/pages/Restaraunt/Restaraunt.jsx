import React,{useParams, useState, useEffect} from "react";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import {getCategory} from "../../services/categoryApi"



function CategoryPage() {
  
  // const [cate, setCategory] = useState([])
  
  // useEffect(() => {
  //   getCategory().then((value) => {
  //     setCategory(value);
  //   });
   
  // }, []);
  

    
  return (
    <div>
      <HeaderWithLogo/>
            <h1>
                Страница с 
            </h1>
            

    </div>
  )
}
export default CategoryPage