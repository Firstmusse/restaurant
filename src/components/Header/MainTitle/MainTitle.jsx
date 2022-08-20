import iconTitle from '../../../assets/icons/icon-main-title.svg'
import './MainTitle.css'
function MainTitle() {
  return (
    <div className='title-container'>
        <img className='title-img' src={iconTitle} alt="" />
        <h1 className='title'>Chtopoest</h1>
    </div>
  )
}
export default MainTitle