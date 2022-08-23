import LiveBar from '../../../../assets/img/LiveBar-bar.svg'

import Geo from '../../../../assets/icons/geo.svg'
import PhoneIcon from '../../../../assets/icons/phone.svg'
import Like from '../../../../assets/icons/like.svg'


import BtnMore from '../../../Button/Btn-more'

function Bars({phone,address,id,name,logo}) {
  return (
    <div className="card-container-item">
    <img src={LiveBar} alt="" />
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
export default Bars