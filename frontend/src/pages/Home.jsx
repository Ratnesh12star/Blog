import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />

            <Hero />

            <Blog />

            <Testimonial />

            <Footer />
        </>
    )
}

export default Home