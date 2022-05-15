import { React, useState, useEffect, useContext } from 'react'
import './BuyTicket.css'
import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClockFour, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Chairs from '../Components/Chairs/Chairs'
import ChooseTicket from '../Components/ChooseTicket/ChooseTicket';
import TicketProvider, { TicketContext } from '../Contexts/TicketContext';
import Payment from '../Components/Payment/Payment';
import { ChairContext } from '../Contexts/ChairContext';

export default function BuyTicket() {

  const { id, location, time } = useParams();
  const { state } = useLocation()
  const [movie, setMovie] = useState([])
  const {selectedChair} = useContext(ChairContext)
  const { price,count } = useContext(TicketContext)
  const [step, setStep] = useState(0)

  const fetchTasks = () => {
    axios.get(`https://movies-json-api.herokuapp.com/movies/${id}`)
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

  const goToNextStep = () => {
    if (count > 0) {
      setStep(step + 1)
    }
    else alert('En az bir adet bilet seçiniz')
  }
  const goToPayment = () =>{
      if(selectedChair.length < count || selectedChair.length > count){
        alert(`${count} koltuk seçiniz`)
      }
      else setStep(step + 1)
  }
  
  useEffect(() => {
    console.log(step)
  }, [step])

  return (
    <div className='cs-buyticket-container'>
      <div className='d-flex'>
        <div style={{ width: "35%" }} className='d-flex justify-content-end pe-4' >
          <div className='d-flex flex-column align-items-start pt-4' style={{ gap: '35px' }}>
            <h2>{movie.name}</h2>
            <img src={movie.image} alt="" style={{ maxWidth: '126px', width: '100%' }} />
            <div className='text-start'>
              <div className='box'>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className='ms-2'>{location}</span>
              </div>
              <div className='box'>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className='ms-2'>{state.date} {state.month}</span>
              </div>
              <div className='box'>
                <FontAwesomeIcon icon={faClockFour} />
                <span className='ms-2'>{time}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-4' style={{ width: "65%", padding: '0 60px' }}>
          {
            step === 0 ? (
              <>
                <div className='d-flex justify-content-between'>
                  <h2>Biletini Seç</h2>
                  <button className='btn btn-dark nextbtn' onClick={goToNextStep}>Devam Et</button>
                </div>
                <ChooseTicket />
              </>
            )
              : step === 1 ? (
                <>
                  <div className='next-box mb-4'>
                    <h2>Biletler</h2>
                    <div>
                      <span className="count">{count}</span>
                      TAM IMAX 3D
                    </div>
                  </div>
                  <div className='d-flex justify-content-between mb-2'>
                    <h2>Koltuk Seç</h2>
                    <button className='btn btn-dark nextbtn' onClick={goToPayment}>Devam Et</button>
                  </div>
                  <Chairs />
                </>
              )
                : step === 2 ? (
                  <>
                    <div className='next-box mb-4'>
                      <h2>Biletler</h2>
                      <span className="count">{count}</span>
                      <span>TAM IMAX 3D</span>
                    </div>
                    <div className='next-box mb-4'>
                      <h2>Koltuklar</h2>
                      <span>
                        {selectedChair.map(element => {
                          return ` ${element.letter}-${element.num}`
                        })}
                      </span>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <h2>Ödeme</h2>
                      <h2>Toplam <span className='price'>{`${price},00 ₺`}</span></h2>
                    </div>
                    <Payment />
                  </>
                )
                  : ''
          }
        </div>
      </div>
    </div>
  )
}
