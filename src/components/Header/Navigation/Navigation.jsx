import SelectMenu from "../SelectMenu/SelectMenu";
import favorit from "../../../assets/icons/favorit.svg";
import user from "../../../assets/icons/user.svg";
import "./Navigation.css";
// import Restaraunt from "../../../pages/Restaraunt/Restaraunt";
 import { Link } from "react-router-dom";


function Navigation() {
  
  return (
   
    <div className="nav-block">
      <div className="nav-block-container">
      <ul className="nav-block-list">
        <li>
          <Link to='/'>Главная</Link>
        </li>
        <SelectMenu />
        <li>
        <Link to='/action'>Акции</Link>
        </li>
      </ul>
      <div className="nav-block-img">
        <img src={favorit} alt="" />
        <img src={user} alt="" />
      </div>
      </div>
      
    </div>
    
  );
}
export default Navigation;
