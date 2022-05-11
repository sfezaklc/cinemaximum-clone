import React from 'react'
import './Home.css'
import MainCarousel from '../Components/Carousel/MainCarousel/MainCarousel'
import MultipleCarousel from '../Components/Carousel/MultipleCarousel/MultipleCarousel'
import Footer from '../Components/Footer/Footer'
function Home () {
    return (
        <>
            <MainCarousel />
            <MultipleCarousel />
            <Footer />
        </>
    )
}

export default Home