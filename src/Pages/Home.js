import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import './Home.css'
import MainCarousel from '../Components/Carousel/MainCarousel/MainCarousel'
import MultipleCarousel from '../Components/Carousel/MultipleCarousel/MultipleCarousel'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { UserContext } from '../Contexts/UserContext'
function Home() {
    const { state } = useLocation();
    return (
        <>
            <Header user={state}/>
            <MainCarousel />
            <MultipleCarousel />
            <Footer />
        </>
    )
}

export default Home