import React, { Component } from "react";
import Slider from "react-slick";
import Portfolio1 from '../img/portfolio1.jpg'

export default class Portfolio extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          },
        },
      ]
    };
    return (
      <section className="portfolioSection" id="portfolio">
        <div className="container">
          <div className="portfolioContent">
            <h2>03 <span>ПОРТФОЛИО</span></h2>

            <Slider className="carousel" {...settings}>
                

                <div className="portfolioInfo">
                  <img src={Portfolio1} alt="..." />
                  
                </div>

                <div className="portfolioInfo">
                  <img src={Portfolio1} alt="..." />
                  
                </div>

                <div className="portfolioInfo">
                  <img src={Portfolio1} alt="..." />
                  
                </div>

                <div className="portfolioInfo">
                  <img src={Portfolio1} alt="..." />
                  
                </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}