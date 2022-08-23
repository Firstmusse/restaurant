import ActionImg from "../../assets/img/action-post-img.svg";
import "./Action.css";
import React from "react";
import Discount from "../../components/Body/Discount/Discount";

function Action() {
  return (
    <div className="action-block">
      <div className="action-block-container">
        <h2 className="action-block-title">
          Акции и новости{" "}
          <React.Fragment>
            <br />
          </React.Fragment>
          в заведениях Бишкека
        </h2>
        <h3 className="action-block-time-interval">июнь-июль 2022</h3>
        <div className="action-block-post">
          <div className="action-add-post-data">
            <p>24 июня 2022 в 13.00</p>
          </div>
          <div className="action-block-post-name">Sierra coffee</div>
        </div>
        <div className="action-post-wrapper">
          <div className="action-block-post-title">
            <h2>НОВИНКА</h2>
          </div>
          <div className="action-post-img">
            <img src={ActionImg} alt="1" />
            <img src={ActionImg} alt="2" />
            <img src={ActionImg} alt="3" />
          </div>
          <div className="action-post-description">
            <p>
              А ещё предприниматели в сети интернет освещают чрезвычайно
              интересные особенности картины в целом, однако конкретные выводы,
              разумеется, превращены в посмешище, хотя само их существование
              приносит несомненную пользу обществу. Не следует, однако,
              забывать, что глубокий уровень погружения играет важную роль в
              формировании экспериментов, поражающих по своей масштабности и
              грандиозности. Может быть так не должно было{" "}
            </p>
          </div>
          <button className="show-all-btn">Показать полностью</button>
        </div>
        
        <div className="action-block-post">
          <div className="action-add-post-data">
            <p>24 июня 2022 в 13.00</p>
          </div>
          <div className="action-block-post-name">Sierra coffee</div>
        </div>
        <div className="action-post-wrapper">
          <div className="action-block-post-title">
            <h2>НОВИНКА</h2>
          </div>
          <div className="action-post-img">
            <img src={ActionImg} alt="1" />
            <img src={ActionImg} alt="2" />
            <img src={ActionImg} alt="3" />
          </div>
          <div className="action-post-description">
            <p>
              А ещё предприниматели в сети интернет освещают чрезвычайно
              интересные особенности картины в целом, однако конкретные выводы,
              разумеется, превращены в посмешище, хотя само их существование
              приносит несомненную пользу обществу. Не следует, однако,
              забывать, что глубокий уровень погружения играет важную роль в
              формировании экспериментов, поражающих по своей масштабности и
              грандиозности. Может быть так не должно было{" "}
            </p>
          </div>
          <button className="show-all-btn">Показать полностью</button>
        </div>
      </div>

      <Discount />
    </div>
  );
}
export default Action;
