import { React, useEffect, useState } from 'react'
import './MultipleCarousel.css'
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FC from '../../images/Posters/FC_Poster_TR_y.jpg'
import sonic from '../../images/Posters/kirpi_sonic.jpg'
import ci from '../../images/Posters/cesur-itfaiyeci.png'
import doru from '../../images/Posters/doru-macera-ormani.png'
import kuzeyli from '../../images/Posters/kuzeyli.png'
import axios from 'axios';
import MoviesDetail from '../../Pages/MoviesDetail';
const MultipleCarousel = () => {
    const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
    const fetchTasks = () => {
        axios.get("http://localhost:3004/movies")
      .then(data =>{
        setMovies(data.data)
      })
      .catch(error => {
        console.log(error);
      })
    };
    useEffect(() => {
      fetchTasks()
      }, [])
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5.5,
        slidesToScroll: 1
    }
    return (
        <div className='container-fluid mt-5'>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="pills-vision-tab" data-bs-toggle="pill" data-bs-target="#pills-vision" type="button" role="tab" aria-controls="pills-visionsoon" aria-selected="true">Vizyonda</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-soon-tab" data-bs-toggle="pill" data-bs-target="#pills-soon" type="button" role="tab" aria-controls="pills-soon" aria-selected="false">Yakında</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-vision" role="tabpanel" aria-labelledby="pills-vision-tab">
                    <div className='multiCarousel'>
                        <Slider {...settings} >
                            {movies.map((item, index) =>(
                                <div className="card" key={index} onClick={() => navigate(`/moviesdetail/${item.id}`)}>
                                <img className="img-fluid" src={item.image} alt="Card image cap" />
                                <div className="card-body">
                                    <a href="#" className="btn btn-light">Yorum Yap</a>
                                    <a href="#" className="btn btn-light">Bilet Al</a>
                                </div>
                            </div>
                            ))}
                        </Slider>
                    </div>

                </div>
                <div className="tab-pane fade" id="pills-soon" role="tabpanel" aria-labelledby="pills-soon-tab">...</div>
            </div>


        </div>
    )
}

export default MultipleCarousel