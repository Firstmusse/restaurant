import { Link } from "react-router-dom"
import SelectMenu from "../Header/SelectMenu/SelectMenu"
import favoritIcon from '../../assets/icons/favorit.svg'
import userIcon from '../../assets/icons/user.svg'
import './HeaderWithLogo.css'
import Logo from '../Header/Logotype/Logo'

function HeaderWithLogo() {
  return (
   
    <div className="nav-block-with-logo">
      <div className="nav-block-container-with-logo">
        <div className="nav-block-container-with-logo-group">
        <Logo/>
      <ul className="nav-block-list">
        <li>
          <Link to='/'>Главная</Link>
        </li>
        <SelectMenu />
        <li>
        <Link to='/action'>Акции</Link>
        </li>
      </ul>
        </div>
      <div className="nav-block-img">
        <img src={favoritIcon} alt="" />
        <img src={userIcon} alt="" />
      </div>
      </div>
      
    </div>
  )
}
export default HeaderWithLogo