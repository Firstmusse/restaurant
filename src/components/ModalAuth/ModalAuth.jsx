import './ModalAuth.css'


function ModalAuth() {
  return (
    <div className='modal-auth'>

            <div className="modal-auth-container">
                  <div className="modal-auth-title">
                      <h3>Регистрация</h3>
                  </div>
                  <input type="text" className='modal-input modal-input-mail' placeholder='Почта'/>
                  <input type="text" className='modal-input modal-input-pass' placeholder='Пароль' />
                  <input type="text" className='modal-input modal-input-pass' placeholder='Повторить пароль'/>
                  <button className='modal-reg-btn'>Зарегистрироваться</button>
                  <a href="#" className='account-auth'>У меня уже есть аккаунт</a>
            </div>

    </div>
  )
}
export default ModalAuth