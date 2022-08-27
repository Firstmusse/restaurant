import './Footer.css'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/icons/fb-icon.svg'
import Gmail from '../../assets/icons/gmail-icon.svg'
import Instagram from '../../assets/icons/instagram-icon.svg'


function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
            <div className="footer-wrapper-contant">
            <div className="footer-nav">
          <a href="#">О нас</a>
          <Link to='/allEstabilshments'>Все заведения</Link>
          <Link to='/action'>Акции</Link>
        </div>
        <div className="footer-social">
            <p>Напишите нам:</p>
          <div className="footer-social-container">
            <img src={Facebook} alt="" />
            <a href="#">Facebook</a>
          </div>
          <div className="footer-social-container">
            <img src={Gmail} alt="" />
            <a href="#">Gmail</a>
          </div>
          <div className="footer-social-container">
            <img src={Instagram} alt="" />
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-order">
          <a href="#">Доставка</a>
          <a href="#">Оплата</a>
        </div>
            </div>
        </div>
    </div>
  );
}
export default Footer