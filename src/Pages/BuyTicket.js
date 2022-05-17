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
  const { selectedChair,setSelectedChair } = useContext(ChairContext)
  const { price, count, setCount, adultCount, studentCount,setAdultCount, setStudentCount } = useContext(TicketContext)
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
  const goToPayment = () => {
    if (selectedChair.length < count || selectedChair.length > count) {
      alert(`${count} koltuk seçiniz`)
    }
    else setStep(step + 1)
  }

  useEffect(() => {
    console.log(step)
  }, [step])

  useEffect(()=>{
  console.log("çalıştı")
  return ()=>{
    setAdultCount(0)
    setStudentCount(0)
    setSelectedChair([])
    setCount(0)
  }
  },[])
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
              <div className='box mt-3'>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className='ms-2'>{state.date} {state.month}</span>
              </div>
              <div className='box mt-3'>
                <FontAwesomeIcon icon={faClockFour} />
                <span className='ms-2'>{time}</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "65%", backgroundColor: '#ececec' }}>
          <div className='mainbox text-end goHome'><a href="/">Anasayfa'ya dön</a></div>
          {
            step === 0 ? (
              <>
                <div className='mainbox'>
                  <div className='d-flex justify-content-between'>
                    <h2>Biletini Seç</h2>
                    <button className='btn btn-dark nextbtn' onClick={goToNextStep}>Devam Et</button>
                  </div>

                  <ChooseTicket />
                </div>
                <div className='mt-3 mainbox'>
                  <h2 className="disable-title">Koltuk</h2>
                </div>
                <div className='mt-3 mainbox'>
                  <h2 className="disable-title">Ödeme</h2>
                </div>
              </>
            )
              : step === 1 ? (
                <>
                  <div className='next-box mb-2'>
                    <h2>Biletler</h2>
                    <div>
                      {adultCount > 0 &&
                        <>
                          <span className="count">{adultCount}</span> TAM
                        </>
                      }
                      {studentCount > 0 &&
                        <>
                          <span className="count ms-3">{studentCount}</span> ÖĞRENCİ
                        </>
                      }
                    </div>
                  </div>
                  <div className='mainbox'>
                    <div className='d-flex justify-content-between mb-2'>
                      <h2>Koltuk Seç</h2>
                      <button className='btn btn-dark nextbtn' onClick={goToPayment}>Devam Et</button>
                    </div>
                    <Chairs />
                  </div>

                  <div className='mt-3 mainbox'>
                    <h2 className="disable-title">Ödeme</h2>
                  </div>
                </>
              )
                : step === 2 ? (
                  <>
                    <div className='next-box mb-2 pb-0'>
                      <h2>Biletler</h2>
                      <div>
                        {adultCount > 0 &&
                          <>
                            <span className="count">{adultCount}</span> TAM
                          </>
                        }
                        {studentCount > 0 &&
                          <>
                            <span className="count ms-3">{studentCount}</span> ÖĞRENCİ
                          </>
                        }
                      </div>
                    </div>
                    <div className='next-box mb-2'>
                      <h2>Koltuklar</h2>
                      <span>
                        {selectedChair.map(element => {
                          return ` ${element.letter}-${element.num}`
                        })}
                      </span>
                    </div>
                    <div className='next-box flex-column align-items-start pb-4'>
                      <div className='d-flex justify-content-between' style={{ width: '100%' }}>
                        <h2>Ödeme</h2>
                        <h2>Toplam <span className='price'>{`${price},00 ₺`}</span></h2>
                      </div>
                      <Payment />
                    </div>

                  </>
                )
                  : ''
          }
        </div>
      </div>
    </div>
  )
}
