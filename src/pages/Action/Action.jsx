import React, { useEffect, useState } from "react";

import { getAction } from "../../services/categoryApi";


import "./Action.css";
import ActionImg from "../../assets/img/action-post-img.svg";
import Discount from "../../components/Body/Discount/Discount";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";

  
function Action() {
  
  const [actionList, setActionList] = useState([]);

  useEffect(() => {
    getAction().then((data) => {
      
      setActionList(data)
      console.log(data);

      console.log(actionList)
    });
  }, []);
       
  return (
    <div className="action-block">
      <HeaderWithLogo />
      <div className="action-block-container">
        <h2 className="action-block-title">
          Акции и новости
          <React.Fragment>
            <br />
          </React.Fragment>
          в заведениях Бишкека
        </h2>
        <h3 className="action-block-time-interval">июнь-июль 2022</h3>
        {actionList.map((post)=>{

          return(
            <div key={post.id} className="action-block-post">
          <div className="action-post-wrapper">
            <div className="action-add-post-data">
            <p>{post.date}</p>             
              
            </div>
            <div className="action-block-post-name">{post.rest_name}</div>
            <div className="action-block-post-title">
              <h2>{post.name}</h2>
            </div>
            <div className="action-post-img">
              <img src={ActionImg} alt="1" />
              <img src={ActionImg} alt="2" />
              <img src={ActionImg} alt="3" />
            </div>
            <div className="action-post-description">
              <p>
                {post.text}
              </p>
            </div>
            <button className="show-all-btn">Показать полностью</button>
          </div>
        </div>
          )
        })}
        
      </div>

      <Discount />
    </div>
  );
}
export default Action;
