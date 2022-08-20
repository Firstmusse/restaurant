import './CoffeHouseItem.css'


import Siera from '../../../../assets/img/Siera-coffee.svg'
import Geo from '../../../../assets/icons/geo.svg'
import Phone from '../../../../assets/icons/phone.svg'
import Like from '../../../../assets/icons/like.svg'

import BtnMore from '../../../Button/Btn-more'


function CoffeHouseItem() {
  return (
    <div className="card-container-item">
                        <img src={Siera} alt="" />
                        <div className="card-item-info">
                            <div className="card-item-info-phone">
                                <img src={Phone} alt="" />
                                <p>+996(312)31-15-06</p>
                                <a className='like' href='#'><img src={Like} alt="like" /></a>
                            </div>
                            <div className="card-item-info-adress">
                                <img src={Geo} alt="" />
                                <p>пр. Манаса, 57 А, уг. ул. Киевская</p>
                            </div>
                            
                        </div>
                        <div className="card-item-btn-more">
                        <BtnMore/>
                        </div>
                    </div>
  )
}
export default CoffeHouseItem