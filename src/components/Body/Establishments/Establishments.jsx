import './Establishments.css'

import CoffeHouseItem from './CoffeHouse/CoffeHouseItem'
import Restaurants from './Restaurants/Restaurants'
import Bars from './Bars/Bars'


function Establishments() {
  return (
    
    <div className='establishments'>

       <div className="container">
       <h2 className='establishments-title'>Подборки заведений </h2>
            <div className="establishments-block">
                <div className="establishments-block-container">
                    <h3 className='establishments-block-container-tittle'>Кофейни</h3>
                    <a className='establishments-block-container-viewall'>Смотреть все</a>
                </div>
                <div className="card-container">
                    <CoffeHouseItem/>
                    <CoffeHouseItem/>
                    <CoffeHouseItem/>
                    <CoffeHouseItem/>
                </div>
            </div>

            <div className="establishments-block">
                <div className="establishments-block-container">
                    <h3 className='establishments-block-container-tittle'>Рестораны</h3>
                    <a className='establishments-block-container-viewall'>Смотреть все</a>
                </div>
                <div className="card-container">
                    <Restaurants/>
                    <Restaurants/>
                    <Restaurants/>
                    <Restaurants/>
                </div>
            </div>

            <div className="establishments-block">
                <div className="establishments-block-container">
                    <h3 className='establishments-block-container-tittle'>Бары</h3>
                    <a className='establishments-block-container-viewall'>Смотреть все</a>
                </div>
                <div className="card-container">
                    <Bars/>
                    <Bars/>
                    <Bars/>
                    <Bars/>
                </div>
            </div>
        </div>        

    </div>
  )
}
export default Establishments