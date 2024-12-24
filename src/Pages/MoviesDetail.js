import { React, useState, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header/Header';
import './MoviesDetail.css';
import { Modal } from 'bootstrap'
import Footer from '../Components/Footer/Footer';
import Days from '../Components/Tabs/Days';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function MoviesDetail() {
  const options = [
    {
      id: 1,
      city: "Ankara",
      cinemas: [
        {
          id: 1,
          location: "Ankamall"
        }, {
          id: 2,
          location: "Antares"
        }, {
          id: 3,
          location: "Atlantis"
        }, {
          id: 4,
          location: "Cepa"
        }],
    }, {
      id: 2,
      city: "İstanbul",
      cinemas: [
        {
          id: 1,
          location: "Cevahir"
        }],
    }, {
      id: 3,
      city: "İzmir",
      cinemas: [
        {
          id: 1,
          location: "Forum Bornova"
        }],
    }
  ]
  const { id } = useParams();
  const [movie, setMovie] = useState([])
  const navigate = useNavigate()
  const modalRef = useRef()
  //let modal;
  const fetchTasks = () => {
    axios.get(`https://json-api-gold.vercel.app/movies/${id}`)
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

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const bsModal = modalRef.current
    let modal = Modal.getInstance(bsModal)

    if (!modal) {
      modal = new Modal(bsModal)
      modal.hide()
    } else {
      showModal ? modal.show() : modal.hide()
    }
  }, [showModal])

  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedCinemas, setSelectedCinemas] = useState([])

  const openModal = () => {
    setShowModal(true)
  }
  const HandleCity = (el) => {
    setSelectedCity(el)
  }
  const HandleCinemas = (el) => {
    Promise.resolve()
      .then(() => {
        selectedCinemas.push(el)
        setSelectedCinemas(selectedCinemas)
        console.log(selectedCinemas)
      })
      .then(() => setShowModal(false))
      .then(() => {
        // let item = document.querySelector('#myTab li:first-child button')
        // console.log(item)
        // item.classList.add('active')
        // document.querySelector('#myTabContent').firstChild.classList.add('show', 'active')

      })
    //   Promise.resolve()
    //     .then(() => setShowModal(false))
    //     .then(() => navigate(`/buyticket/${id}/${el.location}`))
  }


  useEffect(() => {
    console.log('selectedXCinamas', typeof (selectedCinemas))
  }, [selectedCinemas])

  const customStyle = {
    backgroundImage: `url(${movie.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    left: "0",
    width: "100%",
    height: "100%",
    opacity: "0.8",
    zIndex: "-1",
    filter: "blur(2px)"
  }
  return (
    <>
      <Header />
      <div className='cs-container'>
        <div className='movie-overlay' style={customStyle}></div>
        <div className='container d-flex justify-content-center align-items-center' style={{ height: "100%" }}>
          <div className="row justify-content-between text-start" style={{ width: "100%" }}>
            <div className="col-3"><img src={movie.image} /></div>
            <div className="col-9 d-flex justify-content-between flex-column">
              <h1>{movie.name}</h1>
              <h3>Yönetmen: {movie.director}</h3>
              <div className='d-flex justify-content-between'>
                <a className='cs-btn first-btn' href="#buyTicket">Bilet Al</a>
                <a className='cs-btn'>Fragman</a>
                <a className='cs-btn'>Yorum Yap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className='row text-start'>
          <div className="col-3">
            <p><strong>Vizyon Tarihi:</strong> {movie.visionDate}</p>
            <p><strong>Süre</strong>: {movie.duration} </p>
            <p><strong>Tür:</strong> {movie.type}</p>
          </div>
          <div className="col-9">
            <strong>Özet :</strong> {movie.summary}
          </div>
        </div>
      </div>

      <div id='buyTicket' className='d-flex container mt-5 mb-5 justify-content-evenly cs-style'>
        <div>
          <h3>Bilet Al</h3>
          <p>Sinema Seç</p>
        </div>
        <div className='input' onClick={openModal}>
          Sinema Seç
          <FontAwesomeIcon icon={faSort} />
        </div>
      </div>
      <div className="modal" tabIndex="-1" id="exampleModal" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedCity ? selectedCity.city : 'Sinema Seçiniz'}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {
                selectedCity ?
                  selectedCity.cinemas.map(item => (
                    <li key={item.id} onClick={() => HandleCinemas(item)}>
                      {item.location}
                    </li>
                  ))
                  :
                  options.map(item => (
                    <li key={item.id} onClick={() => HandleCity(item)}>
                      {item.city}
                    </li>
                  ))
              }
            </div>
          </div>
        </div>
      </div>

      {selectedCinemas.length > 0 ?
        <Days selectedCinemas={selectedCinemas} id={id}></Days>
        : ''
      }
      <Footer></Footer>
    </>
  )
}
