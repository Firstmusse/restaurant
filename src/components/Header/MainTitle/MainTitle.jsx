import Logo from '../../../assets/logo.svg'
import './MainTitle.css'
function MainTitle() {
  return (
    <div className='title-container'>
        <img className='title-img' src={Logo} alt="" />
    </div>
  )
}
export default MainTitle