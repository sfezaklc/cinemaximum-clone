import { React, useState, useEffect } from 'react'
import './BuyTicket.css'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClockFour } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Chairs from '../Components/Chairs/Chairs'

export default function BuyTicket() {

  const { id, location, time } = useParams();
  const [movie, setMovie] = useState([])
  const navigate = useNavigate()
  const fetchTasks = () => {
    axios.get(`http://localhost:3004/movies/${id}`)
      .then(data => {
        setMovie(data.data)
      })
      .catch(error => {
        console.log(error);
      })
  };
  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className='d-flex container align-items-center' style={{ gap: "10%" }}>
      <div style={{ width: "25%" }}>
        <h2>{movie.name}</h2>
        <img src={movie.image} alt="" />
        <div className='box'>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className='ms-2'>{location}</span>
        </div>
        <div className='box'>
          <FontAwesomeIcon icon={faClockFour} />
          <span className='ms-2'>{time}</span>
        </div>
      </div>
      <div style={{ width: "75%" }}>
        <Chairs />
      </div>
    </div>
  )
}
