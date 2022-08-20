import SelectMenu from "../SelectMenu/SelectMenu"
import Logo from "../Logotype/Logo"
import favorit from '../../../assets/icons/favorit.svg'
import user from '../../../assets/icons/user.svg'
import './Navigation.css'


function Navigation() {
  return (
    <div className="nav-block">
        <Logo/>
        <ul className="nav-block-list">
          <li><a href="#">Главная</a></li>
          <SelectMenu/>
          <li><a href="#">Акции</a></li>
        </ul>
        <div className="nav-block-img">
          <img src={favorit} alt="" />
          <img src={user} alt="" />
        </div>
    </div>
  )
}
export default Navigation