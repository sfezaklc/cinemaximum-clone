import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Chairs from '../Components/Chairs/Chairs'

export default function BuyTicket() {

  const { id, location } = useParams();
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
    <div className='d-flex container align-items-center'>
      <div style={{ width: "25%" }}>
        <h2>{movie.name}</h2>
        <img src={movie.image} alt="" />
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          {location}
        </div>
      </div>
      <div style={{ width: "75%" }}>
        <Chairs />
      </div>
    </div>
  )
}
