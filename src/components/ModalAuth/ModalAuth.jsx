import "./ModalAuth.css";
import Mail from "../../assets/icons/gmail-icon.svg";

import AuthTwitter from "../../assets/auth-icon/Twitter-auth.svg";
import AuthGmail from "../../assets/auth-icon/Gmail-auth.svg";
import AuthFacebook from "../../assets/auth-icon/Facebook-auth.svg";

function ModalAuth() {
  return (
    <div className="modal-auth">
      <div className="modal-auth-container">
        <span className="close-modal">X</span>
        <div className="modal-auth-title">
          <h3>Регистрация</h3>
        </div>

        <div className="modal-mail-group">
          <input
            type="text"
            className="modal-input modal-input-mail"
            placeholder="Почта"
          />
        </div>
        <input
          type="password"
          className="modal-input modal-input-pass"
          placeholder="Пароль"
        />
        <input
          type="password"
          className="modal-input modal-input-pass"
          placeholder="Повторить пароль"
        />
        <button className="modal-reg-btn">Зарегистрироваться</button>

        <a href="#" className="account-auth">
          У меня уже есть аккаунт
        </a>

        <div className="auth-block">
          <h3>Вход через:</h3>
          <div className="auth-block-icon">
            <a href="#">
              <img src={AuthTwitter} alt="" />
            </a>
            <a href="#">
              <img src={AuthGmail} alt="" />
            </a>
            <a href="#">
              <img src={AuthFacebook} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalAuth;
