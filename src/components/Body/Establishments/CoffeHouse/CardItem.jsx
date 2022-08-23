import "./CardItem.css";
import Geo from "../../../../assets/icons/geo.svg";
import PhoneIcon from "../../../../assets/icons/phone.svg";
import Like from "../../../../assets/icons/like.svg";
import BtnMore from "../../../Button/Btn-more";
import { Link } from "react-router-dom";

function CardItem({ card, category}) {
  return (
    <div className="card-container-item">
      <img src={card.logo} alt="" />
      <div className="card-item-info">
        <div className="card-item-info-phone">
          <img src={PhoneIcon} alt="" />
          <p>{card.phone_number}</p>
          <a className="like" href="#">
            <img src={Like} alt="like" />
          </a>
        </div>
        <div className="card-item-info-adress">
          <img src={Geo} alt="" />
          <p>{card.address}</p>
        </div>
      </div>
      <div className="card-item-btn-more">
      <Link to={`${category}/${card.id}`} state={{title: card.name}}><BtnMore /></Link>
      </div>
    </div>
  );
}
export default CardItem;
