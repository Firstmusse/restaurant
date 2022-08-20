import './MiddleBody.css'
import ButtonCreateAccount from '../ButtonCreateAccount/ButtonCreateAccount'

function MiddleBody() {
  return (
    <div className="backround-body">
        <h2 className="body-title">Удобно и  Вкусно</h2>
        <h3 className='body-subtitle'>Мы являемся каталогом 
           <span> Chtopoest </span>  ресторанов/кафе/баров/кофеен Бишкека</h3>
           <p className='body-subtitle-uniqueness'>Уникальность продукта заключается в том, что каталог позволяет найти все заведения города на одной платформе </p>
           <ButtonCreateAccount/>
    </div>
  )
}
export default MiddleBody