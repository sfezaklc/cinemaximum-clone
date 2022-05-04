import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DRS from '../../images/DRS_Banner.png';
import FC_DS from '../../images/Fantastik_Canavarlar_Simdi_Vizyonda_.jpg'
const Carousel = () => {
    const settings = {
        autoplay:true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={FC_DS} className="img-fluid"/>
                </div>
                <div>
                    <img src={DRS} className="img-fluid"/>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel