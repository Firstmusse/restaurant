import "./CardMore.css"
import React, { useState, useEffect } from "react";


import { useParams } from "react-router-dom";

import { getInfoCardById } from "../../services/categoryApi";
import { getCategory } from "../../services/categoryApi";
import SliderImg from "../../assets/img/slider-img.svg";


import PhoneIcon from "../../assets/icons/phone.svg"
import Geo from "../../assets/icons/geo.svg";
import Clock from "../../assets/icons/clock.svg"
import UserPhoto from "../../assets/img/user-photo-reviews.svg"
import SimpleSlider from "../../components/Body/Slider/Slider";

import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";

function More() {
  const { categoryId, cardInfoId } = useParams();

  const [rate, setRate] = useState([])
  
  const [categoryName, setCategoryName] = useState([]);

    
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    getCategory(categoryName).then((data) => {
      setCategoryName(data);
    });
    getInfoCardById(cardInfoId).then((data) => {
       setCardItem(data);
    });
      
  }, []);
  // console.log(cardItem);
  useEffect(()=>{
    
    setRate()

    cardItem.rate ? setRate(cardItem.rate[0]) : console.log(cardItem.rate,111);


    // console.log( rate );
  },[cardItem])
  
   
     
  
  return (
    <div className="card-more-block">
      <HeaderWithLogo />
      <div className="card-more">
      <div className="card-more-container">
      <div className="card-more-info">
        <h2 className="card-tittle-more">Кофейня</h2>
        <h3 className="card-title-more-name">{cardItem.name}</h3>
        <div className="card-more-info-phone">
          <img src={PhoneIcon} alt="" />
          <p className="card-more-address">Номер =/{cardItem.phone_numbers}</p>
        </div>
        <div className="card-more-info-adress">
          <img src={Geo} alt="" />
          <p>{cardItem.address}</p>
        </div>
        <div className="card-more-info-working-time">
          <img src={Clock} alt="" />
          <p>
          Режим работы {<br />}
          {cardItem.openning_times}
        </p>
        </div>
      </div>
      <div className="card-more-slider">
        <div className="card-more-slider-container">
          <img src={SliderImg} alt="" />
        </div>
        <div className="card-more-rating">Рейтинг {cardItem._average_rating ? cardItem._average_rating : 0 }/10</div>
      </div>
      </div>
      <div className="card-more-about-content-and-advert">
        <div className="card-more-about-content">
        <div className="card-more-about-block">
        <div className="card-more-about-block-title">
          <h3>О ЗАВЕДЕНИИ</h3>
        </div>
        <div className="card-more-about-block-desc">
          <p>
            Описание:{cardItem.description}
          </p>
        </div>
      </div>
      <div className="card-more-about-block-menu">
        <h3>МЕНЮ</h3>
        <div className="card-more-about-block-menu-container">
          <div className="card-more-about-block-menu-slider">
          <SimpleSlider/>
            
            
          </div>
        </div>
      </div>
      <div className="card-more-about-block-rewiews">
        <div className="card-more-amount-rewiews-and-how-to-rewiews">
        <h2>Отзывы(12)</h2>
        <h4>Как оставить отзыв?</h4>
        </div>
        <div className="card-more-about-block-rewiews-container">
          <div className="card-more-about-block-rewiews-item">
            <div className="card-more-about-block-rewiews-item-container">
              <div className="rewiews-item-container-photo">
                <img src={UserPhoto} alt="" />
              </div>
              <div className="rewiews-item-name">
                <p>Венера</p>
              </div>
              <div className="reviews-item-text">
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sint facilis ex aliquid culpa cumque architecto
                  aliquam! Corrupti, cum ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sint facilis ex aliquid culpa cumque architecto
                  aliquam! Corrupti, cum ea.
                  aliquam! Corrupti, cum ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sint facilis ex aliquid culpa cumque architecto
                  aliquam! Corrupti, cum ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sint facilis ex aliquid culpa cumque architecto
                  aliquam! Corrupti, cum ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sint facilis ex aliquid culpa cumque architecto
                  aliquam! Corrupti, cum ea. */}
                </p>
              </div>
            </div>
          </div>
          <div className="card-more-about-block-rewiews-item">
            <div className="card-more-about-block-rewiews-item-container">
              <div className="rewiews-item-container-photo">
                <img src={UserPhoto} alt="" />
              </div>
              <div className="rewiews-item-name">
                <p>Венера</p>
              </div>
              <div className="reviews-item-text">
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sint facilis ex aliquid culpa cumque architecto
                  aliquam! Corrupti, cum ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sint facilis ex aliquid culpa cumque architecto */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className="card-more-advertising">
          Ваша реклама
        </div>

      </div>
    </div>

    </div>
  );
}

{
  /* <h2>Params(id category): {categoryId}</h2>
              <h2>Card id : {cardInfoId}</h2> */



       
}
export default More;
