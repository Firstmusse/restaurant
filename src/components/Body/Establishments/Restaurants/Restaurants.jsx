import './Restaurant.css'
import BtnMore from '../../../Button/Btn-more'


import Zerno from '../../../../assets/img/Zerno-restaraunt.svg'

import Geo from '../../../../assets/icons/geo.svg'
import PhoneIcon from '../../../../assets/icons/phone.svg'
import Like from '../../../../assets/icons/like.svg'


function Restaurants({phone,address,id,name,logo}) {
  return (
    <div className="card-container-item">
    <img src={Zerno} alt="" />
    <div className="card-item-info">
        <div className="card-item-info-phone">
            <img src={PhoneIcon} alt="" />
            <p>{phone}</p>
            <a className='like' href='#'><img src={Like} alt="like" /></a>
        </div>
        <div className="card-item-info-adress">
            <img src={Geo} alt="" />
            <p>{address}</p>
        </div>
        
    </div>
    <div className="card-item-btn-more">
        <BtnMore/>
    </div>
</div>
  )
}
export default Restaurants