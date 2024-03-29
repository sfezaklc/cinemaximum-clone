import React, { useState, useContext } from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import logo from '../../images/cinemaximum_logo.svg'
import kampanya from '../../images/uyelere-ozel-pazartesi-carsamba_1920x420-05.jpg'
import goldclass from '../../images/gold_class_salon_sizin-black-logo.png'
import moviepass from '../../images/header_cgvmoviepass.png'
import { UserContext } from '../../Contexts/UserContext';
const Header = (props) => {
    const userMail = localStorage.getItem('User')
    const {user} = props
    console.log(user)
    let navigate = useNavigate();
    const HandleLogin = (e) => {
        navigate(`/${e}`)
    }
    const [search, setSearch] = useState(false)
    const HandleSearch = () => {
        setSearch(!search)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href='' onClick={() => navigate('/')}>
                        <img src={logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <span className="cs-menu dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Menu
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li style={{ width: '40%' }}>
                                    <a className="dropdown-item d-flex justify-content-end" href="#">
                                        <div className="card" style={{ maxWidth: "400px" }}>
                                            <img src={kampanya} className='card-img-top' />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: '60%', padding: "20px 90px" }}>
                                    <a className="dropdown-item" href="#">CGV MoviePass</a>
                                    <a className="dropdown-item" href="#">CGV MoviePass</a>
                                    <a className="dropdown-item" href="#">CGV MoviePass</a>
                                    <a className="dropdown-item" href="#">CGV MoviePass</a>
                                    <a className="dropdown-item" href="#">CGV MoviePass</a>
                                </li>
                            </ul>
                        </span>
                        {
                            !search ?
                                <>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Filmler</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sinemalar</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><img src={goldclass} className="img-fluid cs-header-image-1" /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><img src={moviepass} className="img-fluid cs-header-image-2" /></a>
                                        </li>
                                    </ul>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={HandleSearch} />
                                </>
                                :
                                <div className='search'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon-1' />
                                    <input type="text" placeholder="Search.."></input>
                                    <FontAwesomeIcon icon={faXmark} onClick={HandleSearch} className='search-icon-2' />
                                </div>
                        }

                    </div>
                    <button type="button" className="btn cs-header-btn-1">Üye Ol</button>
                    { userMail ? <div className='user'>{userMail}</div> 
                    :<button type="button" className="btn cs-header-btn-2" onClick={() => HandleLogin("login")}>Giriş</button>
                     
                    }
                </div>
            </nav>
        </>
    )
}

export default Header