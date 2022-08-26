import React, { Component } from "react";
import Slider from "react-slick";
import MenuSlider from '../../../assets/img/menu-slider.svg'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-menu-container">
        <Slider {...settings}>
          <div className="slider-item">
          <img src={MenuSlider} alt="" />
          </div>
          <div className="slider-item">
          <img src={MenuSlider} alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}